import React from 'react';
import './portfolio.scss'
import debut1 from '../../img/debut1.png';
import standard1 from '../../img/standard1.png';
import chatbot from '../../img/chatbot.png';
import food1 from '../../img/food1.png';


export default function Portfolio(){
    return(
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <p>These are some of the fictional projects that I have worked on to practice, understand and showcase the technology I use.</p>
            <div className="wrapper">
            <a href="https://emiliasakala.github.io/Debut/" target="_blank">

                <div className="project">

                    <img src={debut1} alt="" />
                   
                   
                </div>
                </a>

            <a href="https://emiliasakala.github.io/standard-freight-solutions/" target="_blank">

                <div className="project">
                    <img src={standard1} alt="" />
                    
                </div>
                </a>

             <a href="https://emiliasakala.github.io/food-app/" target="_blank">

                <div className="project">
                    <img src={food1} alt="" />
                    
                </div>
                </a>
                <div className="project">
                    <img src={chatbot} alt="" />
                   
                </div>

                <a href="https://emiliasakala.github.io/Debut/" target="_blank">

                <div className="project">

                    <img src={debut1} alt="" />
                    
   
                    </div>
                </a>

                <a href="https://emiliasakala.github.io/standard-freight-solutions/" target="_blank">

                    <div className="project">
                    <img src={standard1} alt="" />
                    
                </div>
                </a>
               
            </div>

            
        </div>
    )
}