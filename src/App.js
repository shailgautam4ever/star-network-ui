import logo from './logo.svg';
import './App.css';
import {BsBell, BsFillPlayFill, BsSearch, BsStarFill} from 'react-icons/bs'
import { MainContainer, NavBar, ContainerBody, Footer,Element, LeftNav, CenterNav,RightNav, ItemContent, Title, TagLine, Description, Rating, ActionWrapper, Button, ButtonOutline } from './StyledComponent';


function App() {
  const navLeftItems = ["Movies", "TV Shows", "Documantries" ]
  return (
    <MainContainer>
      <NavBar>
        <LeftNav>
        {navLeftItems.map((item,i)=>(
          <Element>{item}</Element>
        ))}
        </LeftNav>
        <CenterNav>
          <span>WatchTV</span>
        </CenterNav>
        <RightNav>
        <BsSearch size={20}/>
        <BsBell size={20}/>
        <span>Sign Up</span>
        </RightNav>
      </NavBar>
      <ContainerBody>
        <ItemContent>
          <Title>STAR WARS</Title>
          <TagLine>THE RISE OF SKYWALKER</TagLine>
          <Description>
            The surviving members of star wars begins a new war against the people who are bad and are likely to win this battle to get to know more visits theaters.
          </Description>
          <Rating>
          {
            Array.from({length:5}).map((_ , i)=>(
              <BsStarFill key={i} color='#FFC700'/>
            ))
          }
          </Rating>
          <ActionWrapper>
            <Button> <BsFillPlayFill size={20}/>Watch Now</Button>
            <ButtonOutline>Trailer</ButtonOutline>
          </ActionWrapper>
        </ItemContent>
      </ContainerBody>
      <Footer>
        Footer
      </Footer>
    </MainContainer>
  );
}

export default App;
