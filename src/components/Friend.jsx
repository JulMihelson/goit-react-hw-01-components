import React from 'react'
import defaultImage from '../defaultImage.jpg'
import './Friends.css'


export const Friend = ({ element }) => {
    console.log("element", element);
    const { avatar = defaultImage, name, isOnline } = element
         return (<li className="item">
         <span className={isOnline ? "isOnline" : "isOffline"}>{isOnline ? "Online" : "Offline"}</span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
             <p className="name">{ name}</p>
</li>
  )   
  }
