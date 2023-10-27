import React from 'react'
import { Link } from 'react-router-dom'

function Moviecomp(props) {
    const {poster, title, genres, slug} = props
  return (
    <div data-aos="fade-up" data-aos-duration="500" className="text-center d-grid hover-bg padding-mobile">
    <Link to={`/detail/${slug}`}>
    <img width={"50%"} className='movie-poster' src={poster} alt="poster" /></Link>
    <b className="mt-3">{title}</b>
    <p className="text-secondary">
        {genres?.map((item, key) => (
            <span>{genres.length - 1 === key ? item : `${item},`}</span>
        ))}
    </p>
    <Link to={`/detail/${slug}`}>
    <button type="button" className="button-cls w-100 mt-3">Details</button>
    </Link>
</div>
  )
}

export default Moviecomp