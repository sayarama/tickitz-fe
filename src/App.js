import './App.css';

function App() {
  return (
    <div className='app'>
       {/* <!-- Header Navigation --> */}
    <header class="container">
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <img src="./images/Logo/Vector.png" class="navbar-brand" alt="Logo" />
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse text-center " id="navbarTogglerDemo02">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item nav-text">
                            <a class="nav-link"  href="#">Home</a>
                        </li>
                        <li class="nav-item nav-text">
                            <a class="nav-link" href="#">List Movie</a>
                        </li>
                        
                    </ul>
                        <button class="btn btn-primary" type="submit">Sign Up</button>
                </div>
            </div>
        </nav>
    </header>
    {/* <!-- End Header Navigation --> */}

    {/* <!-- Hero Section --> */}
    <nav class="container">
        <div class="row hero-mobile align-items-center mt-10 mb-10">
            <div data-aos="fade-in" data-aos-duration="1000" class="col-lg-6">
                <p class="text-secondary fs-4">Nearest Cinema, Newest Movie</p>
                <h1 class="text-primary fs-big">Find Out Now!</h1>
            </div>
            <div data-aos="fade-left" data-aos-duration="1500" class="col-lg-6 text-center">
                <img class="w-75" src="./images/Hero Section/banner.png" alt="Banner" />
            </div>
        </div>
    </nav>
    {/* <!-- End Hero Section --> */}

    {/* <!-- Movie Section --> */}
    <section class="bg-section p-5">
        <div class="container">
            <div class="d-flex justify-content-between align-items-center">
                <p class="fs-4 bold text-primary">Now Showing</p>
                <p class="text-primary">View All</p>
            </div>
            <div class="d-flex mt-6 mb-5 justify-content-between scroll-card gap-5">
                <div data-aos="fade-up" data-aos-duration="500" class="text-center d-grid hover-bg padding-mobile">
                    <img src="./images/Poster/Rectangle 119-1.png" alt="poster" />
                    <p class="mt-3">Black Widow</p>
                    <p class="text-secondary">Action, Adventure, Sci-Fi</p>
                    <button type="button" class="button-cls">Details</button>
                </div>
                <div data-aos="fade-up" data-aos-duration="600" class="text-center d-grid hover-bg">
                    <img src="./images/Poster/Rectangle 119-2.png" alt="poster" />
                    <p class="mt-3">Black Widow</p>
                    <p class="text-secondary">Action, Adventure, Sci-Fi</p>
                    <button type="button" class="button-cls">Details</button>
                </div>
                <div data-aos="fade-up" data-aos-duration="700" class="text-center d-grid hover-bg">
                    <img src="./images/Poster/Rectangle 119.png" alt="poster" />
                    <p class="mt-3">Black Widow</p>
                    <p class="text-secondary">Action, Adventure, Sci-Fi</p>
                    <button type="button" class="button-cls">Details</button>
                </div>
                <div data-aos="fade-up" data-aos-duration="800" class="text-center d-grid hover-bg">
                    <img src="./images/Poster/Rectangle 139-1.png" alt="poster" />
                    <p class="mt-3">Black Widow</p>
                    <p class="text-secondary">Action, Adventure, Sci-Fi</p>
                    <button type="button" class="button-cls">Details</button>
                </div>
                <div data-aos="fade-up" data-aos-duration="900" class="text-center d-grid hover-bg">
                    <img src="./images/Poster/Rectangle 139.png" alt="poster" />
                    <p class="mt-3">Black Widow</p>
                    <p class="text-secondary">Action, Adventure, Sci-Fi</p>
                    <button type="button" class="button-cls mt-3">Details</button>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- End Movie Section --> */}

    {/* <!-- Upcoming Movie Section --> */}
    <section class="p-5 upcoming-mobile">
        <div class="container">
            <div class="d-flex justify-content-between align-items-center">
                <p class="fs-4 bold">Upcoming Movies</p>
                <p class="text-primary">View All</p>
            </div>
            {/* <!-- Start Months --> */}
            <div class="d-flex gap-2 mt-5 justify-content-between scroll-card p-4">
                <button type="button" class="button-months">Jan</button>
                <button type="button" class="button-months">Feb</button>
                <button type="button" class="button-months">Mar</button>
                <button type="button" class="button-months">Apr</button>
                <button type="button" class="button-months">May</button>
                <button type="button" class="button-months">Jun</button>
                <button type="button" class="button-months">Jul</button>
                <button type="button" class="button-months">Aug</button>
                <button type="button" class="button-months">Sep</button>
                <button type="button" class="button-months active">Oct</button>
                <button type="button" class="button-months">Nov</button>
                <button type="button" class="button-months">Dec</button>
            </div>
            {/* <!-- End Monts --> */}

            <div class="d-flex mt-6 mb-5 justify-content-between scroll-card gap-5 p-4">
                <div data-aos="fade-up" data-aos-duration="500" class="text-center d-grid">
                    <img src="./images/Poster/Rectangle 119-1.png" alt="poster" />
                    <p class="mt-3">Black Widow</p>
                    <p class="text-secondary">Action, Adventure, Sci-Fi</p>
                    <button type="button" class="button-cls">Details</button>
                </div>
                <div data-aos="fade-up" data-aos-duration="600" class="text-center d-grid">
                    <img src="./images/Poster/Rectangle 119-2.png" alt="poster" />
                    <p class="mt-3">Black Widow</p>
                    <p class="text-secondary">Action, Adventure, Sci-Fi</p>
                    <button type="button" class="button-cls">Details</button>
                </div>
                <div data-aos="fade-up" data-aos-duration="700" class="text-center d-grid">
                    <img src="./images/Poster/Rectangle 119.png" alt="poster" />
                    <p class="mt-3">Black Widow</p>
                    <p class="text-secondary">Action, Adventure, Sci-Fi</p>
                    <button type="button" class="button-cls">Details</button>
                </div>
                <div data-aos="fade-up" data-aos-duration="800" class="text-center d-grid">
                    <img src="./images/Poster/Rectangle 139-1.png" alt="poster" />
                    <p class="mt-3">Black Widow</p>
                    <p class="text-secondary">Action, Adventure, Sci-Fi</p>
                    <button type="button" class="button-cls">Details</button>
                </div>
                <div data-aos="fade-up" data-aos-duration="900" class="text-center d-grid">
                    <img src="./images/Poster/Rectangle 139.png" alt="poster" />
                    <p class="mt-3">Black Widow</p>
                    <p class="text-secondary">Action, Adventure, Sci-Fi</p>
                    <button type="button" class="button-cls mt-3">Details</button>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- End Movie Section --> */}

    {/* <!-- CTA --> */}
    <section>
        <div data-aos="fade-up" data-aos-duration="1000"
            class="container mt-10 mb-10 text-center shadow-lg p-5 rounded-2">
            <p class="text-secondary">Be the vanguard of the</p>
            <h2 class="text-primary">Moviegoers</h2>
            <div class="mt-5 mb-5 d-flex justify-content-center gap-3">
                <input class="p-2" type="text" placeholder="Type your email" />
                <button class="btn btn-primary px-4">Join Now</button>
            </div>
            <p class="text-secondary">
                By joining you as a Tickitz member. <br />
                we will always send you the latest updates via email
            </p>
        </div>
    </section>
    {/* <!-- End CTA --> */}

    {/* <!-- Footer --> */}
    <footer class="container mb-3 footer-padding">
        <div class="d-flex footer-mobile gap-5 justify-content-around text-center">
            <div class="d-flex gap-2 justify-content-center flex-column">
                <img src="./images/Logo/Tickitz 2.svg" alt="Tickitz Logo" />
                <p class="text-secondary">
                    Stop waiting in line. Buy tickets <br />
                    conveniently, watch movies quitely.
                </p>
            </div>
            <div class="d-flex gap-2 justify-content-center flex-column">
                <p class="fs-5"><b>Explore</b></p>
                <a href="#">Home</a>
                <a href="#">List Movie</a>
            </div>
            <div class="d-flex gap-2 justify-content-center flex-column">
                <p class="fs-5"><b>Our Sponsor</b></p>
                <img class="sponsor-img" src="./images/Company/Vector.png" alt="Sponsor Logo" />
                <img class="sponsor-img" src="./images/Company/Vector-1.png" alt="Sponsor Logo" />
                <img class="sponsor-img" src="./images/Company/Vector-2.png" alt="Sponsor Logo" />
            </div>
            <div class="d-flex gap-2 justify-content-center justify flex-column">
                <p class="fs-5"><b>Follow us</b></p>

                <div class="d-flex align-content-center">
                    <img src="./images/Icon/eva_facebook-outline.svg" alt="" />
                    <a href="#">Tickitz Cinema id</a>
                </div>
                <div class="d-flex align-content-center">
                    <img src="./images/Icon/bx_bxl-instagram.svg" alt="" />
                    <a href="#">tickitz.id</a>
                </div>
                <div class="d-flex align-content-center">
                    <img src="./images/Icon/eva_twitter-outline.svg" alt="" />
                    <a href="#">tickitz.id</a>
                </div>
                <div class="d-flex align-content-center">
                    <img src="./images/Icon/feather_youtube.svg" alt="" />
                    <a href="#">Tickitz Cinema id</a>
                </div>
            </div>
        </div>
    </footer>

    <footer class="text-center mt-5">© 2020 Tickitz. All Rights Reserved.</footer>
    {/* <!-- End Footer --> */}

    </div>
  );
}

export default App;
