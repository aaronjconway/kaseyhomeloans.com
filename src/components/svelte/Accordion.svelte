<script lang="ts">
  import { onMount } from 'svelte';

  export let title: string = '';

  let accordion: HTMLDivElement;
  let accordionHeading: HTMLDivElement;
  let openHeight: number;
  let headingHeight: number;
  let isOpen: boolean = true;

  const toggleOpen = () => {
    isOpen = !isOpen;
  };

  const sluggify = (str: string): string => {
    return str
      .toLowerCase()
      .replace(/\s/g, '_')
      .replace(/[^A-z0-9_-]/g, '');
  };

  $: ID = sluggify(title);
  $: headingID = `${ID}-heading`;

  onMount(() => {
    openHeight = accordion.getBoundingClientRect().height;
    headingHeight = accordionHeading.getBoundingClientRect().height;
    // const margin = parseInt(getComputedStyle(document.querySelector('body')).getPropertyValue('font-size'))
    accordion.style.setProperty('--openHeight', `${openHeight + 30}px`);
    accordion.style.setProperty('--headingHeight', `${headingHeight}px`);
    isOpen = false;
  });
</script>

<div class="accordion-wrapper">
  <div class="accordion" class:open={isOpen} bind:this={accordion}>
    <h3 id={headingID} class="accordion__heading" bind:this={accordionHeading}>
      <button class="accordion__button" on:click={toggleOpen} aria-pressed={isOpen} aria-controls={ID}>
        <div>
          {title}
        </div>
      </button>
    </h3>
    <div class="accordion__content" role="region" aria-labelledby={headingID} id={ID}>
      <slot />
    </div>
  </div>
</div>

<style lang="scss" global>
  h3 {
    color: var(--platinum-800);
    button {
      color: var(--platinum-800);
      // TODO: need a better way of doing this than turning off in each scoped file.
      //currently we have hover:filter in the button.scss file.
      &:hover {
        filter: none;
      }
    }
  }

  .accordion-wrapper {
    padding-bottom: var(--space);
  }

  .accordion {
    height: var(--headingHeight);
    transition: height 0.15s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    overflow: hidden;

    .accordion__heading {
      font-size: var(--text);
      margin: 0 0 var(--space-md);
      font-weight: bold;
      width: 100%;
      max-width: unset;
    }

    .accordion__button {
      padding: 0;
      border: 0;
      background: transparent;
      font-weight: bold;
      width: 100%;
      text-align: left;
      padding: 0 0 var(--space-md);

      &::before {
        content: '\25B6';
        display: block;
        position: absolute;
        transition: 0.1s cubic-bezier(0.455, 0.03, 0.515, 0.955);
        margin-left: calc(-1 * var(--space-md));
      }
    }

    .accordion__content {
      overflow: hidden;
      padding: calc(var(--space) / 2) var(--space) var(--space-md);
      display: grid;
      grid-gap: var(--space);

      * {
        margin: 0;
      }
    }

    &.open {
      height: var(--openHeight);

      .accordion__button::before {
        transform: rotate(90deg);
        color: var(--blue-600);
      }
    }
  }
</style>
