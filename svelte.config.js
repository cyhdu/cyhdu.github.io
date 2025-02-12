import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { escapeSvelte, mdsvex } from 'mdsvex';
import shiki from 'shiki';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md','.svx'],
			layout: './src/lib/components/mdsvex.svelte',
			smartypants: true,
			highlight: {
				highlighter: async (code, lang = 'text') => {
					const highlighter = await shiki.getHighlighter({
						theme: 'nord'})
					const html = escapeSvelte(highlighter.codeToHtml(code, { lang }))
					return `{@html \`${html}\`}`
				}
			}

		})
	],

	extensions: ['.svelte', '.md','.svx'],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			pages: 'build',
			fallback: undefined,
			strict: true
		}),
		paths: {
			assets: dev ? '' : process.env.BASE_PATH,
			base: dev ? '' : process.env.BASE_PATH,
		},
		prerender: {
			handleHttpError: 'warn'
		}
	}
};

export default config;
