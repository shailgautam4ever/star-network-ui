import './App.css';
import 'swiper/css';
import { MainContainer, ContainerBody } from './StyledComponent';
import Navbar from './components/Navbar';
import MovieContent from './components/MovieContent';
import Slider from './components/Slider';


function App() {
  const navLeftItems = ["Movies", "TV Shows", "Documantries" ]
  const sliderItems = ['/assets/starwars.jpeg','/assets/oppenheimer.jpeg','/assets/frozen2.jpeg','/assets/starwars.jpeg','/assets/starwars.jpeg','/assets/starwars.jpeg','/assets/kong.png']
  const movie = {
    title:"STAR WARS",
    tagline:"THE RISE OF SKYWALKER",
    description:"The surviving members of star wars begins a new war against the people who are bad and are likely to win this battle to get to know more visits theaters.",
    rating:4
  }
  return (
    <MainContainer>
      <Navbar items={navLeftItems}/>
      <ContainerBody>
        <MovieContent {...movie}/>
        <Slider slides={sliderItems}/>
      </ContainerBody>
    </MainContainer>
  );
}

export default App;
