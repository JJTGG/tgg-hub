
export default function NotFound() {
  return (
    <main className="not-found">
      <div className="container not-found__content">
        <p className="eyebrow">404 / Not found</p>
        <h1>This page isn't here.</h1>
        <p>
          The address may be incorrect, or the page may have moved.
        </p>
        <a className="button button--primary" href="/">
          Back to TGG HUB
        </a>
      </div>
    </main>
  );
}
