<script lang='ts'>
  export let altColours = false
  export let hash: string = ''
  export let title: string = ''

  const youtube = 'https://www.youtube-nocookie.com/embed/'
</script>

<section class={`container${altColours ? " container-alt" : ""}`}>
  <h2>{title}</h2>
  <div class="video-container">
    <iframe
      title={title}
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