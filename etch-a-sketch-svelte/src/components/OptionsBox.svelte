<script lang="ts">
  import { dimensions, useEraser, useShading } from "globals";

  function changeDimensions(up: Boolean): void {
    up ? $dimensions++ : $dimensions--;
  } 

  function toggleEraser() {
    $useEraser = !$useEraser;
  }

  function toggleShading() {
    $useShading = !$useShading;
  }

  function formatBoolean(value: Boolean): string {
    return value ? "ON" : "OFF";
  }
</script>

<div class="c-options-box">
  <div class="c-options-box__dimensions">
      <div class="o-text__medium">Grid Dimensions</div>
      <br>
      <div class="l-dimension-slider">
          <button class="c-ad-slider__button" on:click="{() => changeDimensions(false)}">
              <div class="fas fa-minus"></div>
          </button>
          <input class="o-dimension-slider" id="slider" name="dimensions" type="range" min="1" max="50" bind:value={$dimensions} />
          <button class="c-ad-slider__button" on:click="{() => changeDimensions(true)}">
              <div class="fas fa-plus"></div>
          </button>
      </div>
      <br>
      <div class="o-text" id="dimensions-label">Currently {$dimensions} x {$dimensions}</div>
  </div>
  <br>
  <button class="o-primary-btn" id="eraser-toggle" on:click="{toggleEraser}">Eraser: {formatBoolean($useEraser)}</button>
  <br>
  <button class="o-primary-btn" id="shading-toggle" on:click="{toggleShading}">Shading: {formatBoolean($useShading)}</button>
  <br>
  <button class="o-primary-btn" on:click="{() => $dimensions + 1 - 1}">Clear grid</button>
</div>