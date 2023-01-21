import { Link } from 'react-router-dom';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const HomeHero = ({ heroProducts }) => {
  return (
    <Swiper
      tag='section'
      wrapperTag='div'
      // className='hero'
      modules={[A11y, Autoplay, Navigation, Pagination]}
      loop
      navigation
      pagination={{ clickable: true }}
      preloadImages={false}
    >
      {heroProducts.map((element) => {
        const { nombre, slug, subcategoria, marca, imagen } = element.attributes;
        return (
          <SwiperSlide
            key={element.id}
            tag='section'
            zoom={true}
            className='section'
            style={{
              // backgroundImage: `linear-gradient(to right, var(--light-primary-shadow-color), var(--light-secondary-shadow-color)), url(${imagen.data[0].attributes.url})`
              backgroundImage: `url(${imagen.data[0].attributes.url})`
            }}
          >
            <div className="container">
              <div className="card card--hero">
                <h2 className="card__title card__title--hero">{nombre}</h2>
                <h3 className="card__subtitle card__subtitle--hero">{marca.data[0].attributes.nombre} I {subcategoria.data.attributes.nombre}</h3>
                <Link to={`/productos/${slug}`} className="button button--primary">Ver más</Link>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HomeHero;