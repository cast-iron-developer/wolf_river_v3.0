<script>
	import '../app.scss';
	import Footer from '../lib/components/globals/footer/footer.svelte';
	import Navigation from '../lib/components/globals/navigation/navigation.svelte';

	export let data;
	console.log(data);
</script>

<main>
	<Navigation navItems={data.navigationItems}></Navigation>
	<slot />
	<Footer navItems={data.navigationItems}></Footer>
</main>
