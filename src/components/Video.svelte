<script lang="ts">
  export let altColours = false
  export let hash: string = ''
  export let title: string = ''

  let fore = 'brand'
  let back = 'darkText'

  type HslProp = {
    [key: string]: string
  }

  const hue: HslProp = {
    brand: 'var(--colour-brand-hue)',
    lightText: 'var(--colour-light-text-hue)',
    darkText: 'var(--colour-dark-text-hue)',
  }
  const saturation: HslProp = {
    brand: 'var(--colour-brand-saturation)',
    lightText: 'var(--colour-light-text-saturation)',
    darkText: 'var(--colour-dark-text-saturation)',
  }
  const luminance: HslProp = {
    brand: 'var(--colour-brand-luminance)',
    lightText: 'var(--colour-light-text-luminance)',
    darkText: 'var(--colour-dark-text-luminance)',
  }

  let rootElement: HTMLElement
  $: rootElement &&
    rootElement.style.setProperty(
      '--color',
      `hsl(${hue[fore]}, ${saturation[fore]}, ${luminance[fore]})`
    )
  $: rootElement &&
    rootElement.style.setProperty(
      '--background',
      `hsl(${hue[back]}, ${saturation[back]}, ${luminance[back]})`
    )

  const youtube = 'https://www.youtube-nocookie.com/embed/'
</script>

<section
  class="{`container${altColours ? ' container-alt' : ''}`}"
  bind:this="{rootElement}"
>
  <h2>{title}</h2>
  <div class="video-container">
    <iframe
      title="{title}"
      width="560"
      height="315"
      src="{youtube + hash}"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
  </div>
  <button
    class="{`button${altColours ? ' button-alt' : ''}`}"
    on:click="{() => {
      altColours = !altColours
    }}"><span class="screen-reader-text">Toggle colours</span></button
  >
</section>

<style>
  :root {
    --background: inherit;
    --color: inherit;
  }

  .container {
    display: flex;
    flex-direction: column;
    background: var(--background);
    color: var(--color);
    align-items: center;
    width: 100%;
    padding: var(--spacing-8) var(--spacing-0);
  }
</style>
