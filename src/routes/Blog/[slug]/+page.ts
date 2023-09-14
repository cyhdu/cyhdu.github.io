import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    // const post = posts.find((post) => post.metadata.slug === params.slug);
    // const meta = post.metadata;
    // console.log(post)
    // const content = await import(`./lib/content/${params.slug}.md`)
    const content = await import(`./../../../lib/content/${params.slug}.md`)

    return {
        meta: content.metadata,
        content: content.default
    }

}