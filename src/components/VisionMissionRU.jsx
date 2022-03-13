import React, { Component } from "react"
import "./VisionMission.css"
import Border from "./LightBorder";
import BorderUp from "./LightBorderUp";
import WOW from 'wowjs';




export default class VisionMissionRU extends Component {
    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();  }  render() {
    return  <section className="container-fluid vision_page"  id={"mission"}>
        <div className="vision_overlay"/>
        <div>
            <BorderUp/>
        </div>
        <div className="vision_mission ">
                <div className={"row"}>
                    <div className={"col-md-6 vision_text text-justify "}>
                            <h4 className="wow fadeInLeft" data-wow-delay="250ms">Мир кардинально меняется каждый день, каждый час. Мы предвидим будущие потребности человечества и стараемся разрабатывать наши продукты с учетом предстоящих событий, чтобы стать вашими любимыми поставщиками решений. Наша цель - быть единственными, кто предлагает самые технологически продвинутые и практичные решения для обычных людей в реальном 21 веке и грядущих веках.
                            </h4>
                    </div>
                <div className={"col-md-6 vision text-white"}>
                    <h1 className="wow fadeInRight" >ТОЧКА ЗРЕНИЯ</h1>
                </div>
                <div className={"col-md-6 mission text-right text-white"}>
                    <h1 className="wow fadeInLeft" data-wow-delay="750ms">МИССИЯ</h1>
                </div>
                <div className={"col-md-6 mission_text text-justify"}>
                    <h4 className="wow fadeInRight" data-wow-delay="1000ms">Мы стараемся заботиться и помогать решать повседневные задачи каждого человека. Чтобы выполнение повседневных дел было простым и безопасным, чтобы дети учились и вдохновлялись, а те, кто решает непосильные задачи борясь за здоровье и безопасность людей чувствовали себя ещё более защищёнными. Сделать возможным совершать путешествия, когда другие не могут, посещать учебные заведения в независимости от экологической и экономической ситуации. Все вы - наша миссия, чтобы быть рядом с вами и дать вам инструменты, которые помогут вам шагать уверенно.
                    </h4>
                </div>
                </div>
            <div>
                <Border/>
            </div>
        </div>
    </section>
}}
