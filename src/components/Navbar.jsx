import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        {/* <!-- Header Navigation --> */}
        <header className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                       <Link to="/">
                       <img
                            src="/images/Logo/Vector.png"
                            className="navbar-brand"
                            alt="Logo"
                        />
                       </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo02"
                            aria-controls="navbarTogglerDemo02"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse text-center "
                            id="navbarTogglerDemo02"
                        >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item nav-text">
                                    <a className="nav-link" href="#">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item nav-text">
                                    <a className="nav-link" href="#">
                                        List Movie
                                    </a>
                                </li>
                            </ul>
                            <button className="btn btn-primary" type="submit">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
            {/* <!-- End Header Navigation --> */}
    </div>
  )
}

export default Navbar