<script lang="ts">
	import { navigating } from '$app/stores';
</script>

{#if $navigating}
	<div />
{/if}

<style>
	@import '$lib/scss/LoadProgress.scss';
</style>
