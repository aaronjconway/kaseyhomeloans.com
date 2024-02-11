<script lang="ts">
  //a signup form for email subscribers.
  let success: boolean;
  let message: string;

  async function submit(e: SubmitEvent) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const response = await fetch('/api/emailSignup', {
      method: 'POST',
      body: formData,
    });

    console.log(response.ok);
    const data = await response.json();

    if (response.status != 200) {
      message = data.message;
    } else {
      success = true;
      message = data.message;
    }
  }
</script>

<div class="form-wrapper">
  {#if success}
    <p>{message.toString()}</p>
  {:else}
    <form on:submit={submit} class="form">
      <label>
        <input type="text" id="email" name="email" placeholder="Your Email" required />
        <div class="error">
          {#if message}
            <p>{message}</p>
          {/if}
        </div>
      </label>
      <button>Subscribe</button>
    </form>
  {/if}
</div>

<style lang="scss">
  @use '../../styles/_base.scss';

  .error {
    display: flex;
    position: absolute;
    margin-top: var(--space-sm);
    color: indianred;
    padding: 0;
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--space-lg);

    @media (min-width: base.$lg) {
      display: flex;
      flex-direction: row;
    }

    label {
      display: flex;
      position: relative;
      gap: var(--space-xs);
      flex-direction: column;

      input {
        border: 1px solid var(--mid-grey);
        border-radius: 4px;
      }

      [id='message'] {
        text-align: left;
        border: 1px solid var(--mid-grey);
        border-radius: 4px;
        justify-content: start;
        height: 5rem;
      }
    }
  }
</style>
