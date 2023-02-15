<script>
  import Video from "./Video.svelte";
  let altColours = false;
</script>

<Video {altColours} hash={"GjYbK_-w9pM"} title={"Трейлер God of War 2"} />

<style>
  .container {
    display: flex;
    flex-direction: column;
    background: hsl(
      var(--colour-brand-hue) var(--colour-brand-saturation)
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
      var(--colour-light-text-hue) var(--colour-light-text-saturation)
        var(--colour-light-text-luminance)
    );

    color: hsl(
      var(--colour-brand-hue) var(--colour-brand-saturation)
        var(--colour-brand-luminance)
    );
  }

  .button {
    background: hsl(
      var(--colour-light-text-hue) var(--colour-light-text-saturation)
        var(--colour-light-text-luminance)
    );
  }

  .button-alt {
    background: hsl(
      var(--colour-brand-hue) var(--colour-brand-saturation)
        var(--colour-brand-luminance)
    );
  }
</style>
