import React from 'react';
import './intro.css';
import me3 from "../../img/me3.png"

const Intro = () => {
  return (
    <div className="intro">
        <div className="left">
           <div className="left-wrapper">
               <h2 className="h2">Hello my name is</h2>
               <h1 className="name">Emilia Sakala</h1>
               <div className="tittle">
                   <div className="tittle-wrapper">
                       <div className="tittle-item">Web Developer</div>
                       <div className="tittle-item">Web Designer</div>
                       <div className="tittle-item">Writter</div>
                       <div className="tittle-item">Digital Marketer</div>
                    </div>
                     </div>
                     <div className="desc">
                     I write well designed, testable, efficient code by 
                     using best software development practices
                         </div>
            </div>    
        </div>
        <div className="right">
            <div className="bg"></div>
            {/* <img src={me3} alt="" className='img' /> */}
        </div>
    </div>
  )
}

export default Intro