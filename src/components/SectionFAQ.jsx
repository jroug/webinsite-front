import React from 'react';

const SectionFAQ = () => {
    return (
        <section className="faq-page-section">
            <div className="auto-container">
                <div className="row clearfix">

                    {/* <!-- Title Column --> */}
                    <div className="title-column col-lg-5 col-sm-12 col-xs-12">
                        <div className="inner-column">
                            {/* <!-- Sec Title --> */}
                            <div className="sec-title">
                                <div className="title">Frequenty Asked Question</div>
                                <div className="separator"><span></span></div>
                                <h2>Got Any Questions?</h2>
                            </div>
                            <div className="text">Veniam quis nostrud exercitation ullamco laboris nist aute irure dolor in reprehenderit in voluptate velit esse nulla pariatur excepteur sint occaecat aboris nisi ut aliquip ex ea consequat uis aute.</div>
                            <a href="#" className="theme-btn btn-style-two"><span className="txt">Get More Help</span></a>
                        </div>
                    </div>

                    {/* <!-- Accordian Column --> */}
                    <div className="accordian-column col-lg-7 col-sm-12 col-xs-12">
                        <div className="inner-column">

                            {/* <!--Accordian Box--> */}
                            <ul id="accordion-box" className="accordion-box">

                                {/* <!--Block--> */}
                                <li className="accordion block">
                                    <div className="acc-btn" onClick={handleAccBtn} ><div className="icon-outer"><span className="icon icon-plus fa fa-plus"></span> <span className="icon icon-minus fa fa-minus"></span></div>How to analyze marketing strategies?</div>
                                    <div className="acc-content">
                                        <div className="content">
                                            <div className="text">
                                                <p>Nostrud exercitation ullamco laboris nisi ut aliquip aute irure dolor indy reprehenderit in voluptate velit esse cillum dole Veniam quis nul pariatur excepteur sint nulla ipsum occaecat.</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                {/* <!--Block--> */}
                                <li className="accordion block">
                                    <div className="acc-btn active" onClick={handleAccBtn} ><div className="icon-outer"><span className="icon icon-plus fa fa-plus"></span> <span className="icon icon-minus fa fa-minus"></span></div>What are latest updates and how to get it?</div>
                                    <div className="acc-content current">
                                        <div className="content">
                                            <div className="text">
                                                <p>Nostrud exercitation ullamco laboris nisi ut aliquip aute irure dolor indy reprehenderit in voluptate velit esse cillum dole Veniam quis nul pariatur excepteur sint nulla ipsum occaecat.</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                {/* <!--Block--> */}
                                <li className="accordion block">
                                    <div className="acc-btn" onClick={handleAccBtn} ><div className="icon-outer"><span className="icon icon-plus fa fa-plus"></span> <span className="icon icon-minus fa fa-minus"></span></div>How can I customize projects to add members?</div>
                                    <div className="acc-content">
                                        <div className="content">
                                            <div className="text">
                                                <p>Nostrud exercitation ullamco laboris nisi ut aliquip aute irure dolor indy reprehenderit in voluptate velit esse cillum dole Veniam quis nul pariatur excepteur sint nulla ipsum occaecat.</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                {/* <!--Block--> */}
                                <li className="accordion block">
                                    <div className="acc-btn" onClick={handleAccBtn} ><div className="icon-outer"><span className="icon icon-plus fa fa-plus"></span> <span className="icon icon-minus fa fa-minus"></span></div>Why you respond so much late?</div>
                                    <div className="acc-content">
                                        <div className="content">
                                            <div className="text">
                                                <p>Nostrud exercitation ullamco laboris nisi ut aliquip aute irure dolor indy reprehenderit in voluptate velit esse cillum dole Veniam quis nul pariatur excepteur sint nulla ipsum occaecat.</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                {/* <!--Block--> */}
                                <li className="accordion block">
                                    <div className="acc-btn" onClick={handleAccBtn} ><div className="icon-outer"><span className="icon icon-plus fa fa-plus"></span> <span className="icon icon-minus fa fa-minus"></span></div>How can I customize projects to add members?</div>
                                    <div className="acc-content">
                                        <div className="content">
                                            <div className="text">
                                                <p>Nostrud exercitation ullamco laboris nisi ut aliquip aute irure dolor indy reprehenderit in voluptate velit esse cillum dole Veniam quis nul pariatur excepteur sint nulla ipsum occaecat.</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                {/* <!--Block--> */}
                                <li className="accordion block">
                                    <div className="acc-btn" onClick={handleAccBtn} ><div className="icon-outer"><span className="icon icon-plus fa fa-plus"></span> <span className="icon icon-minus fa fa-minus"></span></div>How to analyze marketing strategies?</div>
                                    <div className="acc-content">
                                        <div className="content">
                                            <div className="text">
                                                <p>Nostrud exercitation ullamco laboris nisi ut aliquip aute irure dolor indy reprehenderit in voluptate velit esse cillum dole Veniam quis nul pariatur excepteur sint nulla ipsum occaecat.</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                {/* <!--Block--> */}
                                <li className="accordion block">
                                    <div className="acc-btn" onClick={handleAccBtn} ><div className="icon-outer"><span className="icon icon-plus fa fa-plus"></span> <span className="icon icon-minus fa fa-minus"></span></div>What are latest updates and how to get it?</div>
                                    <div className="acc-content">
                                        <div className="content">
                                            <div className="text">
                                                <p>Nostrud exercitation ullamco laboris nisi ut aliquip aute irure dolor indy reprehenderit in voluptate velit esse cillum dole Veniam quis nul pariatur excepteur sint nulla ipsum occaecat.</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                {/* <!--Block--> */}
                                <li className="accordion block">
                                    <div className="acc-btn" onClick={handleAccBtn} ><div className="icon-outer"><span className="icon icon-plus fa fa-plus"></span> <span className="icon icon-minus fa fa-minus"></span></div>Why you respond so much late?</div>
                                    <div className="acc-content">
                                        <div className="content">
                                            <div className="text">
                                                <p>Nostrud exercitation ullamco laboris nisi ut aliquip aute irure dolor indy reprehenderit in voluptate velit esse cillum dole Veniam quis nul pariatur excepteur sint nulla ipsum occaecat.</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                            </ul>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SectionFAQ;