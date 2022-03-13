import "./App.css";
import React from "react"
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import MainLogo from "./components/MainLogo";
import About from "./components/About";
import Products from "./components/Products";
import VisionMission from "./components/VisionMission";
import Values from "./components/Values";
import Team from "./components/Team";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Accordion from "./components/Accordion";
import MainLogoMob from "./components/LogoMob";
import ContactsMob from "./components/ContactsMob";
import AccordionSP from "./components/AccordionSP";
import AboutSP from "./components/AboutSP";
import ProductsSP from "./components/ProductsSP";
import VisionMissionSP from "./components/VisionMissionSP";
import ValuesSP from "./components/ValuesSP";
import TeamSP from "./components/TeamSP";
import ContactsSP from "./components/ContactsSP";
import ContactsMobSP from "./components/ContactsMobSP";
import AccordionRU from "./components/AccordionRU";
import AboutRU from "./components/AboutRU";
import ProductsRU from "./components/ProductsRU";
import VisionMissionRU from "./components/VisionMissionRU";
import ValuesRU from "./components/ValuesRU";
import TeamRU from "./components/TeamRU";
import ContactsRU from "./components/ContactsRU";
import ContactsMobRU from "./components/ContactsMobRU";
import NavBarSP from "./components/NavBarSP";
import NavBarRU from "./components/NavBarRU";
import NavBarSticky from "./components/NavBarSticky";
import NavBarStickySP from "./components/NavBarStickySP";
import NavBarStickyRU from "./components/NavBarStickyRU";



function App() {
	return (
		<BrowserRouter>
			<Route exact path="/" render={()=>{
				return <div>
					<NavBarSticky/>
					<NavBar />
					<MainLogo />
					<MainLogoMob/>
					<Accordion />
					<About />
					<Products />
					<VisionMission />
					<Values />
					<Team />
					<Contacts />
					<ContactsMob/>
					<Footer />
				</div>
			}}/>
			<Route path="/sp" render={()=>{
				return <div>
					<NavBarStickySP/>
					<NavBarSP/>
					<MainLogo />
					<MainLogoMob/>
					<AccordionSP/>
					<AboutSP />
					<ProductsSP />
					<VisionMissionSP />
					<ValuesSP />
					<TeamSP />
					<ContactsSP />
					<ContactsMobSP/>
					<Footer />
				</div>
			}}/>
			<Route path="/ru" render={()=>{
				return <div>
					<NavBarStickyRU/>
					<NavBarRU/>
					<MainLogo />
					<MainLogoMob/>
					<AccordionRU />
					<AboutRU />
					<ProductsRU />
					<VisionMissionRU />
					<ValuesRU />
					<TeamRU />
					<ContactsRU />
					<ContactsMobRU/>
					<Footer />
				</div>
			}}/>
		</BrowserRouter>
	);
}

export default App;
