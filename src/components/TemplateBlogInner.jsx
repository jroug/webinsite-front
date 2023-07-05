import React from 'react';
import { _BannerTop } from "./";
import news10 from '../assets/images/resource/news-10.jpg';
import news14 from '../assets/images/resource/news-14.jpg';
import news15 from '../assets/images/resource/news-15.jpg';
import author3 from '../assets/images/resource/author-3.jpg';
import author6 from '../assets/images/resource/author-6.png';
import author7 from '../assets/images/resource/author-7.png';
import author8 from '../assets/images/resource/author-8.png';


const PageBlogInner = (props) => {
    return (
        <>
            <_BannerTop title={props.title} />  
            <div className="sidebar-page-container">
                <div className="auto-container">
                    <div className="row clearfix">
                        { /* <!-- Content Side / Blog Single --> */ }
                        <div className="content-side col-lg-8 col-md-12 col-sm-12">
                            <div className="blog-single">
                                <div className="inner-box">
                                    <div className="image">
                                        <img src={news10} alt="" />
                                    </div>
                                    <div className="lower-content">
                                        <div className="post-date">20 March, 2018</div>
                                        <h6>Top aide possible contender forced to resign over creepy.</h6>
                                        <div className="text">
                                            <p>Eveniet in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at seds eros sed et accumsan et iusto odio dignissim. Temporibus autem quibusdam et aut officiis.</p>
                                            <div className="images-column">
                                                <div className="row clearfix">
                                                    <div className="column col-lg-6 col-md-6 col-sm-12">
                                                        <div className="image">
                                                            <img src={news14} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="column col-lg-6 col-md-6 col-sm-12">
                                                        <div className="image">
                                                            <img src={news15} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>Eveniet in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at seds eros sed et accumsan et iusto odio dignissim. Temporibus autem quibusdam et aut officiis.</p>
                                            <p>cookies are set through this site to recognise your repeat visits and preferences, serve more vant ads, facilitate social sharing, and to violanalyse traffic.Others wondered if the hand of od was at work over New York, heralding perhaps a new Pope, or the moment when Evangeli cals say true believers will be swept up, or "raptured", to heaven. When these electrons recombine with the excited atoms, returning them to their starting energy state, light is emitted.</p>
                                            <p>When these electrons recombine with the excited atoms, returning them to their starting energy state, light is emitted. The colour of the light emitted depends on the type of atoms involved.</p>
                                            <blockquote>
                                                <div className="quote-icon flaticon-left-quote"></div>
                                                <div className="quote-text">What sort of men would think it is acceptable to subject a young girl to this level of brutality and violence? an attack like this in ourcommunities and we must all work together.</div>
                                            </blockquote>
                                        </div>
                                        <div className="post-share-option clearfix">
                                            <div className="pull-left">
                                                <div className="author">
                                                    <div className="image"><img src={author3} alt="" /></div>
                                                    by Jhon Kenedy
                                                </div>
                                            </div>
                                            <div className="pull-right">
                                                <ul className="post-info">
                                                    <li><a href="blog-single.html"><span className="icon flaticon-chat-comment-oval-speech-bubble-with-text-lines"></span></a></li>
                                                    <li><a href="blog-single.html"><span className="icon flaticon-share"></span></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                { /* <!--Comments Area--> */ }
                                <div className="comments-area">
                                    <div className="group-title">
                                        <h4>2 Comments</h4>
                                    </div>
                                    <div className="comment-box">
                                        <div className="comment">
                                            <div className="author-thumb"><img src={author6} alt="" /></div>
                                            <div className="comment-info clearfix"><strong>Tamoc Morala</strong><div className="comment-time">13 June, 2018      at 07:30</div></div>
                                            <div className="text">One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.</div>
                                            <a className="theme-btn reply-btn" href="#">Reply</a>
                                        </div>
                                    </div>
                                    <div className="comment-box reply-comment">
                                        <div className="comment">
                                            <div className="author-thumb"><img src={author7} alt="" /></div>
                                            <div className="comment-info clearfix"><strong>Rosta Barsr</strong><div className="comment-time">13 June, 2018      at 07:30</div></div>
                                            <div className="text">One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future.</div>
                                            <a className="theme-btn reply-btn" href="#">Reply</a>
                                        </div>
                                    </div>
                                    <div className="comment-box">
                                        <div className="comment">
                                            <div className="author-thumb"><img src={author8} alt="" /></div>
                                            <div className="comment-info clearfix"><strong>Morala Tamoc</strong><div className="comment-time">13 June, 2018      at 07:30</div></div>
                                            <div className="text">One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.</div>
                                            <a className="theme-btn reply-btn" href="#">Reply</a>
                                        </div>
                                    </div>
                                </div>
                                { /* <!-- Comment Form --> */ }
                                <div className="comment-form">
                                    <div className="group-title"><h4>Leave A Comment</h4></div>
                                    { /* <!--Comment Form--> */ }
                                    <form method="post" action="blog.html">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="text" name="username" placeholder="Full Name" required="" />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="email" name="email" placeholder="Email" required="" />
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                <textarea className="darma" name="message" placeholder="Your Message"></textarea>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                <button className="theme-btn submit-btn" type="submit" name="submit-form">SEND MESSAGE</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                { /* <!--End Comment Form --> */ }
                            </div>
                        </div>

                        { /* <!--Sidebar Side--> */ }
                        <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
                            <aside className="sidebar">
                                { /* <!-- Search --> */ }
                                <div className="sidebar-widget search-box">
                                    <form method="post" action="contact.html">
                                        <div className="form-group">
                                            <input type="search" name="search-field" value="" placeholder="Search Now" required="" />
                                            <button type="submit"><span className="icon fa fa-search"></span></button>
                                        </div>
                                    </form>
                                </div>
                                { /* <!--Blog Category Widget--> */ }
                                <div className="sidebar-widget sidebar-blog-category">
                                    <div className="sidebar-title">
                                        <h2>Categories</h2>
                                    </div>
                                    <ul className="cat-list">
                                        <li><a href="#">Web Design <span>(09)</span></a></li>
                                        <li><a href="#">Graphics<span>(13)</span></a></li>
                                        <li><a href="#">Web Development<span>(05)</span></a></li>
                                        <li><a href="#">IOS/Android Development<span>(19)</span></a></li>
                                        <li><a href="#">Others<span>(12)</span></a></li>
                                    </ul>
                                </div>
                                { /* <!-- Popular Posts --> */ }
                                <div className="sidebar-widget popular-posts">
                                    <div className="sidebar-title"><h2>Recent News</h2></div>
                                    <article className="post">
                                        <div className="text"><a href="blog-detail.html">Best website traffice Booster with great tools.</a></div>
                                        <div className="post-info">12 May, 2016</div>
                                    </article>
                                    <article className="post">
                                        <div className="text"><a href="blog-detail.html">Google take latest step &amp; Catch the black SEO</a></div>
                                        <div className="post-info">12 May, 2016</div>
                                    </article>
                                    <article className="post">
                                        <div className="text"><a href="blog-detail.html">How to become a best sale marketer in a year!</a></div>
                                        <div className="post-info">12 May, 2016</div>
                                    </article>
                                </div>
                                { /* <!-- Popular Tags --> */ }
                                <div className="sidebar-widget popular-tags">
                                    <div className="sidebar-title"><h2>Popular Tags</h2></div>
                                    <a href="#">SEO Dightal</a>
                                    <a href="#">Animation</a>
                                    <a href="#">Ideas</a>
                                    <a href="#">Design</a>
                                    <a href="#">Develpment</a>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PageBlogInner;