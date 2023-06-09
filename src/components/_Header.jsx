import React from 'react';
import logo from '../assets/images/logo-wis.png';


const _Header = () => {
    return (
        <header className="main-header header-style-two">
            {/* <!--Header-Upper--> */}
            <div className="header-upper">
                <div className="auto-container">
                    <div className="clearfix">

                        <div className="pull-left logo-box">
                            <div className="logo"><a href="index.html"><img src={logo} alt="" title="" /></a></div>
                        </div>

                        <div className="nav-outer clearfix">

                            {/* <!-- Main Menu --> */}
                            <nav className="main-menu navbar-expand-md">
                                <div className="navbar-header">
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                </div>

                                <div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                                    <ul className="navigation clearfix">
                                        <li className="current"><a href="#">Αρχική</a></li>
                                        <li className=""><a href="#">Η Ομάδα μας</a></li>
                                        <li className=""><a href="#">Υπηρεσίες</a></li>
                                        <li className=""><a href="#">Ιστοσελίδες</a></li>
                                        <li className=""><a href="#">Επικοινωνία</a></li>
                                    </ul>
                                </div>

                            </nav>

                            <div className="outer-box">
                                {/* <!--Nav Toggler--> */}
                                <div className="sidebar-btn hidden-bar-opener"><div className="nav-btn"><span className="flaticon-menu"></span></div></div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            {/* <!--End Header Upper--> */}

            {/* <!--Sticky Header--> */}
            <div className="sticky-header">
                <div className="auto-container clearfix">
                    {/* <!--Logo--> */}
                    <div className="logo pull-left">
                        <a href="index.html" className="img-responsive"><img src={logo} alt="" title="" /></a>
                    </div>

                    {/* <!--Right Col--> */}
                    <div className="right-col pull-right">
                        {/* <!-- Main Menu --> */}
                        <nav className="main-menu navbar-expand-md">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>

                            <div className="navbar-collapse collapse clearfix" id="navbarSupportedContent1">
                                <ul className="navigation clearfix">
                                    <li className="current"><a href="#">Αρχική</a></li>
                                    <li className=""><a href="#">Η Ομάδα μας</a></li>
                                    <li className=""><a href="#">Υπηρεσίες</a></li>
                                    <li className=""><a href="#">Ιστοσελίδες</a></li>
                                    <li className=""><a href="#">Επικοινωνία</a></li>
                                </ul>
                            </div>
                        </nav>
                        {/* <!-- Main Menu End--> */}
                    </div>

                </div>
            </div>
            {/* <!--End Sticky Header--> */}
        </header>
    );
}
export default _Header;