<script>
	import { createForm } from 'felte'
	export let initialValues;
	export let onSubmit;
	export let onBack;
	
	const { form, data } = createForm({ onSubmit, initialValues })

</script>

<form use:form>

	<label for=lastName>Last Name</label>
	<input id=lastName name=lastName>

	<button type=button on:click={() => onBack($data)}>Previous page</button>
	<button type=submit>Submit</button>
</form>