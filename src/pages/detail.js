import react from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import "../style/App.css"

function Detail() {
    const { id } = useParams();
    const [detailMovie, setDetailMovie] = react.useState(null);

    // lifecycle
    react.useEffect(() => {
        setTimeout(() => {
            axios
                .get("http://localhost:3000/api/movie.json")
                .then((response) => {
                    if (response.status === 200) {
                        // search data from api and compare with id
                        setDetailMovie(
                            response.data.find(
                                (item) => item.title.toLowerCase().split(" ").join("-") === id
                            )
                        );
                    }
                })
                .catch((error) => console.log(`error: ${error}`));
        }, 1000);
    }, []);
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
                            <div className="border-poster">
                                <img
                                    className="detail-poster"
                                    src={detailMovie.poster}
                                    alt="movie poster"
                                />
                            </div>
                            <div className="col-md-8 col-sm-12">
                                <h2>{detailMovie.title}</h2>
                                <p className="genres">
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
                                        <div>
                                            <p className="text-muted ">Release date</p>
                                            <p>{detailMovie.release}</p>
                                        </div>
                                        {/* duration */}
                                        <div>
                                            <p className="text-muted mt-4">Duration</p>
                                            <p>{detailMovie.duration}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-9 col-sm-12">
                                        {/* directed by */}
                                        <div>
                                            <p className="text-muted directed-mobile ">Directed by</p>
                                            <p>{detailMovie.director}</p>
                                        </div>
                                        {/* casts */}
                                        <div>
                                            <p className="text-muted mt-4">Casts</p>
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
                                <div>
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