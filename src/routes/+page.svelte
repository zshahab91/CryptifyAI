<script>
  import MovieList from '$lib/components/MovieList.svelte';
  import SearchBar from '$lib/components/SearchBar.svelte';

  let searchQuery = '';

  function updateSearch(event) {
    searchQuery = event.detail;
  }
</script>

<main>
  <h1>Popular Movies</h1>
  <SearchBar 
    {searchQuery} 
    on:search={updateSearch}
  />
  <MovieList {searchQuery} />
</main>

<style>
  main {
    padding: 1rem;
    text-align: center;
  }
</style>