import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    // const post = posts.find((post) => post.metadata.slug === params.slug);
    // const meta = post.metadata;
    // console.log(post)
    try {

        const content = await import(`/src/lib/content/${params.slug}.md`)

        return {
            meta: content.metadata,
            content: content.default
        }

    } catch (e) {
        throw error(404, `Could not find ${params.slug}`)
    }

}