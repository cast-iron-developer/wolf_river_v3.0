<script>
	import logo from '$lib/images/logo/logo.svg';
	import {
		Footer,
		FooterBrand,
		FooterCopyright,
		FooterLink,
		FooterLinkGroup
	} from 'flowbite-svelte';
	export let navItems;
</script>

<Footer footerType="logo">
	<div class="sm:flex sm:items-center sm:justify-between">
		<FooterBrand imgClass="w-40" href="/" src={logo} alt="Wolf River Psychology" />
		<FooterLinkGroup
			ulClass="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400"
		>
			{#each navItems as { title, href }}
				<FooterLink {href}>{title}</FooterLink>
			{/each}
		</FooterLinkGroup>
	</div>
	<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
	<FooterCopyright href="https://github.com/cast-iron-developer" by="Cast Iron Developer" />
</Footer>
