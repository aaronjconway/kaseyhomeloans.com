<script lang="ts">
  let success: string;

  async function submit(e: SubmitEvent) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    success = data.ok;
  }
</script>

<div class="form-wrapper">
  <form on:submit={submit} class="form">
    <label>
      Name
      <input type="text" id="name" name="name" required />
    </label>
    <label>
      Phone
      <input type="text" id="phone" name="phone" required />
    </label>
    <label>
      Email
      <input type="text" id="email" name="email" required />
    </label>
    <label>
      Message
      <textarea id="message" name="message" required />
    </label>
    <button>Send</button>
    {#if success}
      <p>yay it was a success</p>
    {/if}
  </form>
</div>

<style lang="scss">
  .form {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: var(--space-md);

    label {
      display: flex;
      gap: var(--space-xs);
      flex-direction: column;

      input {
        border: 1px solid var(--platinum-600);
        border-radius: 4px;
      }

      [id='message'] {
        text-align: left;
        border: 1px solid var(--platinum-600);
        border-radius: 4px;
        justify-content: start;
        height: var(--space-xl);
      }
    }
  }
</style>
