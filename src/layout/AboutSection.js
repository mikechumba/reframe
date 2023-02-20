const AboutSection = ({ org }) => {
  return <section aria-labelledby="section-title">
    <h2 id="section-title">About <span className="visually-hidden">{ org?.name }</span></h2>
    <p>{ org?.about }</p>
  </section>
}

export default AboutSection