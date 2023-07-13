import { SwiperSlide } from "swiper/react"
import { MovieSlider, Slide, SwiperStyle } from "../../StyledComponent"

const Slider = ({slides})=>{
  return(
    <MovieSlider>
    <span>Popular Movies</span>
    <SwiperStyle slidesPerView={6} spaceBetween={0}>
     {slides.map((item,i)=>(
      <SwiperSlide key={i}>
        <Slide>
          <img src={item} alt='hehe'></img>
        </Slide>
      </SwiperSlide>
     ))}
    </SwiperStyle>
  </MovieSlider>
  )
}

export default Slider;