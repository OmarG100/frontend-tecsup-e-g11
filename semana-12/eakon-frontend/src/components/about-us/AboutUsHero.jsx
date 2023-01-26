const AboutUsHero = ({ aboutUsData }) => {
  const { attributes } = aboutUsData;
  return (
    <>
      <section
        className="hero d-flex a-items-center min-h-25vh"
        style={{
          backgroundImage: `url(${attributes?.foto.data[0].attributes.formats.large.url})`
        }}
      >
        <div className="container">
          <h1 className="section__title section__title--lg color-dark-primary">Nosotros</h1>
        </div>
      </section>
      <section className="section">
        <div className="container d-flex f-direction-column gap-sm">
          <h2 className="section__subtitle">{attributes?.nombre_empresa}</h2>
          <p className="section__text">{attributes?.quien}</p>
          <img src={attributes?.logo.data.attributes.url} alt="Nosotros" className="section__img section__img--lg mx-auto" />
        </div>
      </section>
    </>
  );
};

export default AboutUsHero;