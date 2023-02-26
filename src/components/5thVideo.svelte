<script>
  import Video from "./Video.svelte";
  let altColours = false;
</script>

<Video {altColours} hash={"EE-4GvjKcfs"} title={"Трейлер God of War Ragnarök"}/>

<style>
  /* .container {
    display: flex;
    flex-direction: column;
    background: hsl(
      var(--colour-alternative-hue) var(--colour-alternative-saturation)
        var(--colour-alternative-luminance)
    );
    align-items: center;
    width: 100%;
    padding: var(--spacing-8) var(--spacing-0);
    color: hsl(
      var(--colour-dark-text-hue) var(--colour-dark-text-saturation)
        var(--colour-dark-text-luminance)
    );
  } */

  .container-alt {
    background: hsl(
      var(--colour-brand-hue) var(--colour-brand-saturation)
        var(--colour-brand-luminance)
    );

    color: hsl(
      var(--colour-dark-text-hue) var(--colour-dark-text-saturation)
        var(--colour-dark-text-luminance)
    );
  }

  .button {
    background: hsl(
      var(--colour-brand-hue) var(--colour-brand-saturation)
        var(--colour-brand-luminance)
    );
  }

  .button-alt {
    background: hsl(
      var(--colour-alternative-hue) var(--colour-alternative-saturation)
        var(--colour-alternative-luminance)
    );
  }
</style>
