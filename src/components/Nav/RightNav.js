import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  li {
    padding: 10px 25px;
    font-size: 1.8rem;
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
      text-transform: uppercase;
      margin-top: 32px;
    }
    img {
      margin-top: 15px;
      width: 35px;
      height: 35px;
    }
  }

  @media (min-width: 769px) {
    padding-top: 15px;
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    width: 90vw;
    z-index: 1;
    position: fixed;
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 0.1rem;
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    justify-content: flex-end;
    align-items: center;
    li:hover a {
      border-bottom: 2px solid crimson;
      transition: 0.1s ease-in;
    }
    img {
      width: 25px;
      height: 25px;
    }
  }
`;



const RightNav = ({ open, setOpen }) => {

    const handleMenuClick = () => {
        setOpen(!open)
    }

  return (
    <Ul open={open}>
        <li><a href="#home" data-after="Home" onClick={handleMenuClick}>Home</a></li>
        <li><a href="#about" data-after="About" onClick={handleMenuClick}>About</a></li>
        <li><a href="#projects" data-after="Projects" onClick={handleMenuClick}>Projects</a></li>
        <li><a href="#contact" data-after="Contact" onClick={handleMenuClick}>Contact</a></li>
    <div open={open} className="flex justify-center">
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
  )
}

export default RightNav
