import React from 'react'

function movie(props) {
    const {poster, title, genres} = props
  return (
    <div data-aos="fade-up" data-aos-duration="500" className="text-center d-grid hover-bg padding-mobile">
                    <img src="/images/Poster/Rectangle 119-1.png" alt="poster" />
                    <p className="mt-3">Black Widow</p>
                    <p className="text-secondary">Action, Adventure, Sci-Fi</p>
                    <button type="button" className="button-cls">Details</button>
                </div>
  )
}

export default movie