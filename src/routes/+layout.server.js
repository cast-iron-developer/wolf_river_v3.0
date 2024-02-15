import { navigation } from '../lib/components/globals/navigation.js';

export function load() {
	return {
		navigationItems: navigation.map((item) => ({
			title: item.title,
			href: item.href
		}))
	};
}
