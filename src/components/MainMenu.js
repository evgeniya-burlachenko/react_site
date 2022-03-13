import React, { useRef, useContext } from 'react';
import useOnClickOutside from '../hooks/onClickOutside';
import NavState, { MenuContext } from '../context/navState';
import HamburgerButton from './HamburgerButton';
import { SideMenu } from './SideMenu';

const MainMenu = () => {
  const node = useRef();
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
  useOnClickOutside(node, () => {
    // Only if menu is open
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });

  return (
    <div>
        <NavState>
            <HamburgerButton />
            <SideMenu />
        </NavState>
    </div>
  );
};

export default MainMenu;
