import React from "react"
import BackgroundTeams from "../assets/images/main_site_files/dark_bg.jpg"
import David from "../assets/images/Links/David_new.png";
import Mikhail from "../assets/images/Links/Mikhail_new.png";
import "./Team.css"


export default function TeamRU() {
    return <div className="container-fluid team_page" id={"team"}>
        <span className="team_overlay"/>
            <div className={"col-sm-12 text-center team_wrap"}>
                <h1>OUR TEAM</h1>
                <h3 className={"text-teams mt-3"}>We are the team of enthusiasts wholeheartedly interested in creating
                    a <br/> better future for our current society.</h3>
                <div className="col-sm-12 teams">
                    <div className={"col-sm-6 teams_photo"}>
                        <img src={David} alt={""}/>
                        <h2>David Hernandez</h2>
                        <h4>Computer Networks
                            engineer, <br/>linguist, futurist, ideas-factory,<br/>
                            expert at driving people crazy.</h4>
                    </div>
                    <div className={"col-sm-6 teams_photo"}>
                        <img src={Mikhail} alt={""}/>
                        <h2>Mikhail Rogov</h2>
                        <h4 className={"text-teams-personal"}>IT Systems engineer, inventor,<br/>
                            visionary, expert in different fields.</h4>
                    </div>
                </div>
            </div>
        <span/>
    </div>
}