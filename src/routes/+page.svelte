<script lang="ts">
    import Name from "../components/Name.svelte";
    import Clouds from "../components/Clouds.svelte";

    

</script>

<main>
    <div class={`relative h-screen w-screen flex flex-col justify-center items-center`}>
        <Clouds />
        
        <div class="z-10 flex flex-col items-center">
            <Name />
            
            <div class={`flex justify-around mt-10 w-[500px]`}>
                <a href="/blog" target="_blank" class="mx-3">
                    <p class="font-terminal text-2xl">blog</p>
                </a>

                <a href="https://skarj.pl" target="_blank" class="mx-3">
                    <p class="font-terminal text-2xl">skarj.pl</p>
                </a>

                <a href="https://github.com/lalitm1004" target="_blank" class="mx-3">
                    <p class="font-terminal text-2xl">github</p>
                </a>
            </div>
        </div>
    </div>
</main>

<style>
    a {
        height: 32px;
    }

    a:hover {
        border-bottom: 3px solid black;
    }
</style>