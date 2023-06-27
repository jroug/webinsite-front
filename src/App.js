import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { 
    _Header,
    _BannerHome, 
    _Footer,
    PageHome,
    PageAbout,
    PageServices,
    PagePortfolio,
    PageContact,
    TemplatePortfolioInner,
    TemplateServiceInner,
    PageFaq,
    PageTestimonials
} from "./components";

import './assets/css/bootstrap.css';
import './assets/css/font-awesome.css';
import './assets/css/flaticon.css';
import './assets/css/animate.css';
// import './assets/css/owl.css';
// import './assets/css/jquery-ui.css';
import './assets/css/animation.css';
import './assets/css/jquery.fancybox.min.css';
// import './assets/css/jquery.mCustomScrollbar.min.css';
import './assets/css/main.css';
import './assets/css/responsive.css';
import './assets/css/custom.css';

const App = () => {
    return (
        <BrowserRouter>
            <_Header />
            <Routes >
                <Route>
                    <Route exact path="/" element={<PageHome />} title={""} />
                    <Route key={"1"} path="/about" element={<PageAbout title={"Η Όμαδα μας"} />} />
                        <Route key={"1a"} path="/testimonials" element={<PageTestimonials title={"Testimonials"} />} />
                    <Route key={"2"} path="/services" element={<PageServices title={"Υπηρεσίες"}  />} />
                        <Route key={"2a"} path="/service-inner" element={<TemplateServiceInner title={"Υπηρεσία"} />}   />
                    <Route key={"3"} path="/portfolio" element={<PagePortfolio title={"Ιστοσελίδες"} />}   />
                        <Route key={"3a"} path="/portfolio-inner" element={<TemplatePortfolioInner title={"Ιστοσελίδα"} />}   />
                    <Route key={"6"} path="/faq" element={<PageFaq title={"FAQ"} />}   />
                    <Route key={"7"} path="/contact" element={<PageContact title={"Επικοινωνία"} />}   />
                </Route>
            </Routes>
            <_Footer />
        </BrowserRouter>
    );
}; 

export default App;