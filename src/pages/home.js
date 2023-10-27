import "../style/App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import react from "react";
import axios from "axios";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import MovieComp from "../components/Moviecomp";
AOS.init();

function home() {
    const date = new Date();
    const month = date.toLocaleDateString("default", { month: "short" });

    const [resultNowShowing, setResultNowShowing] = react.useState([]);
    const [resultUpcoming, setResultUpcoming] = react.useState([]);
    const [selectedMonth, setSelectedMonth] = react.useState(month.toLowerCase());

    // lifecycle
    const handleGetResponse = async () => {
        try {
            // ShowingData
            const nowShowing = await axios.get(
                "https://tickitz-be.onrender.com/aulia/movie/now-showing"
            );

            if (nowShowing.status === 200) {
                setResultNowShowing(nowShowing.data.data);
            }

            // UpcomingData
            const upcoming = await axios.get(
                "https://tickitz-be.onrender.com/aulia/movie/upcoming"
            );

            if (upcoming.status === 200) {
                setResultUpcoming(upcoming.data.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    react.useEffect(() => {
        handleGetResponse();
    }, []);

    return (
        <div className="app">
            <Navbar />

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
                        <img className="w-75" src="/images/Hero/banner.png" alt="Banner" />
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
                    <div className="d-flex mt-6 mb-5 justify-content-between scroll-card gap-3 p-4">
                        {resultNowShowing.slice(0, 5).map((item) => (
                            <MovieComp
                                poster={item.poster}
                                title={item.title}
                                genres={item.genres}
                                desc={item.desc}
                                slug={item.slug}
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
                    <div className="d-flex gap-2 mt-2 justify-content-between scroll-card p-4">
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

                    <div className="d-flex mb-5 justify-content-between scroll-card gap-3 p-4">
                        <div className="d-flex gap-3 justify-content-around mt-5 mt-10-mobile">
                            {resultUpcoming
                                .filter((item) => item.showingMonth === selectedMonth)
                                .slice(0, 5)
                                .map((item) => (
                                    <MovieComp
                                        poster={item.poster}
                                        title={item.title}
                                        genres={item.genres}
                                        desc={item.desc}
                                        slug={item.slug}
                                    />
                                ))}
                        </div>

                        {/* Movie Not Found */}
                        {resultUpcoming.filter(
                            (item) => item.showingMonth === selectedMonth
                        ).length === 0 ? (
                            <div className="d-flex align-items-center m-auto flex-column">
                                <img
                                    style={{
                                        width: "100px",
                                    }}
                                    src="/images/Icon/not-found.png"
                                    alt="Movie Not Found!!"
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
                    className="container mt-3 mb-10 text-center shadow-lg p-5 rounded-2"
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

            <Footer />
        </div>
    );
}

export default home;
