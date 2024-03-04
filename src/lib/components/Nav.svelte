<script lang="ts">
	import { links } from '$lib/links';
	import Fa from 'svelte-fa';
</script>

<nav>
	<ul>
		{#each links as { path, icon, title }}
			<li>
				<a href={path} aria-label={title}>
					<Fa {icon} />
				</a>
				<div class="path">
					<span class="no-line"
						><a href="https://realgolf.games"><img src="/logo.PNG" alt="RealGolfGames Logo" /></a>/
						<a href="https://blog.realgolf.games">Blog</a></span
					>
				</div>
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	@import '$lib/scss/Nav.scss';
</style>
