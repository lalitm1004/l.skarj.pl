<div class={`flex`}>
    {#each "lalit" as letter, index (index)}
        <img
            src={`/alphabet/${letter}.svg`}
            alt={letter}
            class={`hover-animation`}
            style={`transform: translateY(-10px); animation-delay: ${(index + 1) * 200}ms`}
        />
    {/each}
</div>

<style>
    img {
        height: 85px;
        width: 85px;
    }

    @keyframes hover {
        0%, 100% {
            transform: translateY(-10px);
        }
        50% {
            transform: translateY(10px);
        }
    }

    .hover-animation {
        animation: hover 4s ease-in-out infinite;
    }
</style>