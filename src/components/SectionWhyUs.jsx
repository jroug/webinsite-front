import React from 'react';

import i1 from '../assets/images/icons/icon-1.png';
import i2 from '../assets/images/icons/icon-2.png';
import p5 from '../assets/images/background/pattern-5.png';

const SectionWhyUs = () => {
    return (
        <section className="choose-section">
                {/* Section Icons */}
            <div className="section-icons">
                {/* Icon One */}
                <div className="icon-one" style={{"backgroundImage":"url(" + i2 + ")"}} ></div>
                {/* Icon Two */}
                <div className="icon-two" style={{"backgroundImage":"url(" + i1 + ")"}} ></div>
            </div>
            <div className="auto-container">
                <div className="row clearfix">

                    {/* Title Column */}
                    <div className="title-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            {/* Sec Title */}
                            <div className="sec-title">
                                <div className="title">Whu Choose Us</div>
                                <div className="separator"><span></span></div>
                                <h2>Get Benifits and <br /> Advantages Market Goal</h2>
                            </div>
                            <div className="bold-text">A Satisfied Customer is best for business</div>
                            <div className="text">The activity of buying or selling goods and services in all the countries of the world.</div>
                            <ul className="list-style-two">
                                <li>What is global market economy?</li>
                                <li>Why is the global market so important?</li>
                                <li>Which is the largest stock market in the world?</li>
                            </ul>
                            <a href="#" className="theme-btn btn-style-two"><span className="txt">Free Consultation</span></a>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="content-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            {/* Blocks Outer */}
                            <div className="blocks-outer">

                                {/* App Block */}
                                <div className="app-block">
                                    <div className="inner-box wow fadeInRight animated" data-wow-delay="0ms" data-wow-duration="1500ms" >
                                        <div className="content">
                                            <div className="icon-box">
                                                <span className="icon flaticon-dollar-symbol"></span>
                                            </div>
                                            <h3>Offerdable Price</h3>
                                            <div className="text">Lorem ipsum dolor sit amet, consectetur, sed do eiusmod incididunt aliqua.</div>
                                        </div>
                                    </div>
                                </div>

                                {/* App Block */}
                                <div className="app-block">
                                    <div className="inner-box wow fadeInRight animated" data-wow-delay="300ms" data-wow-duration="1500ms"  >
                                        <div className="content">
                                            <div className="icon-box">
                                                <span className="icon flaticon-music-headphones"></span>
                                            </div>
                                            <h3>Greate Support</h3>
                                            <div className="text">Lorem ipsum dolor sit amet, consectetur, sed do eiusmod incididunt aliqua.</div>
                                        </div>
                                    </div>
                                </div>

                                {/* App Block */}
                                <div className="app-block">
                                    <div className="inner-box wow fadeInRight animated" data-wow-delay="600ms" data-wow-duration="1500ms" >
                                        <div className="content">
                                            <div className="icon-box">
                                                <span className="icon flaticon-lock"></span>
                                            </div>
                                            <h3>Quick Access</h3>
                                            <div className="text">Lorem ipsum dolor sit amet, consectetur, sed do eiusmod incididunt aliqua.</div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
            {/* Pattern Layer */}
            <div className="pattern-layer" style={{"backgroundImage":"url(" + p5 + ")"}} ></div>
        </section>
    );
};

export default SectionWhyUs;