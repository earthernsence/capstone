<script lang="ts">
  import ColourSelector from "@/colours/ColourSelector.svelte";
  const COLOURS: Array<string> = ["black", "green", "red", "lightblue", "gray", "#37a4ba"];
</script>

<div class="l-colour-selectors">
  {#each COLOURS as colour}
    <ColourSelector colour={colour} />
  {/each}
</div>