import { ContainerBody } from "../StyledComponent"
import MovieContent from "../components/MovieContent"
import Slider from "../components/Slider"
import { movie, sliderItems } from "../data"

export const LandingPage = ()=>{
  return(
    <ContainerBody>
      <MovieContent {...movie}/>
      <Slider slides={sliderItems}/>
    </ContainerBody>
  )
}

