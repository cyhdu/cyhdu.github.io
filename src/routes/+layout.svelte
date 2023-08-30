<script lang="ts">
    import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";
    // import '../styles/app.scss'
    import '../styles/app.css'
</script>

<Header />
<!-- If header blocks content, add a h-8 spacer at top of {slot} -->
<slot/>

<Footer />