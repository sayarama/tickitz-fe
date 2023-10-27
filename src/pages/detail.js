import react from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import "../style/App.css"

function Detail() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [detailMovie, setDetailMovie] = react.useState(null);
    const [listCinemas, setListCinemas] = react.useState([]);
    const [dateMovie, setDateMovie] = react.useState(null);
    const [timeMovie, setTimeMovie] = react.useState(null);


    // lifecycle
    
    return (
        <div id="detail-page">
            {/* Start Header */}
            <header className="container pt-4 pb-4">
                {/* Navigation Bar */}
                <Navbar />

                {detailMovie === null ? (
                    <>
                        {/* Loading bar */}
                        <div className="text-center mt-10 loading-bar">
                            <div class="lds-dual-ring"></div>
                            <p>Loading...</p>
                        </div>
                    </>
                ) : null}
            </header>
            {/* End Header */}

            {detailMovie !== null ? (
                <>
                    {/* Start Content */}
                    <section id="content_detail" className="container mt-4 mb-4">
                        <div className="d-flex mobile-detail mb-10 gap-5">
                            <div className="border-poster" data-aos="fade-left">
                                <img
                                    className="detail-poster"
                                    src={detailMovie.poster}
                                    alt="movie poster"
                                />
                            </div>
                            <div className="col-md-8 col-sm-12">
                                <h2 data-aos="fade-up">{detailMovie.title}</h2>
                                <p data-aos="fade-up" className="genres">
                                    {detailMovie.genres.map((item, key) => (
                                        <span>
                                            {detailMovie.genres.length - 1 === key
                                                ? item
                                                : `${item}, `}
                                        </span>
                                    ))}
                                </p>
                                <div className="row mt-5">
                                    <div className="col-md-3 col-sm-12">
                                        {/* realease date */}
                                        <div data-aos="fade-left" duration="200">
                                            <b className="text-muted ">Release date</b>
                                            <p>{detailMovie.release}</p>
                                        </div>
                                        {/* duration */}
                                        <div data-aos="fade-left" duration="400">
                                            <b className="text-muted mt-4">Duration</b>
                                            <p>{detailMovie.duration}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-9 col-sm-12">
                                        {/* directed by */}
                                        <div data-aos="fade-left" duration="600">
                                            <b className="text-muted directed-mobile ">Directed by</b>
                                            <p>{detailMovie.director}</p>
                                        </div>
                                        {/* casts */}
                                        <div data-aos="fade-left" duration="800">
                                            <b className="text-muted mt-4">Casts</b>
                                            <p>
                                                {detailMovie.cast.map((item, key) => (
                                                    <span>
                                                        {detailMovie.cast.length - 1 === key
                                                            ? item
                                                            : `${item}, `}
                                                    </span>
                                                ))}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <hr /> {/* hairline */}
                                <div data-aos="fade-up">
                                    {/* synopsis */}
                                    <h5>Synopsis</h5>
                                    <p className="synopsis-detail">{detailMovie.desc}</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* End Content */}
                </>
            ) : null}

<hr /> {/* hairline */}

            {/* Start Footer */}
            <Footer />
            {/* End Footer */}
        </div>
    )
}

export default Detail