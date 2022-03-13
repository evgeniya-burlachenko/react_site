import React from "react"
import "./LogoMob.css"
import MainWhiteLogo from "../assets/images/Links/HELMDA SYSTEMS  white logo.png"
import LightMainLogo from "../assets/images/main_site_files/light_main_logo.png"
import Background from "../assets/images/mobile_version_files/bg_1.jpg"
import Carousel from "./Carousel";

export default function MainLogoMob() {
    return <div className="container-fluid main_page_mob" id={"mob_home"}>
        <div className="">
            <div className=" main_logo_mob col-sm-12">
                <div className=" white_logo_mob text-center  ">
                    <img src={MainWhiteLogo} style={{width:"80%"}} alt={""}/>
                </div>
                <div className="  light_main_logo_mob text-center ">
                    <img src={LightMainLogo} style={{width:"100%"}}/>
                </div>
                <div className="main-text_mob text-center col-sm-12 ">
                    <h2 className="" >Life is not what you expected,
                        <br/>but we are </h2>
                </div>
            </div>
        </div>
        <Carousel />
    </div>


}