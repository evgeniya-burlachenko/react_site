import React, { Component } from "react"
import "./VisionMission.css"
import Border from "./LightBorder";
import BorderUp from "./LightBorderUp";
import WOW from 'wowjs';


export default class VisionMission extends Component {
    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();  }  render() {
        return (<section className="container-fluid vision_page" id={"mission"}>
                <div className="vision_overlay"/>
                <div>
                    <BorderUp/>
                </div>
                <div className="vision_mission ">
                    <div className={"row"}>
                        <div className={"col-md-6 vision_text text-justify "}>
                            <h4 className="wow fadeInLeft" data-wow-delay="250ms">The world is dramatically changing every day,
                                every hour. We foresee humanity s future needs
                                and try to encompass our products with such
                                upcoming events in order to become your favorite
                                solution providers. Our ambition is to be the only
                                ones providing the most technologically advanced
                                and practical solutions for everyday humans of
                                the Real 21st Century and the centuries to come.
                            </h4>
                        </div>
                        <div className={"col-md-6 vision text-white"}>
                            <h1 className="wow fadeInRight">VISION</h1>
                        </div>
                        <div className={"col-md-6 mission text-right text-white"}>
                            <h1 className="wow fadeInLeft" data-wow-delay="750ms">MISSION</h1>
                        </div>
                        <div className={"col-md-6 mission_text text-justify"}>
                            <h4 className="wow fadeInRight" data-wow-delay="1000ms">We care about our fellow humans and we care
                                about each individual s daily mission. To put food
                                on the table, to help kids learn and be inspired, to
                                better aid patients in hospitals, to save people
                                from a fire or an accident, to travel when others
                                cannot, to attend school in physical form or
                                virtually no matter the pandemic. All of you are
                                our Mission, to be there for you and give you the
                                tools to help you make it happen.
                            </h4>
                        </div>
                    </div>
                    <div>
                        <Border/>
                    </div>
                </div>
            </section>
        )
    }
}
