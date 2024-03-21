<script lang="ts">
  import { terms } from '../../lib/data/terms';

  terms.sort(function (a, b) {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  let isGrug = false;
  let grugButtonText = 'Make Grug';
  let font = 'Comic Sans MS';
  function handleGrug() {
    if (isGrug) {
      grugButtonText = 'Make Grug';
      font = 'Comic Sans MS';
    } else {
      grugButtonText = 'Make Normal';
      font = 'inherit';
    }
    isGrug = !isGrug;
    console.log(`grug is now ${isGrug}`);
  }
</script>

<section>
  <div class="container">
    <button on:click={handleGrug} style={`font-family:${font}`}>{grugButtonText}</button>
    <div class="wrapper">
      {#each terms as term}
        <h2 class="term-name" id={term.name}>
          {term.name}
        </h2>
        {#if isGrug}
          <div class="term-desc" style={`font-family:'Comic Sans MS`}>
            {term.desc_grug}
          </div>
        {:else}
          <div class="term-desc">
            {term.desc_normal}
          </div>
        {/if}
      {/each}
    </div>
  </div>
</section>

<style lang="scss">
  button {
    margin-bottom: var(--space-md);
  }

  .term-desc {
    font-size: var(--text-md);
    line-height: 1.4;
  }
</style>
