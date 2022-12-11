<script>
	import { supabase } from '$lib/supabaseClient'
	import { onMount } from 'svelte'
	import Box from '../Box.svelte';

	let doggoDB = []
	onMount(async () => {
		const { data, error } = await supabase
			.from('doggoDB')
			.select('*')
		
		/*doggoDB = data[0]*/
		doggoDB = data
	})

	let doggoNameProposal = undefined
	let doggoCategoryProposal = undefined
	let doggoUrlProposal = undefined
	
	let doggoProposal = []
	const handleClick = async () => {
		const {data, error} = await supabase
			.from('doggoDB')
			.insert([
				{name: doggoNameProposal, category: doggoCategoryProposal, url: doggoUrlProposal}
			])
	}

	const supprDoggo = async () =>{
		const {data, error} = await supabase
			.from('doggoDB')
			.insert([
		])
	}
</script>


{#each doggoDB as { name, category, url }}
	<Box>
		<img src={url} alt="loading" width="450"/> <br>
		{name} <br>
		{category}
	</Box>
{/each}

<div>
  <label for="fname">Doggo Name:</label><br>
  <input type="text" id="fname" name="fname" bind:value={doggoNameProposal}><br>
  <label for="lname">Doggo Category:</label><br>
  <input type="text" id="lname" name="lname" bind:value={doggoCategoryProposal}><br>
  <label for="url">Photo of the doggo (url):</label><br>
  <input type="text" id="url" name="url" bind:value={doggoUrlProposal}><br>
</div>

<button on:click={handleClick}>
	<span> 
		Propose a doggo
	</span>
</button>


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

	button {
    display: inline-block;
    background-color: #FFFFF;
    border-radius: 10px;
    border: 4px double #000000;
    color: #000000;
    text-align: center;
    font-size: 20px;
    padding: 10px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 5px;
  }
  
	button span {
  	cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
  }
  
	button span:after {
    content: "\00bb";
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
  }
  
	button:hover {
  background-color: #E2E2E2;
  }
  
	button:hover span {
  padding-right: 20px;
  }
  
	button:hover span:after {
  opacity: 1;
  right: 0;
  }
</style>
