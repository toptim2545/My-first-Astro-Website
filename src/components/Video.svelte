<script lang="ts">
  let primary = "lightText";
  let secondary = "darkText";
  let hue = {
    // lightText: "var(--colour-brand-hue)",
    lightText: 39,
    darkText: "var(--colour-dark-text-hue)",
  };
  let saturation = {
    // lightText: "var(--colour-brand-saturation)",
    lightText: "92%",
    darkText: "var(--colour-dark-text-saturation)",
  };
  let luminance = {
    // lightText: "var(--colour-brand-luminance)",
    lightText: "57%",
    darkText: "var(--colour-dark-text-luminance)",
  };

  export let altColours = false;
  export let hash: string = "";
  export let title: string = "";

  const youtube = "https://www.youtube-nocookie.com/embed/";
</script>

<section class={`container${altColours ? " container-alt" : ""}`}>
  <h2>{title}</h2>
  <div class="video-container">
    <iframe
      {title}
      width="560"
      height="315"
      src={youtube + hash}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
  <button
    class={`button${altColours ? " button-alt" : ""}`}
    on:click={() => {
      altColours = !altColours;
    }}><span class="screen-reader-text">Toggle colours</span></button
  >
</section>

<style>
  .container {
    display: flex;
    flex-direction: column;
    background: hsl(hue[primary] saturation[primary] luminance[primary]);
    align-items: center;
    width: 100%;
    padding: var(--spacing-8) var(--spacing-0);
    color: hsl(hue[secondary] saturation[secondary] luminance[secondary]);
  }
</style>
