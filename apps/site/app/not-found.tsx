export default function NotFound() {
  return (
    <main style={{ minHeight: '60vh', display: 'grid', placeItems: 'center', padding: '2rem', textAlign: 'center', fontFamily: 'system-ui, sans-serif' }}>
      <div>
        <h1 style={{ fontSize: '2rem', marginBottom: '.5rem' }}>404</h1>
        <p>Pagina non trovata / Page not found.</p>
        <p><a href="/" style={{ textDecoration: 'underline' }}>Home</a></p>
      </div>
    </main>
  )
}
