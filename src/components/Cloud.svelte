<script lang="ts">
    import { onMount } from "svelte";

    export let index: Number;
    export let depth: Number;
    export let duration: Number;
    export let reverse: Boolean;

    let imgElement: HTMLImageElement;

    onMount(() => {
        if (imgElement) {
            imgElement.style.position = 'absolute';
            imgElement.style.top = `${depth}px`
        }
    })
</script>

<img
    bind:this={imgElement}
    class={`absolute animate-cloud-${duration}${reverse ? "-reverse": ""} top-[${depth}px]`}
    src={`/clouds/cloud${index}.svg`}
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
