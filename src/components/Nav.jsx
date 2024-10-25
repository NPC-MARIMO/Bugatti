import React, { useRef } from 'react'
import Logo from '../assets/images/logo.png'
import '../css/Nav.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Nav = () => {

  let textBrand = "BUGATTI";
  let lettersBrand = textBrand.split("");


  useGSAP(()=>{

    let tl = gsap.timeline();

    tl.from('nav .brand h3 span',{
      scale : 0 , 
      duration : .5 ,
      ease : "Expo-ease.inOut",
      stagger : .1
    },'a').from('nav .menu div' , {
      x : 100,
      duration : .7 ,
      stagger : .1,
    },'a').from('nav .logo img' , {
      duration : .5 ,
      delay : .5,
      opacity : 0,
      ease : "none"
    },'a')
  })

  return (
    <nav>

        <div className="logo">
            <img src={Logo} alt="" />
        </div>

        <div className="brand">
            <h3>{
                  lettersBrand.map((letter , index)=>(
                    <span key={index} >{letter}</span>
                  ))
              }</h3>
        </div>

        <div className="menu">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
      
    </nav>
  )
}

export default Nav
