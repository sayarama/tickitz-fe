import "../style/App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import MovieComp from "../components/Movie.jsx";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import react from "react";
import axios from "axios";

AOS.init();

function home() {
    const date = new Date();
    const month = date.toLocaleDateString("default", { month: "long" });

    const [result, setResult] = react.useState([]);
    const [selectedMonth, setSelectedMonth] = react.useState(month.toLowerCase());

    // lifecycle
    react.useEffect(() => {
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

        <Navbar/>
        
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

            <Footer/>            
        </div>
  )
}

export default home