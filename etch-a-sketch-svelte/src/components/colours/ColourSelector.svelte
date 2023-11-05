<script lang="ts">
  export let colour: string;
  import { penColour } from "globals";
  let el: HTMLButtonElement;

  $: {
    if (el) {
      if (colour === $penColour) el.classList.add("l-colour-selector__selected");
      else el.classList.remove("l-colour-selector__selected");
    }
  }
</script>

<button
    class="o-pixel o-pixel--selectable"
    bind:this={el}
    style="background-color:{colour}"
    data-colour={colour}
    on:click={() => $penColour = colour}
/>