import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

// Import images directly
import hero1 from '../assets/images/hero1.jpg';
import hero2 from '../assets/images/hero2.jpg';
import hero3 from '../assets/images/hero3.jpg';

const HeroCarousel = () => {
  // Use imported images directly
  const slides = [hero1, hero2, hero3];

  return (
    <Swiper
      modules={[Autoplay, EffectFade, Pagination]}
      effect="fade"
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      loop={true}
      className="hero-swiper"
      pagination={{
        clickable: true,
        type: 'bullets',
        el: '.swiper-pagination',
        bulletActiveClass: 'swiper-pagination-bullet-active',
        bulletClass: 'swiper-pagination-bullet',
        renderBullet: function (index, className) {
          return '<span class="' + className + '"></span>';
        }
      }}
    >
      {slides.map((src, i) => (
        <SwiperSlide key={i}>
          <img src={src} alt={`Hero ${i + 1}`} className="hero-image" />
        </SwiperSlide>
      ))}
      <div className="swiper-pagination"></div>
    </Swiper>
  );
};

export default HeroCarousel;