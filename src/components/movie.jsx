import React from 'react'

function movie(props) {
    const {poster, title, genres} = props
  return (
    <div data-aos="fade-up" data-aos-duration="500" className="text-center d-grid hover-bg padding-mobile">
                    <img src={poster} alt="poster" />
                    <p className="mt-3">{title}</p>
                    <p className="text-secondary">
                        {genres?.map((item, key) => (
                            <span>{genres.length - 1 === key ? item : `${item},`}</span>
                        ))}
                    </p>
                    <button type="button" className="button-cls">Details</button>
                </div>
  )
}

export default movie