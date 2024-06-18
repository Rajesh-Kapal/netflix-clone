import { Navbar } from '../../components/Navbar/Navbar';
import './Home.css';
import React from 'react';
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png';
import play from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png'
import { TitleCards } from '../../components/TitleCards/TitleCards';
import { Footer } from '../../components/Footer/Footer';

export function Home(){
    return(
        <div className="home">
            <Navbar/>
            <div className="hero">
                <img src={hero_banner} className='banner_img' alt="" />
                <div className="hero-caption">
                    <img src={hero_title} className='caption_img' alt="" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam magnam, temporibusit amet consectetur adipisicing elit. Numquam magnam, temporibus aspernatur rerum culpa maiores libero laboriosam?</p>
                    <div className="hero-btns">
                        <button className='btn'><img src={play} alt="" />Play</button>
                        <button className='btn dark_btn'><img src={info_icon} alt="" />More Info</button>
                    </div>
                    <TitleCards/>
                </div>
            </div>
            <div className="more-cards">
                <TitleCards title={"Blockbuster Movie"} category={"top_rated"} />
                <TitleCards title={"Movies for you"} category={"popular"} />
                <TitleCards title={"Only on Netflix"} category={"now_playing"}/>
                <TitleCards title={"Upcoming"} category={"upcoming"} />
            </div>
            <Footer/>
        </div>
    )
}