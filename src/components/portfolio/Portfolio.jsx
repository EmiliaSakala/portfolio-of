import React from 'react';
import './portfolio.scss'
import debut from '../../img/debut.png';
import standard from '../../img/standard.png';
import chatbot from '../../img/chatbot.png';
import food from '../../img/food.png';

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <div className="container">
            <a href="https://emiliasakala.github.io/Debut/" target="_blank">
            <div className="item">
                <img src={debut} alt="" />
                <h3>Debut Capital</h3>
            </div>
            </a>
            <a href="https://emiliasakala.github.io/standard-freight-solutions/" target="_blank">

            <div className="item">
                <img src={standard} alt="" />
                <h3>Standard freight solutions</h3>
            </div>
            </a>
            <div className="item">
                <img src={chatbot} alt="" />
                <h3>Chatbot app</h3>
            </div>
            <a href="https://emiliasakala.github.io/food-app/" target="_blank">
            <div className="item">
                <img src={food} alt="" />
                <h3>Debut Capital</h3>
            </div>
            </a>
            <div className="item">
                <img src={debut} alt="" />
                <h3>Debut Capital</h3>
            </div>
            <div className="item">
                <img src={debut} alt="" />
                <h3>Debut Capital</h3>
            </div>
        </div>

    </div>
  )
}
