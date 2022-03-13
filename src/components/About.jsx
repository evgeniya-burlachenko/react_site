import "./About.css"
import Border from "./LightBorder";
import BorderUp from "./LightBorderUp";
import WOW from 'wowjs'
import React, { Component } from "react";

export default class About extends Component {
    componentDidMount() {
        const wow = new WOW.WOW();
            wow.init();  }  render() {
        return (<div className="container-fluid about_page" id="about">
                <div className="about_overlay"/>
                <div>
                    <BorderUp/>
                </div>
                <div className="about  ">
                    <div className="row">
                        <div className="col-sm-6 mt-5 about_left text-right text-white">
                            <h1 className="wow fadeInLeft"> ABOUT <br/> US</h1>
                        </div>
                        <div className="col-sm-6 about_right mt-5 text-justify">
                            <h4 className="wow fadeInRight" data-wow-delay="500ms">Helmda Systems is the intellectual child that was
                                birthed out of a perfectly timed intra-planetary
                                collision of two highly tuned and kindred minds, souls
                                and spirits who understood their purpose toward
                                their current societal timeline in the intergalactic
                                flow, therefore, acquiring extra con-science of its
                                surroundings and thus bringing forth quintessential
                                fruitage necessary for the survivability of the
                                species.<br/><br/>
                                In other words, the company founders believe their alliance did not come
                                about by chance and, now that they have found the perfect partner to execute and bring
                                to reality all their projects and ideas, they have fully devoted, even abandoned, themselves
                                to the designing, creating, testing and perfecting technological solutions that will aid their
                                fellow earthlings to survive the extremely challenging socio- geo- econo- enviro- political
                                situations reigning in the current anno domini 2020, by approximation of the Julian calendar.
                            </h4>
                        </div>
                    </div>
                </div>
                <div id={"products"}>
                    <Border/>
                </div>
            </div>
        )
    }
}