export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        padding: '4rem 1.5rem',
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
        lineHeight: 1.4,
        maxWidth: 900,
        margin: '0 auto',
      }}
    >
      <h1 style={{ fontSize: '3rem', margin: 0 }}>kwack.in</h1>
      <p style={{ marginTop: '1rem', fontSize: '1.25rem' }}>
        Next.js (static export) deployed on Cloudflare Pages.
      </p>
      <p style={{ marginTop: '1.5rem', opacity: 0.7 }}>
        Edit <code>pages/index.js</code> and push to <code>main</code> to deploy.
      </p>
    </main>
  );
}
