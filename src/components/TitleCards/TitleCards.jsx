import React, { useEffect, useRef, useState } from "react";
import './TitleCards.css';
import { Link } from "react-router-dom";

export function TitleCards({ title, category }) {
    const [apiData, setApidata] = useState([]);
    const cardsref = useRef();

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGY0MGZkNDY5ZGViYzI5MmU2ZjYxMWY0YzE1NGRkMSIsInN1YiI6IjY2Njg0ODA2NGUzOTM4NDU2YWVhMTMwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t7bbQf3GK6CfxFysyT2UJ3US5j412Wlviz868-PpKMA'
        }
    };

    function handleWheel(event) {
        event.preventDefault();
        cardsref.current.scrollLeft += event.deltaY;
    }
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${category ? category : 'now_playing'}?language=en-US&page=1`, options)
            .then(response => response.json())
            .then(response => setApidata(response.results))
            .catch(err => console.error(err));

        cardsref.current.addEventListener('wheel', handleWheel)
    }, []);
    return (
        <div className="title_cards">
            <h2>{title ? title : "Popular on Netflix"}</h2>
            <div className="title_imgs" ref={cardsref}>
                {
                    apiData.map((card, index) => {
                        return <Link to={`/player/${card.id}`} className="card" key={index}>
                            <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" />
                            <p>{card.original_title}</p>
                        </Link>
                    })
                }
            </div>
        </div>
    )
}