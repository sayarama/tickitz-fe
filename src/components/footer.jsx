import React from 'react'
import IconText from './IconText'

function footer() {
  return (
    <div>
        {/* <!-- Footer --> */}
        <footer className="container mb-3 footer-padding">
                <div className="d-flex footer-mobile gap-5 justify-content-around text-center">
                    <div className="d-flex gap-2 justify-content-center flex-column">
                        <img src="../images/Logo/Tickitz 2.svg" alt="Tickitz Logo" />
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

                        <IconText
                            icon="/images/Icon/eva_facebook-outline.svg"
                            text="Tickitz Cinema id"
                        />
                         <IconText
                            icon="/images/Icon/bx_bxl-instagram.svg"
                            text="tickitz.id"
                        />
                         <IconText
                            icon="/images/Icon/eva_twitter-outline.svg"
                            text="tickitz.id"
                        />
                         <IconText
                            icon="/images/Icon/feather_youtube.svg"
                            text="Tickitz Cinema id"
                        />
                    </div>
                </div>
            </footer>

            <footer className="text-center mt-5">
                © 2020 Tickitz. All Rights Reserved.
            </footer>
            {/* <!-- End Footer --> */}
    </div>
  )
}

export default footer