// import { existsSync, mkdirSync } from 'fs';
// import { createHash } from 'crypto';
import { createRequire } from 'module';
import { SITE_TITLE, SITE_DESCRIPTION } from '../../config'

// We can't import sharp normally because it's a CJS thing and those don't seems to work well with Astro, Vite, everyone
const cjs = createRequire(import.meta.url);
const sharp = cjs('sharp');

const blogPosts = Object.fromEntries(Object.entries(import.meta.glob("../blog/*.{md,mdx}")).map(([path, getInfo]) => {
    path = path.replaceAll('../', '')
    path = path.replace('.md', '')
    path = path.replace('.mdx', '')

    return [path, getInfo]
}))

export async function getStaticPaths() {
    const paths = [...Object.keys(blogPosts), 'index', 'blog']

    return paths.map(path => ({ params: { path } }));
}

export async function get({ params, request }) {
    const getInfo = blogPosts[params.path];

    let template
    if (getInfo) {
        const info = await getInfo() as Record<string, any>
        template = createTemplate(info.frontmatter.title, info.frontmatter.description);
    } else {
        template = createTemplate(SITE_TITLE, SITE_DESCRIPTION)
    }

    // Generate our image
    const svgBuffer = Buffer.from(template);
    const body = await sharp(svgBuffer)
        .resize(1200, 675)
        .png()
        .toBuffer()

    return {
        body,
        encoding: 'binary',
    };
}

function breakText(str: string, maxLines: number, maxLineLen: number) {
    const segmenterTitle = new Intl.Segmenter('en-US', { granularity: 'word' });
    const segments = segmenterTitle.segment(str);

    let linesOut = [""]
    let lineNo = 0
    let offsetInLine = 0
    for (const word of Array.from(segments)) {
        if ((offsetInLine + word.segment.length) >= maxLineLen) {
            lineNo++
            offsetInLine = 0
            linesOut.push("")
        }

        if (lineNo >= maxLines) {
            return linesOut.slice(0, maxLines)
        }

        linesOut[lineNo] += (word.segment)
        offsetInLine += word.segment.length
    }

    return linesOut
}

function createTemplate(title: string, description: string): string {
    const [titleFirstLine, titleSecondLine] = breakText(title, 2, 35)

    const [descriptionFirstLine, descriptionSecondLine, descriptionThirdLine] = breakText(description, 3, 40)

    return `<svg width="1200" height="675" viewBox="0 0 1200 675" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
    @font-face {
      font-family: "Open Sans";
      src: local("Open Sans"),
        url("/OpenSans-VariableFont_wdth\,wght.ttf") format("truetype");
      font-display: swap;
    }
    .title {
        fill: #fff;
        font: bold 64pt sans-serif;
    }
    .description {
        fill: rgb(132, 131, 130);
        font: 40pt sans-serif;
    }
    .link {
        fill: rgb(132, 131, 130);
        font: 32pt sans-serif;
    }
    </style>
    <g clip-path="url(#clip0_107_2)">
    <rect width="1200" height="675" fill="#140B07"/>
    <path d="M0 217.438H750L1500 105.182V144.744L750 257H0V217.438Z" fill="#E6C145"/>
    <path d="M0 164.524H750L1500 52.2684V91.83L750 204.086H0V164.524Z" fill="#DD9E3D"/>
    <path d="M0 112.105H750L1500 -0.150635V39.411L750 151.667H0V112.105Z" fill="#C45F2C"/>
    <path d="M0 60.6751H750L1500 -51.5809V-12.0193L750 100.237H0V60.6751Z" fill="#D14B3B"/>
    <path d="M0 8.25601H750L1500 -104V-64.4384L750 47.8176H0V8.25601Z" fill="#BC3E45"/>
    </g>
    <!-- max length 15 chars -->
    <text x="50" y="350" font-family="Open Sans" class="title">${titleFirstLine || ''}</text>
    <text x="50" y="420" font-family="Open Sans" class="title">${titleSecondLine || ''}</text>
    <!-- max length 25 chars -->
    <text x="50" y="490" font-family="Open Sans" class="description">${descriptionFirstLine || ''}</text>
    <text x="50" y="530" font-family="Open Sans" class="description">${descriptionSecondLine || ''}</text>
    <text x="50" y="570" font-family="Open Sans" class="description">${descriptionThirdLine || ''}</text>
    <text x="840" y="620" font-family="Open Sans" class="link">jonaskruckenberg.de</text>
    <defs>
    <clipPath id="clip0_107_2">
    <rect width="1200" height="675" fill="white"/>
    </clipPath>
    </defs>
    </svg>`;
}