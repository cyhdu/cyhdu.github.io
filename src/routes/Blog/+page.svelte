<script>
    import PostList from '$lib/components/PostList.svelte';
    export let data
</script>

<div class="content p-14 max-w-7xl mx-auto">
    <!-- <h1 class="text-5xl align-middle text-center pt-14 font-semibold">This page is still under construction</h1> -->
    <h1 class="text-5xl align-middle text-center pt-14 font-semibold pb-3"> BLOG </h1>
    <hr class="w-40 mx-auto mb-3 h-1 bg-gray-300 border-0 rounded"/>

  
    <ul>
      {#each data.posts as post}
      <PostList {post} />
      {/each}
    </ul>
</div>