import {styled} from 'styled-components';
import {Swiper} from 'swiper/react'
import { Link as RouterLink } from "react-router-dom";


export const MainContainer = styled.div`
  min-height: 100vh;
  /* background-color: pink; */
  ${({bg})=>(bg)? `background-image: url('${bg}');`: `background-color: white;`}
  display: flex;
  flex-direction: column;
  font-family: 'Poppins', sans-serif;
  background-size: cover;
`;

export const NavBar = styled.div`
  /* background-color: yellow; */
  padding: 30px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #121111;
  font-family: Outfit;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.6px;

`

export const ContainerBody = styled.div`
  /* background-color: skyblue; */
  flex: 1;
`

export const Element = styled.span`
  padding: 10px;
  color: black;
`

export const LeftNav = styled.div`

`

export const CenterNav = styled.div`
  display: flex;
  flex:1;
  /* background-color: pink; */
  justify-content: center;

  .title{
    color: #FA4776;
    font-size: 50px;
  }
`

export const RightNav = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  /* background-color: pink; */
  width: 300px;
  
`

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px 70px;
  padding-bottom: 20px;
  /* background-color: #144f9b; */
  /* padding-top: 50px; */
`
export const Title = styled.span`
color: #FFF;
font-family: Oswald;
font-size: 90px;
font-style: normal;
font-weight: 700;
line-height: 80px;
`

export const TagLine = styled(Title)`
  font-size: 50px;
`

export const Description = styled.div`
  /* display: flex;
  flex-wrap: wrap; */
  width: 500px;
  color: white;
`
export const Rating = styled.div`
  display: flex;
  gap: 8px;
`

export const ActionWrapper = styled.div`
  display: flex;
  gap: 20px;
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 30px;
  border-radius: 20px;
  border: none;
  background-color: #FA4776;
  color: white;
  transition: all 80ms 0s ease-in;
  
  cursor: pointer;
  &:hover{
    opacity: 0.8;
    transform: scale(1.1);

  }
`
export const ButtonOutline = styled(Button)`
  background-color: transparent;
  outline: 1.5px solid white;

  &:hover{
    background-color:white;
    color:black;
    opacity:1 }
`

export const MovieSlider = styled.div`
  
`

export const Slide = styled.div`

  border-radius: 20px;
  /* background-color: pink; */
  /* width: 150px; */
    height: 300px;
    width: 200px;
    position: absolute;
    z-index: 0;

  img{
    border-radius: 20px;
    height: 300px;
    width: 200px;
    z-index: 1;
  }
  &:hover{
    transform: scale(1.1);
    border: 2px solid #FA4776;
 
  }

`
export const SwiperStyle = styled(Swiper)`
  background-color: white;
  padding: 20px !important;
  margin: 20px;
  /* opacity: 0.1; */
  backdrop-filter: blur(10px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(103, 101, 113, 0.34);
  height: 300px;
  /* overflow: visible; */
  .swiper-wrapper{
    padding-left: 35px;
  }
`

export const Link = styled(RouterLink)`
  text-decoration: none;
  color: #FA4776;
`
export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  /* background-color: pink; */
  /* backdrop-filter: blur(10px); */

 
  label{
    /* color: white !important; */
  }
  form{
    background-color: white;
    padding: 5rem;
    border-radius: 10px;
    box-shadow: 10px 10px 10px #eee;
  }
`