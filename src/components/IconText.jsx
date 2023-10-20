import React from 'react'

function IconText(props) {
    const {icon, text} = props
  return (
    <div className="d-flex align-content-center">
    <img
        src={icon}
        alt="Social Media"
    />
    <a href="#">{text}</a>
</div>
  )
}

export default IconText