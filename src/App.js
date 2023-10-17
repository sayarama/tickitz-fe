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
    </div>
  );
}

export default App;
