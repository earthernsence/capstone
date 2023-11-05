<script lang="ts">
  // Components
  import GridSection from "@/GridSection.svelte";
  import MainLabel from "@/MainLabel.svelte";
  import OptionsBox from "@/OptionsBox.svelte";

  // CSS
  import "../styles/styles.css";
  import "../styles/tooltips.css";
  import "../styles/all.css";
</script>

<body>
  <div>
    <MainLabel />
  </div>
  <div>
    <GridSection />
  </div>
  <div>
    <OptionsBox />
  </div>
</body>