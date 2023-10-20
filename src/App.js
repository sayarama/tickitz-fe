import "./style/App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import MovieComp from "./components/movie.jsx";
import React from "react";
import axios from "axios";

AOS.init();

function App() {
    // mounting
    const date = new Date();
    const month = date.toLocaleDateString("default", { month: "long" });

    const [result, setResult] = React.useState([]);
    const [selectedMonth, setSelectedMonth] = React.useState(month.toLowerCase());

    // lifecycle
    React.useEffect(() => {
        axios
            .get("http://localhost:3000/api/movie.json")
            .then((response) => {
                if (response.status === 200) {
                    setResult(response.data);
                }
            })
            .catch((error) => console.log(`error: ${error}`));
    });
    return (
        <div className="app">
            {/* <!-- Header Navigation --> */}
            <header className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <img
                            src="/images/Logo/Vector.png"
                            className="navbar-brand"
                            alt="Logo"
                        />
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

            {/* <!-- Hero Section --> */}
            <nav className="container">
                <div className="row hero-mobile align-items-center mt-10 mb-10">
                    <div data-aos="fade-in" data-aos-duration="1000" className="col-lg-6">
                        <p className="text-secondary fs-4">Nearest Cinema, Newest Movie</p>
                        <h1 className="text-primary fs-big">Find Out Now!</h1>
                    </div>
                    <div
                        data-aos="fade-left"
                        data-aos-duration="1500"
                        className="col-lg-6 text-center"
                    >
                        <img
                            className="w-75"
                            src="/images/Hero Section/banner.png"
                            alt="Banner"
                        />
                    </div>
                </div>
            </nav>
            {/* <!-- End Hero Section --> */}

            {/* <!-- Movie Section --> */}
            <section className="bg-section p-5">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="fs-4 bold text-primary">Now Showing</p>
                        <p className="text-primary">View All</p>
                    </div>
                    <div className="d-flex mt-6 mb-5 justify-content-between scroll-card gap-5">
                        {result
                                .filter((item) => item.isShowing === false || true)
                                .slice(0, 5)
                                .map((item) => (
                                    <MovieComp
                                        poster={item.poster}
                                        title={item.title}
                                        genres={item.genres}
                                        desc={item.desc}
                                    />
                                ))}
                    </div>
                </div>
            </section>
            {/* <!-- End Movie Section --> */}

            {/* <!-- Upcoming Movie Section --> */}
            <section className="p-5 upcoming-mobile">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="fs-4 bold">Upcoming Movies</p>
                        <p className="text-primary">View All</p>
                    </div>
                    {/* <!-- Start Months --> */}
                    <div className="d-flex gap-2 mt-5 justify-content-between scroll-card p-4">
                        {[
                            "January",
                            "February",
                            "March",
                            "April",
                            "May",
                            "June",
                            "July",
                            "August",
                            "September",
                            "October",
                            "November",
                            "December",
                        ].map((item) => (
                            <button
                                className={
                                    selectedMonth === item.toLowerCase()
                                        ? "btn btn-primary px-4"
                                        : "btn btn-details px-4"
                                }
                                onClick={() => {
                                    setSelectedMonth(item.toLowerCase());
                                }}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                    {/* <!-- End Months --> */}

                    <div className="d-flex mt-6 mb-5 justify-content-between scroll-card gap-5 p-4">
                            {result
                                .filter((item) => item.isShowing === false || true)
                                .filter((item) => item.showingMonth === selectedMonth)
                                .slice(0, 5)
                                .map((item) => (
                                    <MovieComp
                                        poster={item.poster}
                                        title={item.title}
                                        genres={item.genres}
                                        desc={item.desc}
                                    />
                                ))}
                        {/* Movie Not Found */}
                        {result
                            .filter((item) => item.isShowing === false || true)
                            .filter((item) => item.showingMonth === selectedMonth).length ===
                            0 ? (
                            <div className="text-center">
                                <img
                                    style={{
                                        width: "120px",
                                    }}
                                    src="/image/icons/not-found.png"
                                    alt="not found"
                                />
                                <h4 className="mt-3">Movie Not Found</h4>
                            </div>
                        ) : null}
                    </div>
                </div>
            </section>
            {/* <!-- End Movie Section --> */}

            {/* <!-- CTA --> */}
            <section>
                <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="container mt-10 mb-10 text-center shadow-lg p-5 rounded-2"
                >
                    <p className="text-secondary">Be the vanguard of the</p>
                    <h2 className="text-primary">Moviegoers</h2>
                    <div className="mt-5 mb-5 d-flex justify-content-center gap-3">
                        <input className="p-2" type="text" placeholder="Type your email" />
                        <button className="btn btn-primary px-4">Join Now</button>
                    </div>
                    <p className="text-secondary">
                        By joining you as a Tickitz member. <br />
                        we will always send you the latest updates via email
                    </p>
                </div>
            </section>
            {/* <!-- End CTA --> */}

            {/* <!-- Footer --> */}
            <footer className="container mb-3 footer-padding">
                <div className="d-flex footer-mobile gap-5 justify-content-around text-center">
                    <div className="d-flex gap-2 justify-content-center flex-column">
                        <img src="./images/Logo/Tickitz 2.svg" alt="Tickitz Logo" />
                        <p className="text-secondary">
                            Stop waiting in line. Buy tickets <br />
                            conveniently, watch movies quitely.
                        </p>
                    </div>
                    <div className="d-flex gap-2 justify-content-center flex-column">
                        <p className="fs-5">
                            <b>Explore</b>
                        </p>
                        <a href="#">Home</a>
                        <a href="#">List Movie</a>
                    </div>
                    <div className="d-flex gap-2 justify-content-center flex-column">
                        <p className="fs-5">
                            <b>Our Sponsor</b>
                        </p>
                        <img
                            className="sponsor-img"
                            src="/images/Company/Vector.png"
                            alt="Sponsor Logo"
                        />
                        <img
                            className="sponsor-img"
                            src="/images/Company/Vector-1.png"
                            alt="Sponsor Logo"
                        />
                        <img
                            className="sponsor-img"
                            src="/images/Company/Vector-2.png"
                            alt="Sponsor Logo"
                        />
                    </div>
                    <div className="d-flex gap-2 justify-content-center justify flex-column">
                        <p className="fs-5">
                            <b>Follow us</b>
                        </p>

                        <div className="d-flex align-content-center">
                            <img
                                src="/images/Icon/eva_facebook-outline.svg"
                                alt="Facebook Icon"
                            />
                            <a href="#">Tickitz Cinema id</a>
                        </div>
                        <div className="d-flex align-content-center">
                            <img
                                src="/images/Icon/bx_bxl-instagram.svg"
                                alt="Instagram Icom"
                            />
                            <a href="#">tickitz.id</a>
                        </div>
                        <div className="d-flex align-content-center">
                            <img
                                src="/images/Icon/eva_twitter-outline.svg"
                                alt="Twitter Icon"
                            />
                            <a href="#">tickitz.id</a>
                        </div>
                        <div className="d-flex align-content-center">
                            <img src="/images/Icon/feather_youtube.svg" alt="Youtube Icon" />
                            <a href="#">Tickitz Cinema id</a>
                        </div>
                    </div>
                </div>
            </footer>

            <footer className="text-center mt-5">
                © 2020 Tickitz. All Rights Reserved.
            </footer>
            {/* <!-- End Footer --> */}
        </div>
    );
}

export default App;
