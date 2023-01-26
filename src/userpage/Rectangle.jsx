import React from 'react';
// import { ReactSVG } from 'react-svg';
// import rectangle from '../assets/images/rectangle.svg'

const Rectangle = (props) => {
  return (
    
    <svg width="168" height="186" viewBox="0 0 208 226" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 50C0 22.3858 22.3858 0 50 0H158C185.614 0 208 22.3858 208 50V176C208 203.614 185.614 226 158 226H50C22.3858 226 0 203.614 0 176V50Z" fill={props.color}/>
    <path d="M0 65H208V67H0V65Z" fill="white"/>
    
    <text x="104" y="40" fill="black" textAnchor="middle" font-family="Arial, sans-serif" font-size="24">
    {props.text1}
    </text>

    <text x="104" y="100" fill="#FF8000" textAnchor="middle" font-family="Arial, sans-serif" font-size="22">
    {props.text2}
    </text>

    <text x="104" y="150" fill="black" textAnchor="middle" font-family="Arial, sans-serif" font-size="24">
    {props.text3}
    </text>

</svg>
    
  )
}
export default Rectangle;