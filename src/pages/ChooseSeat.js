import React from "react";
import '../style/Seat.css'
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import axios from "axios";
import moment from "moment/moment";
import RowSeat from "../components/RowSeat";
import RowSeatNumber from "../components/RowSeatNumber";
import { useParams, useLocation, useNavigate } from "react-router-dom";


function ChooseSeat() {
    const {
        state: {
            dateMovie,
            timeMovie,
            movieTitle,
            priceDisplay,
            price,
            cinemaName,
            cinemaLogo,
            cinemaId,
        },
    } = useLocation();
    const { slug } = useParams();
    const navigate = useNavigate();
    const [selectedSeat, setSelectedSeat] = React.useState([]);
    const [bookedSeat, setBookedSeat] = React.useState([]);
    const [selectedDate, setSelectedDate] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);

    const handleAvailableSeat = async () => {
        try {
            const formatDate = moment(dateMovie).format("dddd, DD MMMM YYYY");
            const requestSeat = await axios.post(
                `https://tickitz-be.onrender.com/aulia/movie/${slug}/seat`,
                {
                    startMovie: `${formatDate} at ${timeMovie}`,
                    cinemaId: cinemaId,
                }
            );

            const getBookedList = requestSeat?.data?.data?.booked ?? [];
            setSelectedDate(
                `${moment(dateMovie).format("ddd, DD MMM YYYY")} at ${timeMovie}`
            );
            setBookedSeat(getBookedList);
        } catch (error) { }
    };

    const handleCheckout = async () => {
        try {
            setIsLoading(true);
            // HIT API BOOKING SEAT
            const formatDate = moment(dateMovie).format("dddd, DD MMMM YYYY");
            const completeDate = `${formatDate} at ${timeMovie}`;
            const requestBooking = await axios.post(
                `https://pijar-camp-batch15-tickitz.cyclic.app/aulia/ticket/seat`,
                {
                    movieSlug: slug,
                    cinemaId: cinemaId, // 1, 3, 3
                    seat: selectedSeat,
                    startMovie: completeDate,
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );

            if (requestBooking.data.data.paymentId) {
                const requestPayment = await axios.patch(
                    `https://pijar-camp-batch15-tickitz.cyclic.app/aulia/ticket/purchase/${requestBooking.data.data.paymentId}`,
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                    }
                );

                if (requestPayment.data.data.redirect_url) {
                    window.location.href = requestPayment.data.data.redirect_url;
                }
            }

            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
    };

    React.useEffect(() => {
        // handle hanya yang sudah login aja
        if (!localStorage.getItem("token") && !localStorage.getItem("profile")) {
            if (window.confirm("Please Login First!!!")) {
                navigate("/");
            }
        }

        handleAvailableSeat();
    }, []);

    return (
        <div id="choose_seat_page">
            {/* Navbar */}
            <div className="container py-4">
                <Navbar />
            </div>
            {/* Content */}
            <div className="pt-5" style={{ background: "#F5F6F8" }}>
                <div className="container">
                    <div className="row">
                        <div className="col col-md-8">
                            <section id="content">
                                {/* Movie Selected */}
                                <h2
                                    className="mb-3"
                                    style={{ fontSize: "24px", fontWeight: "bolder" }}
                                >
                                    Movie Selected
                                </h2>
                                <div
                                    style={{
                                        backgroundColor: "#fff",
                                        borderRadius: "10px",
                                        padding: "20px",
                                        marginBottom: "30px",
                                    }}
                                >
                                    <h3 style={{ fontSize: "24px" }}>{movieTitle}</h3>
                                </div>

                                {/* Choose Your Seat */}
                                <h2
                                    className="mb-3"
                                    style={{ fontSize: "24px", fontWeight: "bolder" }}
                                >
                                    Choose Your Seat
                                </h2>
                                <div
                                    className="choose-box"
                                >
                                    {/* screen */}
                                    <p className="text-center" style={{ marginLeft: "10%" }}>
                                        Screen
                                    </p>
                                    <div
                                        style={{
                                            backgroundColor: "#D6D8E7",
                                            width: "90%",
                                            height: "25px",
                                            borderRadius: "10px",
                                            marginLeft: "10%",
                                        }}
                                    />

                                    {/* row seat a */}
                                    <RowSeat
                                        position="A"
                                        selectedSeat={selectedSeat}
                                        setSelectedSeat={(e) => setSelectedSeat(e)}
                                        bookedSeat={bookedSeat}
                                    />

                                    {/* row seat b */}
                                    <RowSeat
                                        position="B"
                                        selectedSeat={selectedSeat}
                                        setSelectedSeat={(e) => setSelectedSeat(e)}
                                        bookedSeat={bookedSeat}
                                    />

                                    {/* row seat c */}
                                    <RowSeat
                                        position="C"
                                        selectedSeat={selectedSeat}
                                        setSelectedSeat={(e) => setSelectedSeat(e)}
                                        bookedSeat={bookedSeat}
                                    />

                                    {/* row seat d */}
                                    <RowSeat
                                        position="D"
                                        selectedSeat={selectedSeat}
                                        setSelectedSeat={(e) => setSelectedSeat(e)}
                                        bookedSeat={bookedSeat}
                                    />

                                    {/* row seat e */}
                                    <RowSeat
                                        position="E"
                                        selectedSeat={selectedSeat}
                                        setSelectedSeat={(e) => setSelectedSeat(e)}
                                        bookedSeat={bookedSeat}
                                    />

                                    {/* row seat f */}
                                    <RowSeat
                                        position="F"
                                        selectedSeat={selectedSeat}
                                        setSelectedSeat={(e) => setSelectedSeat(e)}
                                        bookedSeat={bookedSeat}
                                    />

                                    {/* row seat g */}
                                    <RowSeat
                                        position="G"
                                        selectedSeat={selectedSeat}
                                        setSelectedSeat={(e) => setSelectedSeat(e)}
                                        bookedSeat={bookedSeat}
                                    />

                                    {/* row seat number */}
                                    <RowSeatNumber />
                                </div>
                            </section>
                        </div>
                        <div className="col col-md-4 mb-5">
                            <h2
                                className="mb-3"
                                style={{ fontSize: "24px", fontWeight: "bolder" }}
                            >
                                Order Info
                            </h2>

                            <div
                                style={{
                                    backgroundColor: "#fff",
                                    borderRadius: "10px",
                                }}
                            >
                                <div className="p-3">
                                    <div className="d-flex justify-content-center w-100 mb-2">
                                        <img src={cinemaLogo} width="100px" alt="logo" />
                                    </div>
                                    <h5 className="text-center mb-5">{cinemaName}</h5>

                                    <div className="d-flex justify-content-between">
                                        <p>Movie selected</p>
                                        <p
                                            className="single-text"
                                            style={{ fontWeight: "bold", maxWidth: "250px" }}
                                        >
                                            {movieTitle}
                                        </p>
                                    </div>

                                    <div className="d-flex justify-content-between">
                                        <p>Time & Date</p>
                                        <p
                                            className="single-text"
                                            style={{ fontWeight: "bold", maxWidth: "250px" }}
                                        >
                                            {selectedDate}
                                        </p>
                                    </div>

                                    <div className="d-flex justify-content-between">
                                        <p>One ticket price</p>
                                        <p
                                            className="single-text"
                                            style={{ fontWeight: "bold", maxWidth: "250px" }}
                                        >
                                            Rp {priceDisplay}
                                        </p>
                                    </div>

                                    <div className="d-flex justify-content-between">
                                        <p>Seat choosed</p>
                                        <p
                                            className="single-text"
                                            style={{ fontWeight: "bold", maxWidth: "250px" }}
                                        >
                                            {selectedSeat.map((item) => `${item.replace("_", "")}, `)}
                                        </p>
                                    </div>
                                </div>

                                <hr />

                                <div
                                    className="d-flex p-3 justify-content-between"
                                    
                                >
                                    <p style={{ fontWeight: "bold" }}>Total Payment</p>
                                    <p
                                        className="single-text text-primary"
                                        style={{ fontWeight: "bold" }}
                                    >
                                        Rp {price * selectedSeat.length}
                                    </p>
                                </div>
                            </div>

                            {/* Button checkout */}
                            <div className="d-flex justify-content-between mt-3">
                                <button
                                    className="btn btn-outline-primary"
                                    onClick={() => {
                                        navigate(-1);
                                    }}
                                >
                                    Change your movie
                                </button>
                                <button
                                    className={
                                        isLoading || selectedSeat.length === 0
                                            ? "btn btn-secondary px-4"
                                            : "btn btn-primary px-4"
                                    }
                                    onClick={handleCheckout}
                                    disabled={isLoading || selectedSeat.length === 0}
                                >
                                    {isLoading ? "Loading..." : "Checkout now"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ChooseSeat;
