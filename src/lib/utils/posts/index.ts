export const fetchMarkdownPosts = async () => {
    const allPostFiles = import.meta.glob('/src/lib/content/*.svx')
    // console.log(allPostFiles)
    const iterablePostFiles = Object.entries(allPostFiles)
    
    let allPosts = await Promise.all(
      iterablePostFiles.map(async ([path, resolver]) => {
        const { metadata } = await resolver()
        const postPath = "Blog/" + path.split('/').at(-1)?.replace('.svx', '')
  
        return {
          meta: metadata,
          path: postPath,
        }
      })
    )

    // allPosts = allPosts.sort((first, second) => 
    //   new Date(second.meta.date).getTime() - new Date(first.meta.date).getTime()
    // )
  
    return allPosts
  }