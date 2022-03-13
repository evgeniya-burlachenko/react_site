import React from "react"
import David from "../assets/images/Links/David_new.png";
import Mikhail from "../assets/images/Links/Mikhail_new.png";
import "./AccordioneTeam.css"
import Border from "./LightBorder";
import BorderUp from "./LightBorderUp";
import Arrow from "../assets/images/mobile_version_files/narrow3.png";

export default function AccordionTeamRU(){
        return <div className="card">
            <div className="card-header" id="headingFive">
                <BorderUp/>
                <h5 className="mb-0 text-center">
                    <button className="btn btn-link" data-toggle="collapse"  data-target="#collapseFive" aria-expanded="true"
                            aria-controls="collapseFive">
                        <h1>Our team</h1>
                    </button>
                </h5>
                <Border/>
            </div>
        <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
            <div className="card-body text-center" style={{backgroundColor: `#000000`}}>>
               <h4 className="first_card">We are the team of enthusiasts wholeheartedly interested in creating a
                   better future for our current society.</h4>
                <div className="team">
                    <div className={"teams_photo_mob col-sm-12"}>
                        <img src={David} alt={""}/>
                        <h2>David Hernandez</h2>
                        <h4>Computer Networks
                            engineer, <br/>linguist, futurist, ideas-factory,<br/>
                            expert at driving people crazy.</h4>
                    </div>
                    <div className={"teams_photo_mob col-sm-12"}>
                        <img src={Mikhail} alt={""}/>
                        <h2>Mikhail Rogov</h2>
                        <h4>IT Systems engineer, inventor,<br/>
                            visionary, expert in different fields.</h4>
                    </div>
                    <div className={"collapse_arrow text-center"}>
                        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseFive"
                                aria-expanded="true" aria-controls="collapseFour" >
                            <img src={Arrow}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
