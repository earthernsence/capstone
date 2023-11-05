<script lang="ts">
  import Pixel from "@/grid/Pixel.svelte";
  import { dimensions } from "globals";
  import { getNeededNumberOfSquares } from "$lib";

  $: squares = getNeededNumberOfSquares(500 / $dimensions);
</script>

<div class="o-grid-wrapper" id="wrapper">
  {#key squares}
    {#each { length: squares } as _}
      <Pixel />
    {/each}
  {/key}
</div>