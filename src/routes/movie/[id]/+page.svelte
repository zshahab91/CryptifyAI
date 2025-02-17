<script>
  import { onMount } from 'svelte';
  import axios from 'axios';
  import { page } from '$app/stores';

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const BASE_URL = 'https://api.themoviedb.org/3';

  let movie = null;
  let loading = true;
  let error = null;

  onMount(async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/movie/${$page.params.id}?api_key=${API_KEY}`
      );
      movie = response.data;
    } catch (e) {
      error = e.message;
    } finally {
      loading = false;
    }
  });
</script>

{#if loading}
  <div>Loading...</div>
{:else if error}
  <div>Error: {error}</div>
{:else if movie}
  <div class="movie-details">
    <a href="/" class="back-button">← Back to Movies</a>
    <div class="content">
      <img 
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
        alt={movie.title}
      />
      <div class="info">
        <h1>{movie.title}</h1>
        <p class="overview">{movie.overview}</p>
        <div class="metadata">
          <p>Release Date: {movie.release_date}</p>
          <p>Rating: {movie.vote_average}/10</p>
          <p>Runtime: {movie.runtime} minutes</p>
          <p>Genres: {movie.genres.map(g => g.name).join(', ')}</p>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  .movie-details {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .back-button {
    display: inline-block;
    margin-bottom: 2rem;
    text-decoration: none;
    color: #666;
  }

  .content {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 2rem;
  }

  img {
    width: 100%;
    border-radius: 8px;
  }

  .info {
    padding: 1rem;
  }

  .overview {
    margin: 1rem 0;
    line-height: 1.6;
  }

  .metadata {
    margin-top: 2rem;
  }

  @media (max-width: 768px) {
    .content {
      grid-template-columns: 1fr;
    }
  }
</style>