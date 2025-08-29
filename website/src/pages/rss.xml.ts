import rss from '@astrojs/rss';
import { MarkdownInstance } from 'astro'
import { SITE_TITLE, SITE_DESCRIPTION } from '../config';
import sanitizeHtml from 'sanitize-html'
import { lastUpdateDate, pubDate } from '../lib/dates';

export const get = async () => {
	const posts = import.meta.glob('./blog/**/*.{md,mdx}')

	const items = await Promise.all(Object.entries(posts).map(async ([path, getPost]) => {
		const post = await getPost() as MarkdownInstance<{ title: string, description: string, pubDate: string }>;

		console.log(await pubDate(path));

		return {
			title: post.frontmatter.title,
			description: post.frontmatter.description,
			pubDate: await pubDate(`src/pages${post.url}.md`) || new Date(),
			content: sanitizeHtml(post.compiledContent()),
			link: post.url
		}
	}))	

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: import.meta.env.SITE,
		items
	});
}