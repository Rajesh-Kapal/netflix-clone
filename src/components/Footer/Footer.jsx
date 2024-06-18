import React from "react";
import './Footer.css';
import youtube from '../../assets/youtube_icon.png';
import twitter from '../../assets/twitter_icon.png';
import insta from '../../assets/instagram_icon.png';
import fb from '../../assets/facebook_icon.png';

export function Footer(){
    return(
        <div className="footer">
            <div className="footer-icons">
                <img src={youtube} alt="" />
                <img src={twitter} alt="" />
                <img src={fb} alt="" />
                <img src={insta} alt="" />
            </div>
            <ul>
                <li>Audio Description</li>
                <li>Help center</li>
                <li>Cookie Perfermence</li>
                <li>Audio Description</li>
                <li>Help center</li>
                <li>Cookie Perfermence</li>
                <li>Audio Description</li>
                <li>Help center</li>
                <li>Cookie Perfermence</li>
                <li>Audio Description</li>
                <li>Help center</li>
                <li>Cookie Perfermence</li>
                
            </ul>
            <p className="copy">&copy; 1995-2024 Netflix</p>
        </div>
    )
}