import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { MenuContext } from '../context/navState';


const Menu = styled.nav`
  position: absolute;
  justify-content: flex-end;
  top: -2.5em;
  left: 98.5%;
  bottom: 0px;
  display: block;
  width: 166px;
  max-width: 100%;
  margin-top: 100px;
  padding-top: 0;
  padding-right: 0px;
  align-items: stretch;
  background-color: transparent;
  transform: translateX(100%);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);




  ${(props) =>
    props.open &&
    css`
      transform: translateX(-100%);
    `}
`;

export const MenuLink = styled.a`
  position: relative;
  display: block;
  text-align: center;
  max-width: 100%;
  padding-top: 0.5em;
  margin-top: 0.5em;
  padding-bottom: 0.5em;
  transition: background-position 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  text-decoration: none;
  color: #000;
  background-color: rgba(250,250,250,0.9);
  font-size: 20px;
  line-height: 120%;
  font-weight: 500;

  :hover {
    color: #0080B3;
    text-decoration: none;
  }
  :active {
    color: #0080B3;
    text-decoration: none;
  }
`;

export const SideMenuSP = ({ children }) => {
  const { isMenuOpen } = useContext(MenuContext);

  return <Menu open={isMenuOpen}>{children}</Menu>;
};

SideMenuSP.propTypes = {
  children: PropTypes.node,
};

SideMenuSP.defaultProps = {
  children: (
     <div>
         <MenuLink className="menu_link" href="#home">HOME</MenuLink>
         <MenuLink href="#about">ABOUT US</MenuLink>
         <MenuLink href="#products">PRODUCTS</MenuLink>
         <MenuLink href="#news">NEWS</MenuLink>
         <MenuLink href="#mission">MISSION</MenuLink>
         <MenuLink href="#values">OUR VALUES</MenuLink>
         <MenuLink href="#team">OUR TEAM</MenuLink>
         <MenuLink href="#contacts">CONTACTS</MenuLink>
     </div>
  ),
};
