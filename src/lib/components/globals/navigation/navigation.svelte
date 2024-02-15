<script>
  import { page } from '$app/stores';
  import { NavBrand, NavHamburger, NavLi, NavUl, Navbar } from 'flowbite-svelte';
  import { navigation } from "./navigation.js";
  $: activeUrl = $page.url.pathname;
</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Wolf River Psychology
    </span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden} {activeUrl}>
    {#each navigation as {title, href}}
      <NavLi href={href}>{title}</NavLi>
    {/each}
  </NavUl>
</Navbar>