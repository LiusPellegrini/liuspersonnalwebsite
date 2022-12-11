<script>
    import Header from './Header.svelte';
    import './styles.css';
    import { supabase } from '$lib/supabaseClient';
	import { onMount } from 'svelte';

    let websiteLayout = []
	onMount(async () => {
		const { data, error } = await supabase
			.from('websiteLayout')
			.select('*')
	
	websiteLayout = data
	});
</script>


{#each websiteLayout as {header, firstPageButtonName, secondPageButtonName, footer}}
    <div class="app">
        <header style="text-align:center;">
            <h1><button style="width: 100%; height: 100%;" class="glow-on-hover" type="button">{header}</button></h1>
            <a href="/"><button class="glow-on-hover" type="button">{firstPageButtonName}</button></a>
            <a href="/page2"><button class="glow-on-hover" type="button">{secondPageButtonName}</button></a>
        </header>

        <main>
            <slot/>
        </main> 
        
        <footer>
            <p>{footer}</p>
        </footer>
    </div>
{/each}


<style>
    body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background: #000;
    }

    .glow-on-hover {
    /*  width: 220px;
        height: 50px; */
        border: none;
        outline: none;
        color: #000;
        background: transparent;
        cursor: pointer;
        position: relative;
        z-index: 0;
        border-radius: 10px;
    }

    .glow-on-hover:before {
        content: '';
        background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
        position: absolute;
        top: -2px;
        left:-2px;
        background-size: 400%;
        z-index: -1;
        filter: blur(5px);
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        animation: glowing 20s linear infinite;
        opacity: 1;
        transition: opacity .3s ease-in-out;
        border-radius: 10px;
    }

    .glow-on-hover:active { /* text off the button when clicked */
        color: #000
    }

    .glow-on-hover:active:after {
        background: transparent;
    }

    .glow-on-hover:hover:before {
        opacity: 1;
    }

    .glow-on-hover:after {
        z-index: -1;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: transparent ;
        left: 0;
        top: 0;
        border-radius: 10px;
    }

    @keyframes glowing {
        0% { background-position: 0 0; }
        50% { background-position: 400% 0; }
        100% { background-position: 0 0; }
    }

    .buttonLink {

    }
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        width: 100%;
        max-width: 64rem;
        margin: 0 auto;
        box-sizing: border-box;
    }

    footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 12px;
    }

    footer a {
        font-weight: bold;
    }

    @media (min-width: 480px) {
        footer {
            padding: 12px 0;
        }
    }
</style>