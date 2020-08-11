import React, { useState, useEffect } from 'react'
import axios from '../axios'
import './Row.css'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const imgUrl = 'https://image.tmdb.org/t/p/original'

function Row({title, fetchUrl, isLargeRow, trailerUrl, setTrailer, movieClicked, setMovieClicked, titleClicked, setTitleClicked}) {

    const [movies, setMovies] = useState([])
    
 
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            setTitleClicked(title)
            return request
        }
        fetchData()
    }, [fetchUrl])

    const handleClick = (movie) => {
        setTitleClicked(title)
        if(trailerUrl){
            setTrailer('')
            if (movieClicked !== (movie.title || movie.name || movie.original_name)){
                setMovieClicked(movie.title || movie.name || movie.original_name)
                movieTrailer(movie.title || movie.name || movie.original_name)
                .then(url => {
                    const urlparams = new URLSearchParams(new URL(url).search)
                    setTrailer(urlparams.get('v'))
                }).catch(err => alert(err))
            }
            
        } else {
            setMovieClicked(movie.title || movie.name || movie.original_name)
            movieTrailer(movie.title || movie.name || movie.original_name)
            .then(url => {
                const urlparams = new URLSearchParams(new URL(url).search)
                setTrailer(urlparams.get('v'))
            }).catch(err => alert(err))
        }
    }

    const opts = {
        height: '390px',
        width: '100%',
        playerVars: {
            autoplay: 1
        }
    }
    
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row__posters'>
                {
                    movies.map(movie => (
                        <img key={movie.id} className={`row__poster ${isLargeRow && 'row__posterLarge'}`} src={`${imgUrl}${ isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt='' 
                            onClick={() => handleClick(movie)}
                        />
                    ))
                }
            </div>
            { 
                
                (title===titleClicked) && trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />
            }
        </div>
    )
}

export default Row
