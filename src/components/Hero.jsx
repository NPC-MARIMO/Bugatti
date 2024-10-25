import React from 'react'
import '../css/Hero.css'
import Car from '../assets/images/car.png'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {

    let text = "TOURBILLON";
    let letters = text.split("");

    let slogan = 'Not For Present'
    let sloganWords = slogan.split(" ")
    useGSAP(()=>{

        let tlH = gsap.timeline()

        tlH.from('.hero>.right .bottom',{
            x : "90%",
            duration : 1,
        },'b').from('.hero>.right .bottom .wheel',{
            duration : 1,
            rotate : 480,
        },'b').from('.hero .fir',{
            y : '-100%',
            duration : .7,
            delay : .5
        },'b').from('.hero .sec',{
            y : "100%",
            duration : .7,
            delay : .5
        },'b').from('.hero>.right .top span',{
            stagger : 0.07,
            opacity : 0,
            delay : .2
        },'b')
    
    })

  return (
   <div className="hero">

        <div className="left">
            <div className="top">
                <div>
                <h1 className='fir' >
                    POUR
                </h1>
                <h1 className='sec'>L'ĒTERNITĒ</h1>
                </div>
            </div>
            <div className="bottom">
                <h3>Discover the tourbillon</h3>
            </div>

        </div>
        <div className="right">
            <div className="top">
                <h1>{
                    letters.map((letter , index) => (
                        <span key={index}>{letter}</span>
                        )
                    )
                    }</h1>
                <p>{    
                        sloganWords.map((word , index ) => (
                            <span style={{marginRight : ".5rem"}} key={index}>{word}</span>
                        ))
                    }</p>
            </div>

            <div className="bottom">
              <img src={Car} alt="" />
                    <div className="wheel">
                        <img src={Car} alt="" />
                    </div>
            </div>
        </div>

   </div>
  )
}

export default Hero
