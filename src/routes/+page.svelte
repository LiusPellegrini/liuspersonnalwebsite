<script>
	import { supabase } from '$lib/supabaseClient';
	import { onMount } from 'svelte'

	let homepageLayout = []
	onMount(async () => {
		const { data, error } = await supabase
			.from('homepageLayout')
			.select('*')
	
		homepageLayout = data
	})

	let homepageContent = []
	onMount(async () => {
		const { data, error } = await supabase
			.from('homepageContent')
			.select('*')
	
		homepageContent = data
	})
</script>


{#each homepageLayout as { imageUrl, imageAltText}}
	<section>
		<h1>
			<span>
				<picture>
					<img style="max-width:100%" src={imageUrl} alt={imageAltText} />
				</picture>
			</span>
		</h1>
	</section>
{/each}

{#each homepageContent as {sectionTitle, sectionText, sectionImageUrl, sectionImageAltText}}
	<section>
		<h1> {sectionTitle} </h1>
		<picture>
			<img src={sectionImageUrl} alt={sectionImageAltText} />
		</picture>
		{sectionText}
	</section>
{/each}


<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>