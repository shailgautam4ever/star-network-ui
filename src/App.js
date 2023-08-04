import './App.css';
import 'swiper/css';
import { MainContainer } from "./StyledComponent"
import Navbar from "./components/Navbar"
import { navLeftItems } from "./data"
import { Route, Routes } from 'react-router';
import { LandingPage } from './pages/LandingPage';
import Movies from './pages/Movies';
import SignUp from './pages/SignUp';
import { AuthContext } from './context/AuthContext';
import { useState } from 'react';
import { SignUpForm } from './pages/SignUpForm';

function App() {

  const userString = localStorage.getItem("user")
  const user = JSON.parse(userString)
  const [userState, setUser] = useState({})
  console.log("State ", userState)
  console.log("user",user)
  if (!user) {
    return (
      <AuthContext.Provider value={{ user: userState, setUser }}>
        <MainContainer bg=''>
          <Navbar items={navLeftItems} />
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/sign-in' element={<SignUp />} />
            <Route path='/form' element={<SignUpForm/>} />
          </Routes>
        </MainContainer>
      </AuthContext.Provider>
    )
  }
  return (
    <AuthContext.Provider value={{ user: userState, setUser }}>
      <MainContainer bg=''>
        <Navbar items={navLeftItems} />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/form' element={<SignUpForm/>} />
        </Routes>
      </MainContainer>
    </AuthContext.Provider>

  );
}

export default App;
