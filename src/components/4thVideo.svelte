<script>
  import Video from "./Video.svelte";
  let altColours = false;
</script>

<Video {altColours} hash={"K0u_kAWLJOA"} title={"Трейлер God of War 2018"} />

<style>
  /* .container {
    display: flex;
    flex-direction: column;
    background: hsl(
      var(--colour-dark-text-hue) var(--colour-dark-text-saturation)
        var(--colour-dark-text-luminance)
    );
    align-items: center;
    width: 100%;
    padding: var(--spacing-8) var(--spacing-0);
    color: hsl(
      var(--colour-light-text-hue) var(--colour-light-text-saturation)
        var(--colour-light-text-luminance)
    );
  } */

  .container-alt {
    background: hsl(
      var(--colour-alternative-hue) var(--colour-alternative-saturation)
        var(--colour-alternative-luminance)
    );

    color: hsl(
      var(--colour-dark-text-hue) var(--colour-dark-text-saturation)
        var(--colour-dark-text-luminance)
    );
  }

  .button {
    background: hsl(
      var(--colour-alternative-hue) var(--colour-alternative-saturation)
        var(--colour-alternative-luminance)
    );
  }

  .button-alt {
    background: hsl(
      var(--colour-dark-text-hue) var(--colour-dark-text-saturation)
        var(--colour-dark-text-luminance)
    );
  }
</style>
