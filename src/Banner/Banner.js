import React, { useState, useEffect } from 'react'
import './Banner.css'
import axios from '../axios'
import requests from '../request'


function Banner() {

    const [movie, setMovies] = useState([])

    useEffect(() => {
        async function fetch() {
            const request = await axios.get(requests[0].link) //get Netflix original link
            setMovies(
                request.data.results[Math.floor(Math.random()*(request.data.results.length))]
            )
        }
        fetch()
    }, [])

    return (
        <header className='banner'
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie.backdrop_path}"
                )`,
                backgroundPosition: 'center top',
                height: '80vw',
                maxHeight: '75vh',
                backdropFilter: 'blur(5px)',
                color: 'white'
            }}
        >
            <div className='banner_contents'>
                <h1 className='banner__title'>{movie.title || movie.name || movie.original_name}</h1>
                <div className='banner__buttons'>
                    <button className='banner__button' >Play</button>
                    <button className='banner__button' >My List</button>
                </div>
                <div className='banner__description'>
                    {/* {(movie.overview.length > 150) ? movie.overview.substring(0, 149) : movie.overview} */}
                    {movie.overview}
                </div>
                <div className='banner--fadeBottom' />
            </div>
        </header>
    )
}

export default Banner
