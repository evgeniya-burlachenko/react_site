import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { MenuContext } from '../context/navState';


const Menu = styled.nav`
  position: absolute;
  justify-content: flex-end;
  top: 0em;
  left: 0em;
  bottom: 0px;
  display: block;
  width: 100px;
  max-width: 100%;
  margin-top: 100px;
  padding-top: 0;
  padding-right: 0px;
  align-items: stretch;
  background-color: transparent;
  transform: translateX(-100%);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);




  ${(props) =>
    props.open &&
    css`
      transform: translateX(0);
    `}
`;

export const MenuLink = styled.a`
  position: relative;
  display: block;
  text-align: left;
  max-width: 100%;
  padding-top: 0.5em;
  padding-left: 1em;
  margin-top: 0.5em;
  padding-bottom: 0.5em;
  transition: background-position 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  text-decoration: none;
  color: #000;
  background-color: rgba(250,250,250,0.9);
  font-size: 12px;
  line-height: 120%;
  font-weight: 500;

  :hover {
    background-position: 90% 50%;
    text-decoration: none;
    color: #000;
  }
`;

export const SideMenuMobRU = ({ children }) => {
    const { isMenuOpen } = useContext(MenuContext);

    return <Menu open={isMenuOpen}>{children}</Menu>;
};

SideMenuMobRU.propTypes = {
    children: PropTypes.node,
};

SideMenuMobRU.defaultProps = {
    children: (
        <div>
            <MenuLink className="mob_menu_link" href="#mob_home">HOME</MenuLink>
            <MenuLink href="#slider">ABOUT US</MenuLink>
            <MenuLink href="#slider">PRODUCTS</MenuLink>
            <MenuLink href="#slider">NEWS</MenuLink>
            <MenuLink href="#slider">MISSION</MenuLink>
            <MenuLink href="#slider">OUR VALUES</MenuLink>
            <MenuLink href="#slider">OUR TEAM</MenuLink>
            <MenuLink href="#mob_contacts">CONTACTS</MenuLink>
        </div>
    ),
};