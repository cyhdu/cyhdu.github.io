import { fetchMarkdownPosts } from '$lib/utils/posts';
import { json } from '@sveltejs/kit';
// import type { Post } from '$lib/types';

// async function getPosts() {
//   let posts: Post[] = []

//   const paths = 
// }


export const GET = async () => {
    const allPosts = await fetchMarkdownPosts()
    console.log(allPosts)

    const sortedPosts = allPosts.sort((a, b) => {
      return new Date(b.meta.date) - new Date(a.meta.date)
    })
  
    return json(sortedPosts)
  }