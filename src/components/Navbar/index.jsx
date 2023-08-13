import { BsBell, BsSearch } from "react-icons/bs"
import { CenterNav, Element, LeftNav, Link, NavBar, RightNav } from "../../StyledComponent"
const Navbar = ({items})=>{
  return(
    <NavBar>
    <LeftNav>
    {items.map((item,i)=>(
      <Link to={item.url}><Element>{item.name}</Element></Link>
    ))}
    </LeftNav>
    <CenterNav>
      <Link to='/'><span className='title'>WatchTV</span></Link>
    </CenterNav>
    <RightNav>
    <BsSearch size={20}/>
    <BsBell size={20}/>
    <Link to='/form'><span className='title'>Sign Up</span></Link>
    <Link to='/sign-in'><span className='title'>Sign in</span></Link>
    </RightNav>
  </NavBar>
  )
}

export default Navbar;