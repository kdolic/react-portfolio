import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    margin-top: 16px;
    padding: 10px 10px;
    font-size: 2rem;
    text-align: center;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: rgba(10, 20, 20, 0.4);
    position: fixed;
    z-index: 1;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
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

        {/* <div className="flex justify-center mb-3">
            <div className="m-2">
              <a href="https://www.linkedin.com/in/kenan-dolic/" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/windows/48/000000/linkedin.png" alt='linkedin'/></a>
            </div>
            <div className="m-2">
              <a href="https://github.com/kdolic" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/fluent-systems-filled/48/000000/github.png" alt='github'/></a>
            </div>
            <div className="m-2">
              <a href="https://twitter.com/DolicKenan" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/material-outlined/48/000000/twitter.png" alt='twitter'/></a>
            </div>
          </div> */}
    </Ul>
    
  )
}

export default RightNav
