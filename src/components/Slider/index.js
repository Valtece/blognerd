import { useState } from "react";
import "./style.css";
import swat from './swat.jpg';

import { Swiper, SwiperSlide  } from 'swiper/react'

export default function Slider(){
  const [sliderPerView, setSliderPerVier] = useState(2);
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
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <a href="#">
            <article className="artigoSlider">
              <div className="gradiente"></div>
              <img src={swat}/>
              <div className="title-artigo">
                <span className="category"><span className="category-name">Loren</span></span>
                <h2>Lorem Ipsum is simply dummy <br/> text of the printing and <br/> typesetting industry.</h2>
              </div>
            </article>
          </a>
        </SwiperSlide>

        <SwiperSlide>
        <a href="#">
            <article>
              <div className="gradiente"></div>
              <img src={swat}/>
              <div className="title-artigo">
                <span className="category"><span className="category-name">Loren</span></span>
                <h2>Lorem Ipsum is simply dummy <br/> text of the printing and <br/> typesetting industry.</h2>
              </div>
            </article>
          </a>
        </SwiperSlide>

        <SwiperSlide>
        <a href="#">
            <article>
              <div className="gradiente"></div>
              <img src={swat}/>
              <div className="title-artigo">
                <span className="category"><span className="category-name">Loren</span></span>
                <h2>Lorem Ipsum is simply dummy <br/> text of the printing and <br/> typesetting industry.</h2>
              </div>
            </article>
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="#">
            <article className="artigoSlider">
              <div className="gradiente"></div>
              <img src={swat}/>
              <div className="title-artigo">
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