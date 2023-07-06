import {styled} from 'styled-components';


export const MainContainer = styled.div`
  height: 100vh;
  background-color: pink;
  display: flex;
  flex-direction: column;
  font-family: 'Poppins', sans-serif;
`;

export const NavBar = styled.div`
  background-color: yellow;
  padding: 15px;
  display: flex;
  justify-content: space-between;

`

export const ContainerBody = styled.div`
  background-color: skyblue;
  flex: 1;
`

export const Footer = styled.div`
  background-color: greenyellow;
`

export const Element = styled.span`
  padding: 10px;
`

export const LeftNav = styled.div`

`

export const CenterNav = styled.div`
  display: flex;
  flex:1;
  /* background-color: pink; */
  justify-content: center;
`

export const RightNav = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  /* background-color: pink; */
  width: 200px;
`

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 70px;
  background-color: #144f9b;
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