<script>
  import { createEventDispatcher } from 'svelte';
  export let searchQuery = '';
  
  const dispatch = createEventDispatcher();
  let timeoutId;

  function handleInput(event) {
    const value = event.target.value;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      console.log('Dispatching search event with value:', value);
      dispatch('search', value);
    }, 300);
  }
</script>

<div class="search-container">
  <input
    type="text"
    placeholder="Search movies..."
    bind:value={searchQuery}
    on:input={handleInput}
  />
</div>

<style>
  .search-container {
    margin: 2rem 0;
  }

  input {
    width: 100%;
    max-width: 500px;
    padding: 0.8rem;
    border: 2px solid #ddd;
    border-radius: 8px;
    font-size: 1.1rem;
  }

  input:focus {
    outline: none;
    border-color: #666;
  }
</style>