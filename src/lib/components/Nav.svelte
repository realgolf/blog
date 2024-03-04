<script lang="ts">
	import { faHouse, type IconDefinition } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	type link = {
		path: string;
		icon: IconDefinition;
		title: string;
	};

	let links: link[] = [
		{
			path: '/',
			icon: faHouse,
			title: 'Home'
		}
	];
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

	:root {
		--mulitple: 1.5;
	}

	span {
		font-size: calc(var(--medium-font) * var(--mulitple));
		color: var(--label-color);
	}

	a {
		color: var(--font-color);
	}

	img {
		height: calc(var(--medium-font) * var(--mulitple));
		width: calc(var(--medium-font) * var(--mulitple));
	}
</style>
