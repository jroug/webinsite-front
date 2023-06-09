import React from 'react';
import Home_Hero from '../assets/images/01_Home_Hero.jpg';
import img2 from '../assets/images/background/2.png';

const _Banner = () => {
    return (
        <section className="banner-section-two" id="home-banner" style={{"backgroundImage":"url("+Home_Hero+")"}} >
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="content-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <h1>A Digital Agency All <br /> About Performance</h1>
                            <div className="text">We work with power brands owned by leading global</div>
                            <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="lightbox-image theme-btn btn-style-one">Watch Video <span className="icon fa fa-arrow-right"></span></a>
                        </div>
                    </div>
                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <figure 
 
                            >
                                <img src={img2} alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default _Banner;