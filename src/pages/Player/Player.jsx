import React, { useEffect, useState } from "react";
import './Player.css';
import back_arr from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from "react-router-dom";

export function Player() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [apiData, setApidata] = useState({
        name: "",
        key: "",
        published_at: "",
        type: ""
    });
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGY0MGZkNDY5ZGViYzI5MmU2ZjYxMWY0YzE1NGRkMSIsInN1YiI6IjY2Njg0ODA2NGUzOTM4NDU2YWVhMTMwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t7bbQf3GK6CfxFysyT2UJ3US5j412Wlviz868-PpKMA'
        }
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
            .then(response => response.json())
            .then(response => setApidata(response.results[0]))
            .catch(err => console.error(err));
    }, [])
    return (
        <div className="player">
            <img src={back_arr} onClick={() => { navigate(-2) }} alt="" />
            <iframe src={`https://www.youtube.com/embed/${apiData.key}`} allowFullScreen width='90%' title="trailer" height='90%' frameborder="0"></iframe>
            <div className="player-info">
                <p>{apiData.published_at.slice(0, 10)}</p>
                <p> {apiData.name}</p>
                <p>{apiData.type}</p>
            </div>
        </div>
    )
}