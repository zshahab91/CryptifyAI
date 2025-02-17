<script>
  import '../app.css';
</script>

<header>
  <nav>
    <a href="/" class="logo">🎬 MovieDB</a>
  </nav>
</header>

<slot />

<footer>
  <p>© 2025 MovieDB - Built with Svelte</p>
</footer>

<style>
  header {
    background-color: #1a1a1a;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  nav {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .logo {
    color: #ffffff;
    font-size: 1.5rem;
    text-decoration: none;
    font-weight: bold;
  }

  footer {
    text-align: center;
    padding: 2rem;
    margin-top: 2rem;
    background-color: #1a1a1a;
    color: #ffffff;
  }
</style>