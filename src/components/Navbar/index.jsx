import { BsBell, BsSearch } from "react-icons/bs"
import { CenterNav, Element, LeftNav, NavBar, RightNav } from "../../StyledComponent"

const Navbar = ({items})=>{
  return(
    <NavBar>
    <LeftNav>
    {items.map((item,i)=>(
      <Element>{item}</Element>
    ))}
    </LeftNav>
    <CenterNav>
      <span className='title'>WatchTV</span>
    </CenterNav>
    <RightNav>
    <BsSearch size={20}/>
    <BsBell size={20}/>
    <span className='.title'>Sign Up</span>
    </RightNav>
  </NavBar>
  )
}

export default Navbar;