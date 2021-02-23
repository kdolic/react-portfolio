import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  
  li {
    padding: 2px 10px;
    font-size: 2rem;
    text-align: center;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: rgb(31, 30, 30, .8);
    position: fixed;
    z-index: 1;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 275px;
    padding-top: 3.5rem;
    transition: 0.3s ease background-color;
    li {
      color: #fff;
      margin-top: 36px;
    }
  }
`;



const RightNav = ({ open, setOpen }) => {

    const handleMenuClick = () => {
        setOpen(!open)
    }

  return (
    <div class="nav-list" >
    <Ul open={open}>
        <li><a href="#home" data-after="Home" onClick={handleMenuClick}>Home</a></li>
        <li><a href="#about" data-after="About" onClick={handleMenuClick}>About</a></li>
        <li><a href="#projects" data-after="Projects" onClick={handleMenuClick}>Projects</a></li>
        <li><a href="#contact" data-after="Contact" onClick={handleMenuClick}>Contact</a></li>
    <div opne={open} className="flex justify-center mt-8">
    <div className="m-2">
              <a href="https://www.linkedin.com/in/kenan-dolic/" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/material/48/ffffff/linkedin--v1.png" alt='linkedin' /></a>
            </div>
            <div className="m-2">
              <a href="https://github.com/kdolic" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/material-rounded/48/ffffff/github.png" alt='github' /></a>
            </div>
            <div className="m-2">
              <a href="https://twitter.com/DolicKenan" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/material-rounded/48/ffffff/twitter.png" alt='twitter' /></a>
            </div>
          </div>
    </Ul>

    </div>
  )
}

export default RightNav
