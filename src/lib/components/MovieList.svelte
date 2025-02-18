<script>
  import { onMount } from 'svelte';
  import axios from 'axios';
  export let searchQuery = '';

  let movies = [];
  let loading = true;
  let error = null;

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const BASE_URL = 'https://api.themoviedb.org/3';

  async function fetchMovies() {
    try {
      loading = true;
      const endpoint = searchQuery 
        ? `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchQuery)}`
        : `${BASE_URL}/movie/popular?api_key=${API_KEY}`;

      const response = await axios.get(endpoint);
      movies = response.data.results;
    } catch (e) {
      error = e.message;
    } finally {
      loading = false;
    }
  }

  $: if (searchQuery !== undefined) {
    fetchMovies();
  }

  // Initial load
  onMount(() => {
    fetchMovies();
  });
</script>

{#if loading}
  <div>Loading...</div>
{:else if error}
  <div>Error: {error}</div>
{:else}
  <div class="movie-grid">
    {#each movies as movie (movie.id)}
      <a href="/movie/{movie.id}" class="movie-card">
        <img 
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
          alt={movie.title}
          loading="lazy"
        />
        <div class="movie-card__content">
          <h3>{movie.title}</h3>
          <p>Rating: {movie.vote_average}</p>
          <p>Release: {new Date(movie.release_date).getFullYear()}</p>
        </div>
      </a>
    {/each}
  </div>
{/if}

<style>
  .movie-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 2rem;
    padding: 1rem;
  }

  .movie-card {
    text-decoration: none;
    color: inherit;
    transition: transform 0.2s;
    background-color: #e5e5e5;
    border-radius: 5px;
  }

  .movie-card:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
  }
  .movie-card__content {
    padding: 0 5px;
  }
</style>