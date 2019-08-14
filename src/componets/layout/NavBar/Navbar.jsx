import React, { useEffect, useState, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../../img/vslogo.png';
import styled from 'styled-components';

const Styled = styled.header`
  position: ${props => props.hideScroll};
  /* background-color: transparent; */
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  align-items: center;

  .customNav {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1.5em;
    background-color: ${props => props.navBc};

    .nav-link {
      color: #a7a7a7;
      font-size: 1.1rem;
      font-weight: bold;
      margin: 0 1.5em;

      &:hover,
      &:focus,
      &.active {
        color: #fff;
      }
    }
  }

  .logo {
    flex-basis: 100px;
  }

  @media screen and (min-width: 760px) {
    .customNav {
      .nav-link {
        font-size: 2rem;
      }
    }

    .logo {
      flex-basis: 150px;
    }
  }
`;

const NavbarCustom = () => {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef();

  useEffect(
    () =>
      window.addEventListener('scroll', () => {
        if (window.scrollY > navRef.current.offsetHeight) {
          document.body.style.paddingTop = `${navRef.current.offsetHeight}px`;
          setScrolled(true);
        } else {
          document.body.style.paddingTop = 0;
          setScrolled(false);
        }
      }),
    []
  );

  return (
    <Styled
      hideScroll={scrolled ? 'fixed' : 'absolute'}
      navBc={scrolled ? '#212121c2' : ''}
    >
      <nav ref={navRef} className='customNav'>
        <NavLink className='nav-link' to='/home'>
          Home
        </NavLink>
        <Link className='logo' to='/home'>
          <img src={logo} alt='Popcorn Fun' />
        </Link>
        <NavLink className='nav-link' to='/battle'>
          Battle
        </NavLink>
      </nav>
    </Styled>
  );
};

export default NavbarCustom;
