<script>
	import { createForm } from 'felte'
	
	export let initialValues;
	export let onSubmit;
	
	const { form } = createForm({ onSubmit, initialValues })
</script>

<form use:form>
	<label for=firstName>First name</label>
	<input id=firstName name=firstName>
	<button type=submit>Next page</button>
</form>