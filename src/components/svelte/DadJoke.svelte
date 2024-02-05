<script>
  let joke = null;
  let error = null;
  let counter = 0;

  function checkCount() {
    counter = counter + 1;

    if (counter == 4) {
      joke = `
			<div>
				<p>We're glad you're having fun...</p>
				<a href = "https://1660690.my1003app.com/2087178/inquiry ">Click here to get started.</a> Only takes 1 minute and no credit info.
			</div>
			`;
      return true;
    }

    if (counter == 7) {
      joke = `
			<div >
				<p>You like dad jokes. Check. Got it. Nice! </p>
				<p><b>Let's get started on the home buying process.</b></p>
				<a href = "https://1660690.my1003app.com/2087178/inquiry ">Click here to get started.</a>
			</div>
			`;
      return true;
    }

    if (counter == 9) {
      joke = `
			<div>
				<p> No more jokes. All out. That's all of 'em.  </p>
				<a href = "https://1660690.my1003app.com/2087178/inquiry "><b>Get Started</b></a>
			</div>
			`;
      return true;
    }

    if (counter == 12) {
      joke = `
			<div>
				<p><b>You could be building generational wealth.</b></p>
			</div>
			`;
      return true;
    }

    if (counter == 16) {
      joke = `
			<div>
				<img src  = "https://media.tenor.com/mZZoOtDcouoAAAAM/stop-it-get-some-help.gif">
			</div>
			`;
      return true;
    }
  }

  async function getDadJoke() {
    if (checkCount()) {
      return;
    }

    try {
      const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }

      const data = await response.json();
      joke = data.joke;
    } catch (err) {
      error = err.message;
    }
  }
</script>

<div class="wrapper">
  <div class="joke-wrapper">
    {#if joke != null}
      {#await joke}
        <p>Loading...</p>
      {:then dadJoke}
        <div class="joke">
          {@html dadJoke}
        </div>
      {:catch errorMessage}
        <p>Error: {errorMessage}</p>
      {/await}
    {/if}
  </div>
  <div class="button-wrapper">
    <a href="/blog" class="btn">See Programs</a>
    {#if counter == 1}
      <button class="secondary" on:click={getDadJoke}>Give me another</button>
    {:else if counter == 4}
      <button class="secondary" on:click={getDadJoke}>No I need another</button>
    {:else if counter == 7}
      <button class="secondary" on:click={getDadJoke}>Give me more!</button>
    {:else if counter == 9}
      <button class="secondary" on:click={getDadJoke}>Impossible! GIVE ME MORE!!</button>
    {:else if counter == 12}
      <button class="secondary" on:click={getDadJoke}>I like to throw money away</button>
    {:else if counter == 16}
      <button class="secondary"><a href="/contact">Get Help</a></button>
    {:else}
      <button class="secondary" on:click={getDadJoke}>Give me a Dad Joke</button>
    {/if}
  </div>
</div>

<style lang="scss">
  .button-wrapper {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
  }

  .joke {
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    min-height: 5em;
    margin-bottom: var(--space-xl);
    font-size: 1.4rem;
  }
</style>
