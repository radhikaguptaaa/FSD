import React from 'react';
import "./ImageApp.css";
import pic from '../Images/pic.png';
import { useState } from "react";

const ImageApp = () => {
    const [width, setWidth] = useState(200);
    const [height, setHeight] = useState(200);
    const [rotation, setRotation] = useState(0);
  return (
    <div className='disp'>
        <div className='image'>
            <img
            src = {pic}
            style={ {
                width : width,
                height : height,
                transform : `rotate(${rotation}deg)`,
            }}
            />
            <div  className='func'>
                <button className='IncH' onClick={() => {
                    setHeight(height +10)
                }}> Increase Height</button>
                <button className='DecrH' onClick={() => {
                    setHeight(height -10)
                }}> Decrease Height</button>
                <button className='DecW' onClick={() => {
                    setWidth(width -10)
                }}> Decrease Width</button>
                <button className='IncW' onClick={() => {
                    setWidth(width + 10)
                }}> Increase Width</button>
                <button className='ClockR' onClick={() => {
                    setRotation(rotation + 10)
                }}> Clockwise Rotate</button>
                <button className='AntiClockR' onClick={() => {
                    setRotation(rotation - 10)
                }}> AntiClockwise Rotate</button>
                



            </div>
        </div>
      
    </div>
  )
}

export default ImageApp;

