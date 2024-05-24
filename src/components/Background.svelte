<script lang="ts">
    import { onMount } from "svelte";
    import Cloud from "./Cloud.svelte";

    let container: HTMLDivElement;

    onMount(() => {
        const intervalId = setInterval(() => {

            const index = Math.floor(Math.random() * 4);
            const duration = (Math.floor(Math.random() * 3) + 1) * 10; // Returns 10, 20, or 30
            const depth = Math.floor(Math.random() * window.innerHeight);
            const reverse = Math.floor(Math.random() * 2) < 1;

            const cloud = new Cloud({
                target: container,
                props: {
                    index,
                    duration,
                    depth,
                    reverse,
                }
            });

            setTimeout(() => {
                cloud.$destroy();
            }, duration * 1000);

        }, 4000) // 4 seconds

        return () => clearInterval(intervalId);
    })

</script>

<div bind:this={container} class={`absolute top-0 left-0 -z-50 h-screen w-screen overflow-hidden bg-blue-400`}/>