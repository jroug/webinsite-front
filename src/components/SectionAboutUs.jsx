import React from 'react';

import i1 from '../assets/images/icons/icon-1.png';
import i2 from '../assets/images/icons/icon-2.png';
import i4 from '../assets/images/icons/icon-4.png';
import signature from '../assets/images/icons/signature.png';
import author1 from '../assets/images/resource/author-1.png';
import about1 from '../assets/images/resource/about-1.png';


const SectioAboutUs = () => {
    return (
        <section className="about-section style-two">
            <div className="section-icons">
                {/* <!-- Icon One --> */}
                <div className="icon-one" style={{"backgroundImage":"url(" + i1 + ")"}}></div>
                {/* <!-- Icon Two --> */}
                <div className="icon-two" style={{"backgroundImage":"url(" + i2 + ")"}}></div>
                {/* <!-- Icon Three --> */}
                <div className="icon-three" style={{"backgroundImage":"url(" + i4 + ")"}}></div>
            </div>
            <div className="auto-container">
                <div className="row clearfix">
                    {/* <!-- Title Column --> */}
                    <div className="title-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            {/* <!-- Sec Title --> */}
                            <div className="sec-title">
                                <div className="title">About the Agency</div>
                                <div className="separator"><span></span></div>
                                <h2>Insights and Resources to <br/> help drive your Business <br/> Forward Faster.</h2>
                            </div>
                            <div className="text">we build results-oriented brand strategies and continually refine your canpaigns for the greatest outcome. from full-scale digital marketing and advertising strategy, right through to our precise execution and reporting that’s right,we’ve got you covered</div>
                            {/* <!-- Author Box --> */}
                            <div className="author-box">
                                <div className="box-inner">
                                    <div className="image"><img src={author1} alt="" /></div>
                                    <h3>Dntuli Frek</h3>
                                    <div className="designation">Founden &amp; CEO</div>
                                </div>
                            </div>
                            <div className="signature"><img src={signature} alt="" /></div>
                        </div>
                    </div>

                    {/* <!-- Image Column --> */}
                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column wow fadeInRight animated" data-wow-delay="0ms" data-wow-duration="1500ms" style={{"visibility":"visible;","animation-duration":"1500ms;","animation-delay":"0ms;","animationName":"fadeInRight;"}}>
                            <div className="image">
                                <img src={about1} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SectioAboutUs;