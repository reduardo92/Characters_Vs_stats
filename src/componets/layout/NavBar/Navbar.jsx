import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../../img/vslogo.png';
import styled from 'styled-components';

const Styled = styled.header`
  position: fixed;
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
    background-color: #21212140;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

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

const NavbarCustom = () => (
  <Styled>
    <nav className='customNav'>
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

export default NavbarCustom;
