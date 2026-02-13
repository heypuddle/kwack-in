export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        padding: '4rem 1.5rem',
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
        lineHeight: 1.5,
        maxWidth: 860,
        margin: '0 auto',
      }}
    >
      <header>
        <h1 style={{ fontSize: '3rem', margin: 0 }}>kwack.in</h1>
        <p style={{ marginTop: '0.75rem', fontSize: '1.25rem' }}>
          A tiny Next.js site, statically exported and deployed on Cloudflare Pages.
        </p>
      </header>

      <section style={{ marginTop: '2.5rem' }}>
        <h2 style={{ marginBottom: '0.5rem' }}>What is this?</h2>
        <p style={{ marginTop: 0 }}>
          This is the starter homepage for <strong>kwack.in</strong>. It deploys from GitHub
          and publishes as static assets.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ marginBottom: '0.5rem' }}>Deploy flow</h2>
        <ol style={{ marginTop: 0 }}>
          <li>Commit and push to <code>main</code></li>
          <li>GitHub Actions runs <code>npm ci</code> and <code>npm run build</code></li>
          <li>Action deploys the <code>out/</code> folder to Cloudflare Pages</li>
        </ol>
      </section>

      <footer style={{ marginTop: '3rem', opacity: 0.7 }}>
        <small>© {new Date().getFullYear()} kwack.in</small>
      </footer>
    </main>
  );
}
