<script lang="ts">
    // import '/src/styles/app.scss';
    import {page} from '$app/stores';
    import {base} from '$app/paths';
</script>
<header class="z-50">
    <!-- <h3> This is my header </h3> -->
    <!-- <h2> There are many like it but this one is mine </h2> -->
    <nav>
        <svg viewBox="0 0 2 3" aria-hidden="true">
            <path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
        </svg>
        <ul>
            <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
                <a href="{base}/">Home</a>
            </li>
            <li aria-current={$page.url.pathname === '/Projects' ? 'page' : undefined}>
                <a href="{base}/Projects">Projects</a>
            </li>
            <li aria-current={$page.url.pathname === '/Blog' ? 'page' : undefined}>
                <a href="{base}/Blog">Blog</a>
            </li>
            <li aria-current={$page.url.pathname === '/About' ? 'page' : undefined}>
                <a href="{base}/About">About</a>
            </li>
        </ul>
        <!-- <svg viewBox="0 0 2 3" aria-hidden="true">
            <path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
        </svg> -->
    </nav>

</header>


<style>
    /* $primary-color: var(--darkprimary);
    $background: var(--primary); */

    header {
        position: fixed;
        width: 100%;
        display: flex;
    }

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
        --background: azure;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

    li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid gray;
	}

    nav {
        display: flex;
        justify-content: center;
        margin-left:auto;
    }	

    nav a {
        display: flex;
        height: 100%;
        align-items: center;
        padding: 0 0.5rem;
        color: #2A2D34;
        font-weight: 700;
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        text-decoration: none;
        transition: color 0.2s linear,
                    font-size 0.2s ease;
    }

    nav a:hover {
        color: gray;
        font-size: 120%;
        transition: color 0.2s ease,
                    font-size 0.2s ease;
    }
    
    path {
        fill: var(--background);
    }

	svg {
		width: 2em;
		height: 3em;
		display: block;
        fill:azure;
	}

    h3 {
        color: orange;
        background-color: var(--background);
    }

</style>