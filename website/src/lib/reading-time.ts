import sanitizeHtml from "sanitize-html";

const WORDS_PER_MINUTE = 200;

export function calculateReadingTime(input: string): number {
    const plaintext = sanitizeHtml(input, {
        allowedTags: [],
        allowedAttributes: {},
    });
    
    const segmenter = new Intl.Segmenter('en', { granularity: 'word' });
    const words = Array.from(segmenter.segment(plaintext));

    return Math.floor(words.length / WORDS_PER_MINUTE)
}