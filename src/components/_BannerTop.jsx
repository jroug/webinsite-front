import React from 'react';

// import Home_Hero from '../assets/images/01_Home_Hero.jpg';
import p21 from '../assets/images/background/pattern-21.png';
import i6 from '../assets/images/icons/icon-6.png';
import i7 from '../assets/images/icons/icon-7.png';
import i8 from '../assets/images/icons/icon-8.png';
import i9 from '../assets/images/icons/icon-9.png';
import i10 from '../assets/images/icons/icon-10.png';

const _BannerTop = () => {
    return (
        <section className="page-title" style={{"backgroundImage":"url(" + p21 + ")"}}>
            <div className="auto-container">
                {/* <!-- Section Icons --> */}
                <div className="section-icons">
                    {/* <!-- Icon One --> */}
                    <div className="icon-one" style={{"backgroundImage":"url(" + i6 + ")"}}></div>
                    {/* <!-- Icon Two --> */}
                    <div className="icon-two" style={{"backgroundImage":"url(" + i7 + ")"}}></div>
                    {/* <!-- Icon Three --> */}
                    <div className="icon-three" style={{"backgroundImage":"url(" + i8 + ")"}}></div>
                    {/* <!-- Icon Four --> */}
                    <div className="icon-four" style={{"backgroundImage":"url(" + i9 + ")"}}></div>
                    {/* <!-- Icon Five --> */}
                    <div className="icon-five" style={{"backgroundImage":"url(" + i10 + ")"}}></div>
                    {/* <!-- Icon Six --> */}
                    <div className="icon-six" style={{"backgroundImage":"url(" + i6 + ")"}}></div>
                </div>
                <div className="inner-container clearfix">
                    <div className="pull-left">
                        <h1>Expert Team</h1>
                    </div>
                    <div className="pull-right">
                        <ul className="bread-crumb clearfix">
                            <li><a href="index.html">Home</a></li>
                            <li>Team</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default _BannerTop;