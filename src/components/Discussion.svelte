<script lang="ts">
    import Giscus from "@giscus/svelte";
</script>

<div>
    {#if !import.meta.env.SSR}
        <Giscus
            repo="JonasKruckenberg/JonasKruckenberg"
            repo-id="MDEwOlJlcG9zaXRvcnkzMDczMDE3MzU="
            category="Blog"
            category-id="DIC_kwDOElENZ84CTS3r"
            mapping="title"
            strict="1"
            reactions-enabled="1"
            emit-metadata="0"
            input-position="top"
            theme="transparent_dark"
            lang="en"
            loading="lazy"
            async
        />
    {/if}
</div>

<style>
    div {
        margin-top: 15vh;
        margin-bottom: 10vh;
    }
</style>
