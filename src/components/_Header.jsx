import React from 'react';

const _Header = () => {
    return (
        <header className="main-header header-style-two">
            {/* <!--Header-Upper--> */}
            <div className="header-upper">
                <div className="auto-container">
                    <div className="clearfix">

                        <div className="pull-left logo-box">
                            <div className="logo"><a href="index.html"><img src={"images/logo.png"} alt="" title="" /></a></div>
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
                                        <li className="current dropdown"><a href="#">Home</a>
                                            <ul>
                                                <li><a href="index.html">Home Page 01</a></li>
                                                <li><a href="index-2.html">Home Page 02</a></li>
                                                <li><a href="index-3.html">Home Page 03</a></li>
                                                <li className="dropdown"><a href="#">Home With Owl Slider</a>
                                                    <ul>
                                                        <li><a href="index-4.html">Home Page 01</a></li>
                                                        <li><a href="index-5.html">Home Page 02</a></li>
                                                        <li><a href="index-6.html">Home Page 03</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><a href="#">Home With Rev Slider</a>
                                                    <ul>
                                                        <li><a href="index-7.html">Home Page 01</a></li>
                                                        <li><a href="index-8.html">Home Page 02</a></li>
                                                        <li><a href="index-9.html">Home Page 03</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><a href="#">About Us</a>
                                            <ul>
                                                <li><a href="about.html">About Us</a></li>
                                                <li><a href="team.html">Our Team</a></li>
                                                <li><a href="faq.html">Faq</a></li>
                                                <li><a href="price.html">Price</a></li>
                                                <li><a href="testimonial.html">Testimonial</a></li>
                                                <li><a href="not-found.html">Error Page</a></li>
                                                <li><a href="comming-soon.html">Comming Soon</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown has-mega-menu"><a href="#">Pages</a>
                                            <div className="mega-menu">
                                                <div className="mega-menu-bar row clearfix">
                                                    <div className="column col-md-3 col-xs-12">
                                                        <h3>About Us</h3>
                                                        <ul>
                                                            <li><a href="about.html">About Us</a></li>
                                                            <li><a href="team.html">Our Team</a></li>
                                                            <li><a href="faq.html">Faq</a></li>
                                                            <li><a href="price.html">Price</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="column col-md-3 col-xs-12">
                                                        <h3>Services</h3>
                                                        <ul>
                                                            <li><a href="services.html">Services</a></li>
                                                            <li><a href="services-detail.html">Services Detail</a></li>
                                                            <li><a href="comming-soon.html">Comming Soon</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="column col-md-3 col-xs-12">
                                                        <h3>Blog</h3>
                                                        <ul>
                                                            <li><a href="blog.html">Our Blog</a></li>
                                                            <li><a href="blog-classic.html">Blog Classic</a></li>
                                                            <li><a href="blog-single.html">Blog Single</a></li>
                                                            <li><a href="not-found.html">Error Page</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="column col-md-3 col-xs-12">
                                                        <h3>Portfolio</h3>
                                                        <ul>
                                                            <li><a href="portfolio.html">Portfolio</a></li>
                                                            <li><a href="portfolio-single.html">Portfolio Single</a></li>
                                                            <li><a href="testimonial.html">Testimonial</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="dropdown"><a href="#">Services</a>
                                            <ul>
                                                <li><a href="services.html">Services</a></li>
                                                <li><a href="services-detail.html">Services Detail</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><a href="#">Portfolio</a>
                                            <ul>
                                                <li><a href="portfolio.html">Portfolio</a></li>
                                                <li><a href="portfolio-single.html">Portfolio Single</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><a href="#">Blog</a>
                                            <ul>
                                                <li><a href="blog.html">Our Blog</a></li>
                                                <li><a href="blog-classic.html">Blog Classic</a></li>
                                                <li><a href="blog-single.html">Blog Single</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">Contact us</a></li>
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
                        <a href="index.html" className="img-responsive"><img src={"images/logo.png"} alt="" title="" /></a>
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
                                    <li className="current dropdown"><a href="#">Home</a>
                                        <ul>
                                            <li><a href="index.html">Home Page 01</a></li>
                                            <li><a href="index-2.html">Home Page 02</a></li>
                                            <li><a href="index-3.html">Home Page 03</a></li>
                                            <li className="dropdown"><a href="#">Home With Owl Slider</a>
                                                <ul>
                                                    <li><a href="index-4.html">Home Page 01</a></li>
                                                    <li><a href="index-5.html">Home Page 02</a></li>
                                                    <li><a href="index-6.html">Home Page 03</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown"><a href="#">Home With Rev Slider</a>
                                                <ul>
                                                    <li><a href="index-7.html">Home Page 01</a></li>
                                                    <li><a href="index-8.html">Home Page 02</a></li>
                                                    <li><a href="index-9.html">Home Page 03</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><a href="#">About Us</a>
                                        <ul>
                                            <li><a href="about.html">About Us</a></li>
                                            <li><a href="team.html">Our Team</a></li>
                                            <li><a href="faq.html">Faq</a></li>
                                            <li><a href="price.html">Price</a></li>
                                            <li><a href="testimonial.html">Testimonial</a></li>
                                            <li><a href="not-found.html">Error Page</a></li>
                                            <li><a href="comming-soon.html">Comming Soon</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><a href="#">Services</a>
                                        <ul>
                                            <li><a href="services.html">Services</a></li>
                                            <li><a href="services-detail.html">Services Detail</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><a href="#">Portfolio</a>
                                        <ul>
                                            <li><a href="portfolio.html">Portfolio</a></li>
                                            <li><a href="portfolio-single.html">Portfolio Single</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><a href="#">Blog</a>
                                        <ul>
                                            <li><a href="blog.html">Our Blog</a></li>
                                            <li><a href="blog-classic.html">Blog Classic</a></li>
                                            <li><a href="blog-single.html">Blog Single</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">Contact us</a></li>
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