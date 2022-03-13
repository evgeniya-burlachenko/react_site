import React from "react"
import "./MainLogo.css"
import MainWhiteLogo from "../assets/images/Links/HELMDA SYSTEMS  white logo.png"
import LightMainLogo from "../assets/images/main_site_files/light_main_logo.png"
import LightBorder from "../assets/images/main_site_files/light_border_new.png";

export default function MainLogo() {
    return <div className="container-fluid main_page" id={"home"}>


        <div className="container">
            <div className=" main_logo col-sm-12">
                <div className=" white_logo text-center  ">
                    <img src={MainWhiteLogo} style={{width:"80%"}} alt={""}/>
                </div>
                <div className="  light_main_logo text-center ">
                    <img src={LightMainLogo} style={{width:"100%"}}/>
                </div>
                <div className="  main-text text-center ml-3 col-sm-12 ">
                    <h2 className="   " >Life is not what you expected,
                        <br/>but we are </h2>
                </div>



            </div>
        </div>
        <div className="col-sm-12 lightBorder ">
            <img className={""} style={{width: "100%"}} src={LightBorder} alt={""}/>
        </div>
    </div>


}