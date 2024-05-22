<script lang="ts">
    import { onMount } from "svelte";
    import Cloud from "./Cloud.svelte";

    let container: HTMLElement;

    onMount(() => {
        const intervalId = setInterval(() => {

            const index = Math.floor(Math.random() * 4);
            const duration = Math.floor(Math.random() * 3) * 10 + 10;
            const depth = window.innerHeight - Math.floor(Math.random() * window.innerHeight);
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
            }, duration * 1000)

        }, 4000); // 1 seconds

        return () => clearInterval(intervalId);
    });
</script>

<div bind:this={container} class={`top-0 left-0 absolute h-screen w-screen overflow-hidden`}></div>