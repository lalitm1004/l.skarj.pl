<script lang="ts">
    import Hero from "$lib/components/Hero.svelte";
    import Spotify from "$lib/components/Spotify.svelte";
    import Background from "$lib/components/Background.svelte";
</script>

<div class={`main relative h-screen w-screen flex justify-center items-center`}>
    <Background />
    <Spotify />
    <Hero />
</div>