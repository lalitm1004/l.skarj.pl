<script lang="ts">
    import Hero from "../components/Hero.svelte"
    import LastFm from "../components/LastFm.svelte";
    import Background from "../components/Background.svelte";
</script>

<div class={`main relative h-screen w-screen flex justify-center items-center`}>
    <Background />
    <LastFm />
    <Hero />
</div>