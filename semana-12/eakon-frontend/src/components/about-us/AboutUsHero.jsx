import HeroBanner from "../common/hero/HeroBanner";

const AboutUsHero = ({ aboutUsData }) => {
  const { attributes } = aboutUsData;
  return (
    <>
      <HeroBanner
        image={attributes?.foto.data[0].attributes.formats.large.url}
        title="Nosotros"
      />
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