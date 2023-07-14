import React from 'react';
import contact_1 from '../assets/images/resource/contact-1.jpg';
import { _BannerTop } from "./";

const PageContact = (props) => {
    return (
        <>
            <_BannerTop title={props.title} /> 
            {/* <!-- Contact Section --> */}
            <section className="contact-page-section">
                <div className="auto-container">
                    {/* <!-- Sec Title --> */}
                    <div className="sec-title centered">
                        <div className="title">We Help You</div>
                        <div className="separator"><span></span></div>
                        <h2>Contact Us Now</h2>
                    </div>

                    {/* <!-- Contact Form --> */}
                    <div className="contact-form">
                        <form method="post" action="sendemail.php" id="contact-form">
                            <div className="row clearfix">

                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <input type="text" name="username" placeholder="Name" required />
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <input type="email" name="email" placeholder="Email" required />
                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <input type="text" name="subject" placeholder="Subject" required />
                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <textarea name="message" placeholder="Message"></textarea>
                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12 text-center form-group">
                                    <button className="theme-btn btn-style-four" type="submit" name="submit-form"><span className="txt">Send Now</span></button>
                                </div>

                            </div>
                        </form>

                    </div>

                </div>
            </section>
            {/* <!-- End Contact Section --> */}

            {/* <!-- Map Contact Section --> */}
            <section className="map-contact-page-section">
                <div className="auto-container">
                    {/* <!-- Title Box --> */}
                    <div className="title-box">
                        <h2>Our Support Guys or <br /> Make Appointment With Our Consultan</h2>
                        <div className="text">Please contact us using the information below. For additional information on our management consulting services, please visit <br /> the appropriate page on our site.</div>
                    </div>

                    <div className="map-outer">
                        <div className="map-canvas">
                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.27990907297!2d-74.25987368715494!3d40.697670064588735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1599163067611!5m2!1sen!2s" height="500" ></iframe> */}
                        </div>
                    </div>

                </div>
            </section>
            {/* <!-- End Map Contact Section --> */}

            {/* <!-- Contact Info Section --> */}
            <section className="contact-info-section">
                <div className="auto-container">
                    <div className="row clearfix">

                        <div className="column col-lg-3 col-md-6 col-sm-12">
                            <div className="image">
                                <img src={contact_1} alt="" />
                            </div>
                        </div>

                        <div className="column col-lg-3 col-md-6 col-sm-12">
                            <h3>United Kingdom</h3>
                            <ul>
                                <li>49488 Avenida Obregon, La Quinta, CA 92253</li>
                                <li>+1-(281)-813 926 <br /> +1-(281)-813 612</li>
                                <li>support@ocean.com.uk</li>
                            </ul>
                        </div>

                        <div className="column col-lg-3 col-md-6 col-sm-12">
                            <h3>Australia</h3>
                            <ul>
                                <li>13/1 Dixon Street, Sydney <br /> NSW 2000</li>
                                <li>+1-(281)-813 926 <br /> +1-(281)-813 612</li>
                                <li>support@ocean.com.uk</li>
                            </ul>
                        </div>

                        <div className="column col-lg-3 col-md-6 col-sm-12">
                            <h3>Netherlands</h3>
                            <ul>
                                <li>Nieuwe Leliestraat 27-HS <br /> 101J Amsterdam</li>
                                <li>+1-(281)-813 926 <br /> +1-(281)-813 612</li>
                                <li>support@ocean.com.uk</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>
            {/* <!-- End Contact Info Section --> */}
        </>
    );
};

export default PageContact;