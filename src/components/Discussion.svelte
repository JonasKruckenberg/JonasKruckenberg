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
        /* We must set a min-height so that astro's client:visible directive can actually recognize or component */
        min-height: 3rem;
    }
</style>
