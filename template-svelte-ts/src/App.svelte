<script lang="ts">
  import logo from './logo.svg';
  const message: string  = 'Learn Svelte';
</script>

<style>
	:global(body) {
		margin: 0;
		font-family: Arial, Helvetica, sans-serif;
  }
  :global(a) {
		color: #ff3e00;
  }
	.app {
		text-align: center;
	}
	.app-header {
		background-color: #F9F6F6;
		color: #333;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: calc(10px + 2vmin);
	}
	.logo {
		height: 40vmin;
		pointer-events: none;
		margin-bottom: 1.0rem;
	}
</style>

<div class="app">
	<header class="app-header">
    <img src={logo} class="logo" alt="Svelte" />
		<p>
			Edit <code>src/App.svelte</code> and save to reload.
		</p>
		<a
			class="App-link"
			href="https://svelte.dev"
			target="_blank"
			rel="noopener noreferrer"
		>
			{message}
		</a>
	</header>
</div>
