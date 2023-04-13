<script lang="ts">
  export let altColours = false
  export let hash: string = ''
  export let title: string = ''

  export let front = 'darkText'
  export let back = 'lightText'

  type HslProp = {
    [key: string]: string
  }

  const hue: HslProp = {
    brand: 'var(--colour-brand-hue)',
    lightText: 'var(--colour-light-text-hue)',
    darkText: 'var(--colour-dark-text-hue)',
    bleak: 'var(--colour-bleak-hue)',
    alternative: 'var(--colour-alternative-hue)',
    secondary: 'var(--colour-secondary-hue)',
    dark: 'var(--colour-dark-hue)',
    purple: 'var(--colour-purple-hue)',
    pink: 'var(--colour-pink-hue)',
    grey: 'var(--colour-grey-hue)',
    saturatedBlue: 'var(--colour-saturated-blue-hue)'
  }
  const saturation: HslProp = {
    brand: 'var(--colour-brand-saturation)',
    lightText: 'var(--colour-light-text-saturation)',
    darkText: 'var(--colour-dark-text-saturation)',
    bleak: 'var(--colour-bleak-saturation)',
    alternative: 'var(--colour-alternative-saturation)',
    secondary: 'var(--colour-secondary-saturation)',
    dark: 'var(--colour-dark-saturation)',
    purple: 'var(--colour-purple-saturation)',
    pink: 'var(--colour-pink-saturation)',
    grey: 'var(--colour-grey-saturation)',
    saturatedBlue: 'var(--colour-saturated-blue-saturation)'
  }
  const luminance: HslProp = {
    brand: 'var(--colour-brand-luminance)',
    lightText: 'var(--colour-light-text-luminance)',
    darkText: 'var(--colour-dark-text-luminance)',
    bleak: 'var(--colour-bleak-luminance)',
    alternative: 'var(--colour-alternative-luminance)',
    secondary: 'var(--colour-secondary-luminance)',
    dark: 'var(--colour-dark-luminance)',
    purple: 'var(--colour-purple-luminance)',
    pink: 'var(--colour-pink-luminance)',
    grey: 'var(--colour-grey-luminance)',
    saturatedBlue: 'var(--colour-saturated-blue-luminance)'
  }

  let rootElement: HTMLElement
  $: rootElement &&
    rootElement.style.setProperty(
      '--color',
      `hsl(${hue[front]}, ${saturation[front]}, ${luminance[front]})`
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
    --color: inherit;
    --background: inherit;
  }

  .container {
    display: flex;
    flex-direction: column;
    background: var(--color);
    color: var(--background);
    align-items: center;
    width: 100%;
    padding: var(--spacing-8) var(--spacing-0);
  }
  
  .container-alt {
    background: var(--background);

    color: var(--color);
  }

  .button {
    background: var(--background);
  }

  .button-alt {
    background: var(--color);
  }
</style>
