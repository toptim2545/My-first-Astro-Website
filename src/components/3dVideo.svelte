<script>
  import Video from "./Video.svelte";
  let altColours = false;
</script>

<Video {altColours} hash={"qKogMfIAAkY"} title={"Трейлер God of War 3"} />

<style>
  .container-alt {
    background: hsl(
      var(--colour-dark-text-hue) var(--colour-dark-text-saturation)
        var(--colour-dark-text-luminance)
    );

    color: hsl(
      var(--colour-light-text-hue) var(--colour-light-text-saturation)
        var(--colour-light-text-luminance)
    );
  }

  .button {
    background: hsl(
      var(--colour-dark-text-hue) var(--colour-dark-text-saturation)
        var(--colour-dark-text-luminance)
    );
  }

  .button-alt {
    background: hsl(
      var(--colour-light-text-hue) var(--colour-light-text-saturation)
        var(--colour-light-text-luminance)
    );
  }
</style>
