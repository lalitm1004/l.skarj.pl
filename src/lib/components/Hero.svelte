<script lang="ts">
    const IMAGE_CLASS = "animate-hover w-[84px] h-[84px] md:w-[96px] md:h-[96px] translate-y-[-10px]"
    const IMAGE_CLASS_I = "animate-hover w-[56px] h-[84px] md:w-[64px] md:h-[96px] translate-y-[-10px]" 
</script>

<div class={`hero flex-col`}>
    <div class={`name flex mb-8`}>
        <img class={IMAGE_CLASS} src={"/assets/l.svg"} alt={"letter l"} style="animation-delay: 0ms"/>
        <img class={IMAGE_CLASS} src={"/assets/a.svg"} alt={"letter l"} style="animation-delay: 200ms"/>
        <img class={IMAGE_CLASS} src={"/assets/l.svg"} alt={"letter l"} style="animation-delay: 400ms"/>
        <img class={IMAGE_CLASS_I} src={"/assets/i.svg"} alt={"letter l"} style="animation-delay: 600ms"/>
        <img class={IMAGE_CLASS} src={"/assets/t.svg"} alt={"letter l"} style="animation-delay: 800ms"/>
    </div>

    <div class={`links w-full flex justify-around text-2xl font-terminal`}>
        <a class={`hover:opacity-70 active:opacity-60`} href="/blog">blog</a>
        <a class={`hover:opacity-70 active:opacity-60`} href="https://skarj.pl" target="_blank">skarj.pl</a>
        <a class={`hover:opacity-70 active:opacity-60`} href="https://github.com/lalitm1004" target="_blank">github</a>

    </div>
</div>
