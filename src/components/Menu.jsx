import React, { useRef, useContext } from 'react';
import useOnClickOutside from '../hooks/onClickOutside';
import { MenuContext } from '../context/navState';
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
        <header ref={node}>

                <HamburgerButton />
                <h1>Website</h1>

            <SideMenu />
        </header>
    );
};

export default MainMenu;
