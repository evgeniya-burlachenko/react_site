import React, { Component } from "react"
import BackgroundValues from "../assets/images/main_site_files/bg4.jpg";
import "./Values.css"
import Border from "./LightBorder";
import BorderUp from "./LightBorderUp";
import WOW from 'wowjs';

export default class ValuesRU extends Component {
    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();  }  render() {
    return <div className="container-fluid values_page" id={"values"} style={{backgroundImage: `url(${BackgroundValues})`}}>
        <div>
            <BorderUp/>
        </div>
        <div className="values ">
                <div className={"row"}>
                    <div className={"col-sm-6 values_left text-right text-white"}>
                        <h1 className="wow fadeInLeft">наши <br/> ценности</h1>
                    </div>
                    <div className={"col-sm-6 values_right"}>
                        <div className={"top_div"}><h3 className="wow fadeInRight" data-wow-delay="250ms">Честность</h3>
                            <h5 className="wow fadeInRight" data-wow-delay="2300ms">Наши клиенты - это наши друзья, члены нашей семьи, наши любимые люди, наши соседи, и мы в долгу перед ними Истиной в самом полном смысле этого слова.</h5>
                        </div>
                        <div><h3 className="wow fadeInRight" data-wow-delay="500ms">Страсть</h3>
                            <h5 className="wow fadeInRight" data-wow-delay="2300ms">Все, что мы делаем, - это быть лучшими. Все, что мы делаем, - это думаем о том, как улучшить жизнь. Все, что мы делаем, мы делаем с полной отдачей и бескомпромиссно.</h5>
                        </div>
                        <div><h3 className="wow fadeInRight" data-wow-delay="750ms">Любопытство</h3>
                            <h5 className="wow fadeInRight" data-wow-delay="2300ms">Нашему любопытству не достаточно поверхностных и красноречивых ответов, парадигм, так называемых фактов, всем известных истин или общепринятых концепций.</h5>
                        </div>
                        <div><h3 className="wow fadeInRight" data-wow-delay="1000ms">Решимость</h3>
                            <h5 className="wow fadeInRight" data-wow-delay="2300ms">Выполнение работы до получения желаемого результата - лишь часть нашей повседневной жизни. Достижение целей - наше удовольствие. Препятствия и проблемы - всего лишь составляющие нашего успеха.</h5>
                        </div>
                        <div><h3 className="wow fadeInRight" data-wow-delay="1250ms">Качество</h3>
                            <h5 className="wow fadeInRight" data-wow-delay="2300ms">В мире, наводненном подделками и подобием качественных товаров, наша продукция на голову выше всех. Всё что мы создаём мы создаем в соответствии с высочайшими стандартами, чтобы добиться наилучших результатов.</h5>
                        </div>
                        <div><h3 className="wow fadeInRight" data-wow-delay="1500ms">Перфекционизм</h3>
                            <h5 className="wow fadeInRight" data-wow-delay="2300ms">Время, очевидно, имеет значение. Совершенство - вот истинная цель.</h5>
                        </div>
                        <div><h3 className="wow fadeInRight" data-wow-delay="1750ms">Альтруизм</h3>
                            <h5 className="wow fadeInRight" data-wow-delay="2300ms">Милосердие потеряло ценность и соответствующего отношения. Давать нуждающимся - необходимость. Каждый может стать следующим.</h5>
                        </div>
                    </div>
                </div>
            </div>
                <Border/>
        </div>
}}