import React from 'react';

import p4 from '../assets/images/background/pattern-4.png';
import i1 from '../assets/images/icons/icon-1.png';
import i2 from '../assets/images/icons/icon-2.png';
import i4 from '../assets/images/icons/icon-4.png';

const SectionOurServices = () => {
    return (
        <section className="services-section-two">
            <div className="image-layer" style={{"backgroundImage":"url(" + p4 + ")"}}></div>
            <div className="section-icons">
                {/* <!-- Icon One --> */}
                <div className="icon-one" style={{"backgroundImage":"url(" + i1 + ")"}}></div>
                {/* <!-- Icon Two --> */}
                <div className="icon-two" style={{"backgroundImage":"url(" + i2 + ")"}}></div>
                {/* <!-- Icon Three --> */}
                <div className="icon-three" style={{"backgroundImage":"url(" + i4 + ")"}}></div>
            </div>

            <div className="auto-container">
                {/* <!-- Sec Title --> */}
                <div className="sec-title">
                    <div className="title">Our Services</div>
                    <div className="separator"><span></span></div>
                    <h2>We Are Providing <br /> Digital Services</h2>
                </div>
                <div className="inner-container">
                    <div className="row clearfix">

                        {/* <!-- Service Block Two --> */}
                        <div className="service-block-two col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInLeft animated" data-wow-delay="0ms" data-wow-duration="1500ms" >
                                <div className="shape-one"></div>
                                <div className="shape-two"></div>
                                <div className="shape-three"></div>
                                <div className="icon-box">
                                    <span className="icon flaticon-web-design-1"></span>
                                </div>
                                <h3><a href="services.html">Web Develpment</a></h3>
                                <div className="text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.</div>
                            </div>
                        </div>

                        {/* <!-- Service Block Two --> */}
                        <div className="service-block-two col-lg-6 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInLeft animated" data-wow-delay="0ms" data-wow-duration="1500ms" >
                                <div className="shape-one"></div>
                                <div className="shape-two"></div>
                                <div className="shape-three"></div>
                                <div className="icon-box">
                                    <span className="icon flaticon-profits"></span>
                                </div>
                                <h3><a href="services.html">Strategy &amp; Planning</a></h3>
                                <div className="text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.</div>
                            </div>
                        </div>

                        {/* <!-- Service Block Two --> */}
                        <div className="service-block-two col-lg-6 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInLeft animated" data-wow-delay="0ms" data-wow-duration="1500ms" >
                                <div className="shape-one"></div>
                                <div className="shape-two"></div>
                                <div className="shape-three"></div>
                                <div className="icon-box">
                                    <span className="icon flaticon-data"></span>
                                </div>
                                <h3><a href="services.html">Marketing Research</a></h3>
                                <div className="text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.</div>
                            </div>
                        </div>

                        {/* <!-- Service Block Two --> */}
                        <div className="service-block-two col-lg-6 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInLeft animated" data-wow-delay="0ms" data-wow-duration="1500ms" >
                                <div className="shape-one"></div>
                                <div className="shape-two"></div>
                                <div className="shape-three"></div>
                                <div className="icon-box">
                                    <span className="icon flaticon-shopping-cart-3"></span>
                                </div>
                                <h3><a href="services.html">Growth Tracking</a></h3>
                                <div className="text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.</div>
                            </div>
                        </div>

                        {/* <!-- Service Block Two --> */}
                        <div className="service-block-two col-lg-6 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInLeft animated" data-wow-delay="0ms" data-wow-duration="1500ms" >
                                <div className="shape-one"></div>
                                <div className="shape-two"></div>
                                <div className="shape-three"></div>
                                <div className="icon-box">
                                    <span className="icon flaticon-stats"></span>
                                </div>
                                <h3><a href="services.html">Enterprise Consulting</a></h3>
                                <div className="text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionOurServices;