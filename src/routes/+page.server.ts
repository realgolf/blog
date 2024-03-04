import type { posts } from "$lib/scripts/types";
import { get_frontmatter } from "$lib/server";

export const prerender = true;


export const load = async () => {
	const unsorted_posts = get_frontmatter<posts>(
		import.meta.glob('/src/lib/posts/**/*.md', {
			as: 'raw',
			eager: true
		})
	);

	const posts = [...unsorted_posts].sort((p, q) => q.published.getTime() - p.published.getTime());

	const meta = {
		title: 'RealGolf.Games - Blog',
		description: 'A lot abour RealGolf.Games and the games we make.'
	};

	return { meta, posts };
};
