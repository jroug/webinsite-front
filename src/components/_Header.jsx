import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/images/logo-wis.png';


const _Header = () => {
    return (
        <header className="main-header header-style-two">
            {/* <!--Header-Upper--> */}
            <div className="header-upper">
                <div className="auto-container">
                    <div className="clearfix">

                        <div className="pull-left logo-box">
                            <div className="logo"><Link to="/"><img src={logo} alt="" title="" /></Link></div>
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
                                        <li className="current"><Link to="/">Αρχική</Link></li>
                                        <li className=""><Link to="/about">Η Ομάδα μας</Link></li>
                                        <li class="dropdown">
                                            <Link to="/services">Υπηρεσίες</Link>
                                            <ul>
                                                <li><Link to="/service">Υπηρεσία</Link></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <Link to="/portfolio">Ιστοσελίδες</Link>
                                            <ul>
                                                <li><Link to="/project">Ιστοσελίδα</Link></li>
                                            </ul>
                                        </li>
                                        <li className=""><Link to="/contact">Επικοινωνία</Link></li>
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
                                <li className="current"><Link to="/">Αρχική</Link></li>
                                <li className=""><Link to="/about">Η Ομάδα μας</Link></li>
                                <li class="dropdown">
                                    <Link to="/services">Υπηρεσίες</Link>
                                    <ul>
                                        <li><Link to="/service-inner">Υπηρεσία</Link></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <Link to="/portfolio">Ιστοσελίδες</Link>
                                    <ul>
                                        <li><Link to="/portfolio-inner">Ιστοσελίδα</Link></li>
                                    </ul>
                                </li>
                                <li className=""><Link to="/contact">Επικοινωνία</Link></li>
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