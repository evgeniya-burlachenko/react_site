import "./About.css"
import Border from "./LightBorder";
import BorderUp from "./LightBorderUp";
import WOW from 'wowjs'
import React, { Component } from "react";

export default class AboutRU extends Component {
    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();  }  render() {
    return <div className="container-fluid about_page" id="about">
        <div className="about_overlay"/>
        <div>
            <BorderUp/>
        </div>
        <div className="about  ">
            <div className="row">
                <div className="col-sm-6 mt-5 about_left text-right text-white">
                    <h1 className="wow fadeInLeft"> О <br/> СЕБЕ</h1>
                </div>
                <div className="col-sm-6 about_right mt-5 text-justify">
                    <h4 className="wow fadeInRight" data-wow-delay="500ms">HelmDA Systems – интеллектуальный союз изобретателей,
                        который образовался в результате осознания своих целей и возможностей,
                        а также потребностей большинства жителей в многонациональном и социально разнообразном мире.
                        <br/><br/>
                        Другими словами, основатели компании считают, что их альянс возник не случайно,
                        и теперь, когда они нашли идеального партнера для реализации и воплощения в жизнь всех своих проектов и идей,
                        они полностью посвятили себя проектированию, создавая, тестируя и совершенствуя технологические решения,
                        которые помогут жителям государств решить свои задачи в чрезвычайно сложных социально-гео-эконо-экологических
                        и политических ситуациях.
                    </h4>
                </div>
            </div>
        </div>
        <div id={"products"}>
            <Border/>
        </div>
    </div>
}
}