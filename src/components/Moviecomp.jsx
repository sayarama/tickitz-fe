import React from 'react'
import { Link } from 'react-router-dom'

function Moviecomp(props) {
    const {poster, title, genres} = props
  return (
    <div data-aos="fade-up" data-aos-duration="500" className="text-center d-grid hover-bg padding-mobile">
    <img width={"50%"} className='movie-poster' src={poster} alt="poster" />
    <p className="mt-3">{title}</p>
    <p className="text-secondary">
        {genres?.map((item, key) => (
            <span>{genres.length - 1 === key ? item : `${item},`}</span>
        ))}
    </p>
    <Link to={`/detail/${title.toLowerCase().split(" ").join("-")}`}>
    <button type="button" className="button-cls w-100 mt-3">Details</button>
    </Link>
</div>
  )
}

export default Moviecomp