<script>
  // // We import our page components (similar to the one above).
  // import Page1 from './FormParts/Page1.svelte';
  // import Page2 from './FormParts/Page2.svelte';

  const pages = [Page1, Page2];

  // The current page of our form.
  let page = 0;

  // The state of all of our pages
  let pagesState = [];

  // Our handlers
  function onSubmit(values) {
    console.log(form)

  }

  function onBack(values) {
    if (page === 0) return;
    pagesState[page] = values;
    pagesState = pagesState; // Triggering update
    page -= 1;
  }
</script>

<!-- We display the current step here -->
<svelte:component
  this={pages[page]}
  {onSubmit}
  {onBack}
  initialValues={pagesState[page]}
  />