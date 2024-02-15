<script>
	import { page } from '$app/stores';
	import { NavBrand, NavHamburger, NavLi, NavUl, Navbar } from 'flowbite-svelte';
	$: activeUrl = $page.url.pathname;
	export let navItems;
</script>

<Navbar let:hidden let:toggle>
	<NavBrand href="/">
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
			Wolf River Psychology
		</span>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden} {activeUrl}>
		{#each navItems as { title, href }}
			<NavLi {href}>{title}</NavLi>
		{/each}
	</NavUl>
</Navbar>
