import React, { Component } from "react"
import BackgroundValues from "../assets/images/main_site_files/bg4.jpg";
import "./Values.css"
import Border from "./LightBorder";
import BorderUp from "./LightBorderUp";
import WOW from 'wowjs';

export default class Values extends Component {
    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();  }  render() {
        return (<div className="container-fluid values_page" id={"values"}
                     style={{backgroundImage: `url(${BackgroundValues})`}}>
                <div>
                    <BorderUp/>
                </div>
                <div className="values ">
                    <div className={"row"}>
                        <div className={"col-sm-6 values_left text-right text-white"}>
                            <h1 className="wow fadeInLeft">Our <br/> values</h1>
                        </div>
                        <div className={"col-sm-6 values_right"}>
                            <div className={"top_div"}><h3 className="wow fadeInRight" data-wow-delay="250ms">Truthfulness</h3>
                                <h5 className="wow fadeInRight" data-wow-delay="2300ms">Our clients are our friends, our family members,
                                    our favorite people, our neighbors, and we owe
                                    them the Truth in the fullest sense.</h5>
                            </div>
                            <div><h3 className="wow fadeInRight" data-wow-delay="500ms">Passion</h3>
                                <h5 className="wow fadeInRight" data-wow-delay="2300ms">Everything we do, is to transcend. Everything we
                                    do is Thinking how to improve lives. Everything we
                                    do is relentlessly and uncompromisingly.</h5>
                            </div>
                            <div><h3 className="wow fadeInRight" data-wow-delay="750ms">Curiosity</h3>
                                <h5 className="wow fadeInRight" data-wow-delay="2300ms">Our minds are not easily satisfied with superficial
                                    and glibly produced answers, paradigms, so-called
                                    facts, long-known truths or generally accepted
                                    concepts.</h5>
                            </div>
                            <div><h3 className="wow fadeInRight" data-wow-delay="1000ms">Determination</h3>
                                <h5 className="wow fadeInRight" data-wow-delay="2300ms">Burning the midnight oil is just part of our daily
                                    life. Accomplishing objectives is our pleasure.
                                    Obstacles and challenges, just ingredients for our
                                    success.</h5>
                            </div>
                            <div><h3 className="wow fadeInRight" data-wow-delay="1250ms">Quality</h3>
                                <h5 className="wow fadeInRight" data-wow-delay="2300ms">In a world inundated by fakes and wannabe s, our
                                    products stand head and shoulders above them
                                    all. We create with the highest standards to
                                    originate the highest outcomes.</h5>
                            </div>
                            <div><h3 className="wow fadeInRight" data-wow-delay="1500ms">Perfectionism</h3>
                                <h5 className="wow fadeInRight" data-wow-delay="2300ms">Time, clearly, is of the essence. Perfection, is the
                                    true goal.</h5>
                            </div>
                            <div><h3 className="wow fadeInRight" data-wow-delay="1750ms">Altruism</h3>
                                <h5 className="wow fadeInRight" data-wow-delay="2300ms">Charity is overrated and a condescending attitude.
                                    Giving to those in need is a must. You could be
                                    next.</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <Border/>
            </div>
        )
    }
}