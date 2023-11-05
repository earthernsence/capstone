<script lang="ts">
  import { dimensions, penColour, useEraser, useShading } from "globals";
  let el: HTMLDivElement;
  let shading = "0";

  function getDimensionsFromBrowser() {
    // Divide the square pixels of the grid by the number of pixels
    // the user requests on one side (default 25 => 20)
    return 500 / $dimensions;
  }

  function hover() {
    if ($useEraser) {
      el.style.backgroundColor = "white";
      el.style.opacity = "1";
      el.dataset.shading = "0";
      return;
    }

    el.style.backgroundColor = $penColour;
    el.style.opacity = "1";

    if ($useShading) {
      const shadingAsFloat = parseFloat(el.dataset.shading as string);
      el.dataset.shading = `${Math.min(shadingAsFloat + 0.1, 1)}`;
      el.style.opacity = el.dataset.shading;
    }
  }

  
</script>

<div
  bind:this={el}
  class="o-pixel"
  data-shading={shading}
  style:width="{getDimensionsFromBrowser()}px"
  style:height="{getDimensionsFromBrowser()}px"
  on:mouseover={hover}
></div>