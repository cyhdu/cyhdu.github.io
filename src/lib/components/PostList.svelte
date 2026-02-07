<script lang="ts">
    import { formatDate } from '$lib/utils/utils'
    export let post;
</script>

<div class="py-2">
    <a href={post.path} class="">
        <div class="bg-gray-50 shadow py-4 px-5 rounded-lg">
            <p class="text-2xl font-medium"> {post.meta.title} </p>
            <!-- Add date formatter here -->
            <p class="text-md font-small"> {formatDate(post.meta.date)} </p>
            <hr class="bg-gray-300 h-px my-2 mx-3 border-0"/>
            <p> {post.meta.description} </p>
        </div>
    </a>
</div>