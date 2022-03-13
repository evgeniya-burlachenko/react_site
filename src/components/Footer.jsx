import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import BlueLogo from "../assets/images/Links/HELMDA SYSTEMS  blue logo.png";

export default function Footer() {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-white footer_nav'>
			<div className='collapse navbar-collapse footer_logo justify-content-center col-4' id='navbarNavAltMarkup'	>
				<a href ="#home">
					<img src={BlueLogo} />
				</a>
				<div className='navbar-nav'>
					<NavLink className='nav-item nav-link' to='/sp'>
						SP
					</NavLink>
					<NavLink className='nav-item nav-link' exact to='/'>
						EN
					</NavLink>
					<NavLink className='nav-item nav-link' to='/ru'>
						RU
					</NavLink>
				</div>
			</div>
			<div className='collapse navbar-collapse justify-content-end copyright'>
				copyright © 2020 all rights reserved
			</div>
		</nav>
	);
}