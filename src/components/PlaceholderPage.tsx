type PlaceholderPageProps = {
  title: string
}

export function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <section className="page">
      <article className="card">
        <h2>{title}</h2>
        <p>Placeholder page. Replace this content with your module.</p>
      </article>
    </section>
  )
}
