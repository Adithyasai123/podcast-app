import React from 'react'
import './Header.css'
import podcat_music from '../../Assests/podcat_music.png'
import  Group_376 from '../../Assests/Group_376.png'
 
const Header = () => {
  return (
  <div className="header">
    <img src={podcat_music} alt="" className="podcat_music"/>
    

    <ul className="header-menu">
        <li className="Discover">Discover</li>
        <li className="trending">Trending</li>
        <li className="resources">Resources</li>
        <li className="register">Register</li>
        <li className="seperater"> |</li>
        <li className="login">Login</li>
    </ul>
     
     <img src={Group_376} alt="" className="bubbleimg"/>
  </div>
  )
}

export default Header
