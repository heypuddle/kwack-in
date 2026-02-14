export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        padding: '4rem 1.5rem',
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
        background: '#fff',
        color: '#0b1220',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: 720 }}>
        <h1 style={{ margin: 0, fontSize: '3rem', letterSpacing: '-0.03em' }}>Hello, world.</h1>
        <p style={{ marginTop: '1rem', fontSize: '1.2rem', opacity: 0.75 }}>
          kwack.in is deployed.
        </p>
      </div>
    </main>
  );
}
