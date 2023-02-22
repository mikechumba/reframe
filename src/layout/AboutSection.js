const AboutSection = ({ org }) => {
  return <section className="container" aria-labelledby="section-title">
    <h2 id="section-title" className="h2-small">About <span className="visually-hidden">{ org?.name }</span></h2>
    <p className="mt-2">{ org?.about }</p>
  </section>
}

export default AboutSection