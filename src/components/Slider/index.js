import { useState } from "react";
import "./style.css";
import swat from './swat.jpg';

import { Swiper, SwiperSlide  } from 'swiper/react'

export default function Slider(){
  const [sliderPerView, setSliderPerVier] = useState(3);
  return(
    <div className="container-slider">
      <div className="container-titulo">
        <span className="titulo-slider">Descubra mais</span>
      </div>
      <Swiper
        slidesPerView={sliderPerView} 
        pagination={{ clickable: true }}
        navigation
        spaceBetween={18}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          100: {
            slidesPerView: 1
          },
          760: {
            slidesPerView: 2
          },
          1000: {
            slidesPerview: 3
          }
        }}
      >
        <SwiperSlide>
          <a href="/:id">
            <article className="artigoSlider">
              <div className="gradiente"></div>
              <img src={swat}/>
              <div className="title-artigo slider">
                <span className="category"><span className="category-name name-mobile">Loren</span></span>
                <h2 className="text-slider">Lorem Ipsum is simply dummy <br/> text of the printing and <br/> typesetting industry.</h2>
              </div>
            </article>
          </a>
        </SwiperSlide>

        <SwiperSlide>
        <a href="/:id">
            <article>
              <div className="gradiente"></div>
              <img src={swat}/>
              <div className="title-artigo slider">
                <span className="category"><span className="category-name">Loren</span></span>
                <h2>Lorem Ipsum is simply dummy <br/> text of the printing and <br/> typesetting industry.</h2>
              </div>
            </article>
          </a>
        </SwiperSlide>

        <SwiperSlide>
        <a href="/:id">
            <article>
              <div className="gradiente"></div>
              <img src={swat}/>
              <div className="title-artigo slider">
                <span className="category"><span className="category-name">Loren</span></span>
                <h2>Lorem Ipsum is simply dummy <br/> text of the printing and <br/> typesetting industry.</h2>
              </div>
            </article>
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="/:id">
            <article className="artigoSlider">
              <div className="gradiente"></div>
              <img src={swat}/>
              <div className="title-artigo slider">
                <span className="category"><span className="category-name">Loren</span></span>
                <h2>Lorem Ipsum is simply dummy <br/> text of the printing and <br/> typesetting industry.</h2>
              </div>
            </article>
          </a>
        </SwiperSlide>

      </Swiper>
    </div>
  )
}