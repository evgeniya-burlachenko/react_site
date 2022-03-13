import React from "react"
import AccordionItem from "./AccordionItem";
import AccordionTeam from "./AccordionTeam";
import "./Accordion.css";
import Arrow from "../assets/images/mobile_version_files/narrow3.png";
import BorderUp from "./LightBorderUp";
import Border from "./LightBorder";

export default function AccordionRU(){
    return <div className="accordion" id="accordion">
        <AccordionItem
            id="headingOne"
            id2="collapseOne"
            labelledby="headingOne"
            target="#collapseOne"
            controls="collapseOne"
            h1="about us"
            h41="Helmda Systems is the intellectual child that was
birthed out of a perfectly timed intra-planetary
collision of two highly tuned and kindred minds,
souls and spirits who understood their purpose
toward their current societal timeline in the
intergalactic flow, therefore, acquiring extra
con-science of its surroundings and thus bringing
forth quintessential fruitage necessary for the
survivability of the species."
            h42="In other words, the company founders believe their
alliance did not come about by chance and, now
that they have found the perfect partner to
execute and bring to reality all their projects and
ideas, they have fully devoted, even abandoned,
themselves to the designing, creating, testing and
perfecting technological solutions that will aid
their fellow earthlings to survive the extremely
challenging socio- geo- econo- enviro- political
situations reigning in the current anno domini
2020, by approximation of the Julian calendar. "
        />
        <AccordionItem
            id="headingTwo"
            id2="collapseTwo"
            labelledby="headingTwo"
            target="#collapseTwo"
            controls="collapseTwo"
            h1="news"
        />
        <AccordionItem
            id="headingThree"
            id2="collapseThree"
            labelledby="headingThree"
            target="#collapseThree"
            controls="collapseThree"
            h1="mission"
            h21="Vision"
            h22="Mission"
            h41="The world is dramatically changing every day,
every hour. We foresee humanity s future needs
and try to encompass our products with such
upcoming events in order to become your favorite
solution providers. Our ambition is to be the only
ones providing the most technologically advanced
and practical solutions for everyday humans of
the Real 21st Century and the centuries to come."
            h42="We care about our fellow humans and we care
about each individual s daily mission. To put food
on the table, to help kids learn and be inspired, to
better aid patients in hospitals, to save people
from a fire or an accident, to travel when others
cannot, to attend school in physical form or
virtually no matter the pandemic. All of you are
our Mission, to be there for you and give you the
tools to help you make it happen."
        />
        <div className="card" >
            <div className="card-header" id="headingFour">
                <BorderUp/>
                    <h1 className="mb-0 text-center" id="mob_values">
                        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseFour"
                                aria-expanded="true" aria-controls="collapseFour" >
                            <h1>our values</h1>
                        </button>
                    </h1>
                <Border/>
            </div>

            <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                <div className="card-body text-justify" style={{backgroundColor: `#000`}}>
                    <h2>Truthfulness</h2>
                    <h4>Our clients are our friends, our family members,
                        our favorite people, our neighbors, and we owe
                        them the Truth in the fullest sense.</h4><br/>
                    <h2>Passion</h2>
                    <h4>Everything we do, is to transcend. Everything we
                        do is Thinking how to improve lives. Everything we
                        do is relentlessly and uncompromisingly.</h4><br/>
                    <h2>Curiosity</h2>
                    <h4>Our minds are not easily satisfied with superficial
                        and glibly produced answers, paradigms, so-called
                        facts, long-known truths or generally accepted
                        concepts.</h4><br/>
                    <h2>Determination</h2>
                    <h4>Burning the midnight oil is just part of our daily
                        life. Accomplishing objectives is our pleasure.
                        Obstacles and challenges, just ingredients for our
                        success.</h4><br/>
                    <h2>Quality</h2>
                    <h4>In a world inundated by fakes and wannabe s, our
                        products stand head and shoulders above them
                        all. We create with the highest standards to
                        originate the highest outcomes.</h4><br/>
                    <h2>Perfectionism</h2>
                    <h4>Time, clearly, is of the essence. Perfection, is the
                        true goal.</h4><br/>
                    <h2>Altruism</h2>
                    <h4>Charity is overrated and a condescending attitude.
                        Giving to those in need is a must. You could be
                        next."</h4><br/>
                        <div className={"collapse_arrow text-center"}>
                            <button className="btn btn-link" data-toggle="collapse" data-target="#collapseFour"
                                    aria-expanded="true" aria-controls="collapseFour" >
                                <img src={Arrow}/>
                            </button>
                        </div>
                </div>
            </div>
        </div>
        <AccordionTeam/>
    </div>
}