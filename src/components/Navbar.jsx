import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [profile, setProfile] = React.useState(JSON.parse(localStorage.getItem("profile"))
    );

    const handleLogout = () => {
        localStorage.removeItem('profile');
        window.location.reload();
    }


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
                                    <Link className='nav-link' to= "/">
                                        <p>Home</p>
                                    </Link>
                                </li>
                                <li className="nav-item nav-text">
                                    <a className="nav-link" href="#">
                                        List Movie
                                    </a>
                                </li>
                            </ul>
                            {profile ? (
                                <div>
                                      <button className="btn btn-primary" style={{marginRight: "10px"}} onClick={handleLogout}>Logout</button>
                                     <img src={profile?.photo} width="50px" height="50px" style={{background: "#e1e1e1", borderRadius: '50%'}}/>
                                   
                                </div>
                            ) : (
                                <Link to="/register">
                            <button className="btn btn-primary" type="submit">
                                Sign Up
                            </button>
                            </Link>
                            )}
                        </div>
                    </div>
                </nav>
            </header>
            {/* <!-- End Header Navigation --> */}
    </div>
  )
}

export default Navbar