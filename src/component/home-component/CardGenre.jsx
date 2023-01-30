import React, {useState, useEffect, useRef} from 'react'

export default function CardGenre() {

    let idKey = +new Date()
    let idMovie = idKey++

    const dataGenre = [
        {id: idMovie, genre: 'Action', years: 1999},
        {id: idMovie, genre: 'Super Hero', years: 2010},
        {id: idMovie, genre: 'Fantasy', years: 2011},
        {id: idMovie, genre: 'Thiller', years: 2012},
        {id: idMovie, genre: 'Horror', years: 2013},
        {id: idMovie, genre: 'Comedy', years: 2014},
        {id: idMovie, genre: 'Drama', years: 2015},
        {id: idMovie, genre: 'Adventure', years: 2020},
        {id: idMovie, genre: 'Sci-Fi', years: 2021},
        {id: idMovie, genre: 'Romance', years: 2022},
        {id: idMovie, genre: 'Animation', years: 2019},
    ]

    // status string kosong
    const [searchMovie, setSearchMovie] = useState('')
    const [genre, setGenre] = useState(dataGenre)

    // ref dengan string kosong
    const movie = useRef('')

    // effect search
    useEffect(() => {
        movie.current = searchMovie
    }, [searchMovie])

    console.log(genre)

    return (
        <div className='search-genre'>             
            <div>
                <form>
                    <div className='input-search'>
                        <h4 className='text-start'>Search: {searchMovie}</h4>
                        <input type="search" placeholder='Enter Movie' value={searchMovie} onChange={e => setSearchMovie(e.target.value)}/>
                    </div>
                    <div className='input-select'>
                        <select id="genre-select">
                            <option value="/">All Genre</option>
                            {genre.map((movie, id) => {
                                return (
                                    <option value={movie.genre} key={id}>{movie.genre}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className='input-select'>
                        <select id="year-select">
                            <option value="/">All Years</option>
                            {genre.map((year, id) => {
                                return <option value={year.years} key={id}>{year.years}</option>
                            })}
                        </select>
                    </div>
                    <div className='search-button'><button>Search</button></div>                    
                </form>
            </div>
        </div>
    )
}
