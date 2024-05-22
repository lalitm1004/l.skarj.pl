<div class={`flex`}>
    {#each "lalit" as letter, index (index)}
        <img
            src={`/alphabet/${letter}.svg`}
            alt={letter}
            class={`hover-animation ${letter === "i" ? "i": ""}`}
            style={`transform: translateY(-10px); animation-delay: ${(index + 1) * 200}ms`}
        />
    {/each}
</div>

<style>
    img {
        height: 84px;
        width: 84px;
    }

    .i {
        height: 84px;
        width: 56px;
    }

    @media screen and (min-width: 600px) {
        img {
            height: 96px;
            width: 96px;
        }

        .i {
            height: 96px;
            width: 64px;
        }   
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