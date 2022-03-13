import React from "react";
import "./ContactsMob.css";
import BackgroundAccordion from "../assets/images/mobile_version_files/bg_2.jpg";
import MainWhiteLogo from "../assets/images/Links/HELMDA SYSTEMS  white logo.png";
import LightMainLogo from "../assets/images/main_site_files/light_main_logo.png";
import Form from "./Form";

export default function ContactsMobRU() {
    return (<div className='container main_footer_mob' id="mob_contacts" style={{backgroundImage: `url(${BackgroundAccordion})`}}>>
                <div className='row justify-content-around footer_center_mob'>
                        <div className="col-sm-12 footer_contact_mob">
                            <div className='col-sm-12 text-center'>
                                <h3>GET IN TOUCH</h3>
                            </div>
                        </div>
                    <div className='mob_footer_form text-center'>
                      <Form/>
                    </div>
                </div>
            <div className='col footer_right_item_mob text-center'>
                <div className='footer_head_item ml-3'>
                    <h4>e-mail:</h4>
                </div>
                <div className='footer_text_item ml-3'>
                    <h5>info@helmda-systems.com</h5>
                </div>
                <div className='mt-2 footer_head_item ml-3'>
                    <h4>phone number:</h4>
                </div>
                <div className='footer_text_item ml-3'>
                    <h5>+7 903 5544908</h5>
                </div>
                <div className='mt-2 footer_head_item ml-3'>
                    <h4>our address:</h4>
                </div>
                <div className='footer_text_item ml-3'>
                    <h5>
                        Harju maakond, Tallinn, {"\n"}Kesklinna linnaosa, {"\n"}Narva mnt 5, 10117
                    </h5>
                </div>
            </div>
            <div className="">
                <div className="main_logo_mob col-sm-12">
                    <div className=" white_logo_mob text-center  ">
                        <a href="#mob_home"><img src={MainWhiteLogo} style={{width:"40%"}} alt={""}/></a>
                    </div>
                    <div className="light_main_logo_mob text-center ">
                        <img src={LightMainLogo} style={{width:"60%"}} alt={""}/>
                    </div>
                    <div className="footer-text_mob text-center col-sm-12 ">
                        <h2 className="" >copyright © 2020 all rights reserved</h2>
                    </div>
                </div>
            </div>
    </div>
    );
}