<script lang="ts">
    import { onMount } from "svelte";

    export let index: number;
    export let duration: number;
    export let depth: number;
    export let reverse: boolean;

    let imgElement: HTMLImageElement;

    onMount(() => {
        if (imgElement) {
            imgElement.style.position = 'absolute'
            imgElement.style.top = `${depth}px`
        }
    })
</script>

<img
    bind:this={imgElement}
    class={`animate-cloud-${duration}${reverse ? "-reverse" : ""}`}
    src={`/assets/cloud${index}.svg`}
    alt={`Cloud Type ${index}`}
/>

<style>
    @keyframes cloud {
        0% {
            transform: translateX(-1000px);
        }
        100% {
            transform: translateX(100vw);
        }
    }

    @keyframes cloud-reverse {
        0% {
            transform: translateX(100vw);
        }
        100% {
            transform: translateX(-1000px);
        }
    }

    .animate-cloud-10 {
        animation: cloud 10s linear;
    }

    .animate-cloud-20 {
        animation: cloud 20s linear;
    }

    .animate-cloud-30 {
        animation: cloud 30s linear;
    }

    .animate-cloud-10-reverse {
        animation: cloud-reverse 10s linear
    }

    .animate-cloud-20-reverse {
        animation: cloud-reverse 20s linear
    }

    .animate-cloud-30-reverse {
        animation: cloud-reverse 30s linear
    }
</style>