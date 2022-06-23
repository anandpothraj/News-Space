import React, { useContext }  from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { Theme } from '../Context';

const Header = () => {

  const { theme, setTheme, setBgColor } = useContext(Theme)
  
  return (
    <>
        <Navbar bg={theme} variant="dark" id="nav">
          <Container className='m-auto'>
            <Navbar.Brand>
            <a href="/" className=' header text-decoration-none text-light mx-1 navlink'>
              News-Space
            </a>
            </Navbar.Brand>
            <Nav>
              {
                (theme === 'primary')?
                <Navbar.Brand><BsFillMoonStarsFill onClick={()=>{setTheme("dark");setBgColor("rgb(84,84,84)");localStorage.setItem("userTheme","dark")}}/></Navbar.Brand>
                : 
                <Navbar.Brand><BsFillSunFill onClick={()=>{setTheme("primary");setBgColor("rgb(13,110,253)");localStorage.setItem("userTheme","primary")}} style={{color:"yellow"}}/></Navbar.Brand>
              }
            </Nav>
          </Container>
        </Navbar>
    </>
  )
}

export default Header;




