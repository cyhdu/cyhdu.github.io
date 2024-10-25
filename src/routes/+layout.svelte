<script lang="ts">
    import '/src/styles/app.css'
    import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";
</script>

<Header />
<!-- If header blocks content, add a h-8 spacer at top of {slot} -->
<div class="w-full grad min-h-screen">
    <slot/>
</div>

<Footer />