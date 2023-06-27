import React, { useEffect } from 'react';

import mixitup from 'mixitup';

import imgg from '../assets/images/gallery/8.jpg';

import { _BannerTop, SectionSubscribeToNL } from "./";



const PagePortfolio = (props) => {

    useEffect(() => {
        const mixer = mixitup('.filter-list');
        window.mixer = mixer;
        return () => {
            window.mixer.destroy();
        }
    }, []);

    const handleFilterClassChange = (event) => {
        console.log(event.target);
        const filterBtns = document.querySelectorAll('.filter-btns li');
        filterBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        event.target.classList.add('active');
    }

    return (
        <>
            <_BannerTop title={props.title} /> 
            { /* <!-- Projects Page Section --> */ }
            <section className="projects-page-section">
                <div className="auto-container">
                    { /* <!--MixitUp Galery--> */ }
                    <div className="mixitup-gallery">
                        { /* <!--Filter--> */ }
                        <div className="filters clearfix">
                            <ul className="filter-tabs filter-btns text-center clearfix">
                                <li className="active filter" data-role="button" data-filter="all" onClick={handleFilterClassChange} >All</li>
                                <li className="filter" data-role="button" data-filter=".work" onClick={handleFilterClassChange} >Work</li>
                                <li className="filter" data-role="button" data-filter=".website" onClick={handleFilterClassChange} >Website</li>
                                <li className="filter" data-role="button" data-filter=".photograph" onClick={handleFilterClassChange} >Photography</li>
                                <li className="filter" data-role="button" data-filter=".brand" onClick={handleFilterClassChange} >Branding</li>
                                <li className="filter" data-role="button" data-filter=".mobile" onClick={handleFilterClassChange} >Mobile</li>
                            </ul>
                        </div>
                        <div id="filter-list" className="filter-list row clearfix" >
                            { /* <!--Gallery Item--> */ }
                            <div className="gallery-item-two mix photograph mobile col-lg-4 col-md-6 col-sm-12" data-ref="item" >
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src={imgg} alt="" />
                                        { /* <!--Overlay Box--> */ }
                                        <div className="overlay-box">
                                            <div className="overlay-inner">
                                                <div className="content">
                                                    <a href="portfolio-single.html" className="link"><span className="icon fa fa-link"></span></a>
                                                    <a href="images/gallery/8.jpg" data-fancybox="gallery-3" data-caption="" className="link"><span className="icon flaticon-add"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                    { /* <!-- Lower Box --> */ }
                                    <div className="lower-box">
                                        <a className="arrow-link" href="portfolio-single.html"><span className="icon fa fa-arrow-right"></span></a>
                                        <h3><a href="portfolio-single.html">Content Strategy photograph mobile</a></h3>
                                        <div className="category">DIGITAL MARKETING</div>
                                    </div>
                                </div>
                            </div>

                            { /* <!--Gallery Item--> */ }
                            <div className="gallery-item-two mix work mobile col-lg-4 col-md-6 col-sm-12" data-ref="item">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src={imgg} alt="" />
                                        { /* <!--Overlay Box--> */ }
                                        <div className="overlay-box">
                                            <div className="overlay-inner">
                                                <div className="content">
                                                    <a href="portfolio-single.html" className="link"><span className="icon fa fa-link"></span></a>
                                                    <a href="images/gallery/9.jpg" data-fancybox="gallery-3" data-caption="" className="link"><span className="icon flaticon-add"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                    { /* <!-- Lower Box --> */ }
                                    <div className="lower-box">
                                        <a className="arrow-link" href="portfolio-single.html"><span className="icon fa fa-arrow-right"></span></a>
                                        <h3><a href="portfolio-single.html">Social Engagement work mobile</a></h3>
                                        <div className="category">SUSTAINABILITY</div>
                                    </div>
                                </div>
                            </div>

                            { /* <!--Gallery Item--> */ }
                            <div className="gallery-item-two mix photograph mobile col-lg-4 col-md-6 col-sm-12" data-ref="item">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src={imgg} alt="" />
                                        { /* <!--Overlay Box--> */ }
                                        <div className="overlay-box">
                                            <div className="overlay-inner">
                                                <div className="content">
                                                    <a href="portfolio-single.html" className="link"><span className="icon fa fa-link"></span></a>
                                                    <a href="images/gallery/10.jpg" data-fancybox="gallery-3" data-caption="" className="link"><span className="icon flaticon-add"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                    { /* <!-- Lower Box --> */ }
                                    <div className="lower-box">
                                        <a className="arrow-link" href="portfolio-single.html"><span className="icon fa fa-arrow-right"></span></a>
                                        <h3><a href="portfolio-single.html">Content Strategy photograph mobile</a></h3>
                                        <div className="category">DIGITAL MARKETING</div>
                                    </div>
                                </div>
                            </div>

                            { /* <!--Gallery Item--> */ }
                            <div className="gallery-item-two mix work website col-lg-4 col-md-6 col-sm-12" data-ref="item" >
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src={imgg} alt="" />
                                        { /* <!--Overlay Box--> */ }
                                        <div className="overlay-box">
                                            <div className="overlay-inner">
                                                <div className="content">
                                                    <a href="portfolio-single.html" className="link"><span className="icon fa fa-link"></span></a>
                                                    <a href="images/gallery/11.jpg" data-fancybox="gallery-3" data-caption="" className="link"><span className="icon flaticon-add"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                    { /* <!-- Lower Box --> */ }
                                    <div className="lower-box">
                                        <a className="arrow-link" href="portfolio-single.html"><span className="icon fa fa-arrow-right"></span></a>
                                        <h3><a href="portfolio-single.html">Plan Management work website</a></h3>
                                        <div className="category">PLANNING</div>
                                    </div>
                                </div>
                            </div>

                            { /* <!--Gallery Item--> */ }
                            <div className="gallery-item-two mix photograph mobile col-lg-4 col-md-6 col-sm-12" data-ref="item" >
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src={imgg} alt="" />
                                        { /* <!--Overlay Box--> */ }
                                        <div className="overlay-box">
                                            <div className="overlay-inner">
                                                <div className="content">
                                                    <a href="portfolio-single.html" className="link"><span className="icon fa fa-link"></span></a>
                                                    <a href="images/gallery/12.jpg" data-fancybox="gallery-3" data-caption="" className="link"><span className="icon flaticon-add"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                    { /* <!-- Lower Box --> */ }
                                    <div className="lower-box">
                                        <a className="arrow-link" href="portfolio-single.html"><span className="icon fa fa-arrow-right"></span></a>
                                        <h3><a href="portfolio-single.html">Technical SEO photograph mobile</a></h3>
                                        <div className="category">SEO</div>
                                    </div>
                                </div>
                            </div>

                            { /* <!--Gallery Item--> */ }
                            <div className="gallery-item-two mix work brand website col-lg-4 col-md-6 col-sm-12" data-ref="item" >
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src={imgg} alt="" />
                                        { /* <!--Overlay Box--> */ }
                                        <div className="overlay-box">
                                            <div className="overlay-inner">
                                                <div className="content">
                                                    <a href="portfolio-single.html" className="link"><span className="icon fa fa-link"></span></a>
                                                    <a href="images/gallery/13.jpg" data-fancybox="gallery-3" data-caption="" className="link"><span className="icon flaticon-add"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                    { /* <!-- Lower Box --> */ }
                                    <div className="lower-box">
                                        <a className="arrow-link" href="portfolio-single.html"><span className="icon fa fa-arrow-right"></span></a>
                                        <h3><a href="portfolio-single.html">Digital Analysis work brand website</a></h3>
                                        <div className="category">STRATEGY</div>
                                    </div>
                                </div>
                            </div>

                            { /* <!--Gallery Item--> */ }
                            <div className="gallery-item-two mix photograph website mobile col-lg-4 col-md-6 col-sm-12" data-ref="item" >
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src={imgg} alt="" />
                                        { /* <!--Overlay Box--> */ }
                                        <div className="overlay-box">
                                            <div className="overlay-inner">
                                                <div className="content">
                                                    <a href="portfolio-single.html" className="link"><span className="icon fa fa-link"></span></a>
                                                    <a href="images/gallery/14.jpg" data-fancybox="gallery-3" data-caption="" className="link"><span className="icon flaticon-add"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                    { /* <!-- Lower Box --> */ }
                                    <div className="lower-box">
                                        <a className="arrow-link" href="portfolio-single.html"><span className="icon fa fa-arrow-right"></span></a>
                                        <h3><a href="portfolio-single.html">Social Ranking</a></h3>
                                        <div className="category">PPC|SEO</div>
                                    </div>
                                </div>
                            </div>

                            { /* <!--Gallery Item--> */ }
                            <div className="gallery-item-two mix photograph brand mobile col-lg-4 col-md-6 col-sm-12" data-ref="item" >
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src={imgg} alt="" />
                                        { /* <!--Overlay Box--> */ }
                                        <div className="overlay-box">
                                            <div className="overlay-inner">
                                                <div className="content">
                                                    <a href="portfolio-single.html" className="link"><span className="icon fa fa-link"></span></a>
                                                    <a href="images/gallery/15.jpg" data-fancybox="gallery-3" data-caption="" className="link"><span className="icon flaticon-add"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                    { /* <!-- Lower Box --> */ }
                                    <div className="lower-box">
                                        <a className="arrow-link" href="portfolio-single.html"><span className="icon fa fa-arrow-right"></span></a>
                                        <h3><a href="portfolio-single.html">Content Strategy photograph brand mobile</a></h3>
                                        <div className="category">DIGITAL MARKETING</div>
                                    </div>
                                </div>
                            </div>

                            { /* <!--Gallery Item--> */ }
                            <div className="gallery-item-two mix work brand col-lg-4 col-md-6 col-sm-12" data-ref="item" >
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src={imgg} alt="" />
                                        { /* <!--Overlay Box--> */ }
                                        <div className="overlay-box">
                                            <div className="overlay-inner">
                                                <div className="content">
                                                    <a href="portfolio-single.html" className="link"><span className="icon fa fa-link"></span></a>
                                                    <a href="images/gallery/16.jpg" data-fancybox="gallery-3" data-caption="" className="link"><span className="icon flaticon-add"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                    { /* <!-- Lower Box --> */ }
                                    <div className="lower-box">
                                        <a className="arrow-link" href="portfolio-single.html"><span className="icon fa fa-arrow-right"></span></a>
                                        <h3><a href="portfolio-single.html">Social Engagement work brand</a></h3>
                                        <div className="category">DIGITAL MARKETING</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            { /* <!-- End Projects Page Section --> */ }
            <SectionSubscribeToNL />
        </>
    );
};

export default PagePortfolio;