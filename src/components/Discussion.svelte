<script lang="ts">
    import Giscus from "@giscus/svelte";
</script>

<div>
    {#if !import.meta.env.SSR}
        <Giscus
        repo="JonasKruckenberg/JonasKruckenberg"
        repoId="MDEwOlJlcG9zaXRvcnkzMDczMDE3MzU="
        category="Blog"
        categoryId="DIC_kwDOElENZ84CTS3r"
        mapping="title"
        strict="1"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="dark"
        lang="en"
        loading="lazy"
        />
    {/if}
</div>

<style>
    div {
        margin-top: 10vh;
        margin-bottom: 5vh;
    }
</style>
