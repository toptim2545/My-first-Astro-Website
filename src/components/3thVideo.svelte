<script>
  let altColours = false;
</script>

<section class={`container${altColours ? " container-alt" : ""}`}>
  <h2>Новый снапшот майнкрафта</h2>
  <div class="video-container">
    <iframe
      title="Новый снапшот майнкрафта"
      width="560"
      height="315"
      src="https://www.youtube-nocookie.com/embed/lOGUB8WrQLY"
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
    background: hsl(
      var(--colour-brand-luminance) var(--colour-brand-saturation)
        var(--colour-brand-luminance)
    );
    align-items: center;
    width: 100%;
    padding: var(--spacing-8) var(--spacing-0);
    color: hsl(
      var(--colour-dark-text-hue) var(--colour-dark-text-saturation)
        var(--colour-dark-text-luminance)
    );
  }

  .container-alt {
    background: hsl(
      var(--colour-secondary-hue) var(--colour-secondary-saturation)
        var(--colour-secondary-luminance)
    );

    color: hsl(
      var(--colour-light-text-hue) var(--colour-light-text-saturation)
        var(--colour-light-text-luminance)
    );
  }

  .button {
    background: hsl(
      var(--colour-secondary-hue) var(--colour-secondary-saturation)
        var(--colour-secondary-luminance)
    );
  }

  .button-alt {
    background: hsl(
      var(--colour-brand-hue) var(--colour-brand-saturation)
        var(--colour-brand-luminance)
    );
  }
</style>
