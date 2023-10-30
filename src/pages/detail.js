import react from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import "../style/App.css";

function Detail() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [detailMovie, setDetailMovie] = react.useState(null);
    const [listCinemas, setListCinemas] = react.useState([]);
    const [dateMovie, setDateMovie] = react.useState(null);
    const [timeMovie, setTimeMovie] = react.useState(null);

    // lifecycle
    const handleGetApi = async () => {
        try {
            // MovieDetail
            const requestDetail = await axios.get(
                `https://tickitz-be.onrender.com/aulia/movie/detail/${slug}`
            );

            if (requestDetail.data.data.length > 0) {
                setDetailMovie(requestDetail.data.data[0]);
            }

            // CinemaDetail
            const requestCinema = await axios.get(
                `https://tickitz-be.onrender.com/aulia/movie/${slug}/cinemas`
            );

            if (requestCinema.data.data.length > 0) {
                setListCinemas(requestCinema.data.data);
            }
        } catch (error) {
            console.log(`error : ${error}`);
        }
    };

    react.useEffect(() => {
        handleGetApi();
    }, []);
    return (
        <>
        <div id="detail-page">
            {/* Start Header */}
            <header className="container pt-4 mobile-detail">
                {/* Navigation Bar */}
                <Navbar />

                {detailMovie === null ? (
                    <>
                        {/* Loading bar */}
                        <div className="text-center mt-10 loading-bar">
                            <div className="spinner-border mb-2" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <p>Loading...</p>
                        </div>
                    </>
                ) : null}

                {/* End Header */}

                {detailMovie !== null ? (
                    <>
                        {/* Start Content */}
                        <section id="content_detail" className="container mt-4">
                            <div className="d-flex mobile-detail gap-5">
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
                                                <b className="text-muted directed-mobile">
                                                    Directed by
                                                </b>
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
            </header>

            {/* Cinema List */}
            {detailMovie !== null ? (
                <section className="container mb-5 mt-5 pt-5 pb-5" id="cinemas">
                    <h2 className="d-flex gap-3 justify-content-center mt-3">
                        Showtimes and Tickets
                    </h2>
                    <div className="d-flex gap-3 justify-content-center mt-3">
                        <div style={{ width: "260px" }}>
                            <input
                                type="date"
                                className="form-control"
                                onChange={(e) => setDateMovie(e.target.value)}
                            />
                        </div>
                        <select
                            className="form-select form-select-sm"
                            onChange={(e) => setTimeMovie(e.target.value)}
                            style={{ width: "260px" }}
                        >
                            <option selected>Select Time</option>
                            <option>10:00 WIB</option>
                            <option>13:00 WIB</option>
                            <option>16:00 WIB</option>
                            <option>19:00 WIB</option>
                        </select>
                    </div>
                    <div className="row mt-5">
                        {listCinemas.map((item) => (
                            <div className="col col-md-4">
                                <div className="cinema-card">
                                    {/* head content */}
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-evenly",
                                            gap: "40px",
                                            padding: "30px 30px 0px 30px",
                                        }}
                                    >
                                        <img
                                            src={item.logo}
                                            width="140px"
                                            height="50px"
                                            alt={item.name}
                                            style={{ objectFit: "contain" }}
                                        />

                                        <div>
                                            <h4>{item.name}</h4>
                                            <p
                                                style={{
                                                    fontSize: "12px",
                                                    color: "#6E7191",
                                                    margin: 0,
                                                }}
                                            >
                                                {item.address}
                                            </p>
                                        </div>
                                    </div>
                                    <hr />
                                    {/* bottom content */}
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            gap: "40px",
                                            padding: "0px 30px 20px 30px",
                                        }}
                                    >
                                        {item.movieStart.map((nestedItem) => (
                                            <p style={{ color: "#4E4B66", fontSize: "12px" }}>
                                                {nestedItem} WIB
                                            </p>
                                        ))}
                                    </div>

                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            padding: "0px 30px 0px 30px",
                                        }}
                                    >
                                        <p style={{ fontSize: "16px", color: "#6B6B6B" }}>Price</p>
                                        <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                                            Rp {item.priceDisplay}/seat
                                        </p>
                                    </div>

                                    <div
                                        className="d-grid"
                                        style={{ padding: "0px 30px 30px 30px" }}
                                    >
                                        <button
                                            className={
                                                dateMovie && timeMovie
                                                    ? "btn btn-primary"
                                                    : "btn btn-secondary"
                                            }
                                            onClick={() => {
                                                if (dateMovie && timeMovie)
                                                    navigate(`/choose-seat/${slug}`, {
                                                        state: {
                                                            dateMovie,
                                                            timeMovie,
                                                            cinemaId: item.id,
                                                            movieTitle: detailMovie.title,
                                                            priceDisplay: item.priceDisplay,
                                                            price: item.price,
                                                            cinemaName: item.name,
                                                            cinemaLogo: item.logo,
                                                        },
                                                    });
                                            }}
                                            disabled={!dateMovie || !timeMovie}
                                        >
                                            Book now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            ) : null}
            {/* Cinema End */}


        </div>
        <Footer/>
        </>
        
    );
}

export default Detail;
