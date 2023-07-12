import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { 
    _Header,
    _BannerHome, 
    _Footer,
    PageHome,
    PagePortfolio,
    PageContact,
    TemplatePortfolioInner,
    TemplateServiceInner,
    TemplateBlogInner,
    TemplatePage,
    PageBlog,
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

// import GraphQLQueries from "./components/queries/GraphQLQueries";
import ToolEditPage from "./components/utils/ToolEditPage";

const App = () => {
    return (
        <BrowserRouter>
            <_Header />
            {
                (process.env.NODE_ENV == 'development') 
                ?
                <ToolEditPage />
                :
                <></>
            }
            <Routes >
                <Route>
                    <Route exact path="/" element={<PageHome />} title={""} />

                    <Route key={"1"} path="/about" element={<TemplatePage pageSlug={"about"} />} />
                     <Route key={"1a"} path="/testimonials" element={<TemplatePage pageSlug={"testimonials"}  />} />
                    <Route key={"2"} path="/services" element={<TemplatePage pageSlug={"services"} />} />
                    <Route key={"6"} path="/faq" element={<TemplatePage pageSlug={"faq"}   />}   />

                        <Route key={"2a"} path="/service-inner" element={<TemplateServiceInner title={"Υπηρεσία"} />}   />
                    <Route key={"3"} path="/portfolio" element={<PagePortfolio title={"Ιστοσελίδες"} />}   />
                        <Route key={"3a"} path="/portfolio-inner" element={<TemplatePortfolioInner title={"Ιστοσελίδα"} />}   />
                    <Route key={"4"} path="/blog" element={<PageBlog title={"Blog"} />}   />
                        <Route key={"4a"} path="/blog-inner" element={<TemplateBlogInner title={"Post"} />}   />
             
                    <Route key={"7"} path="/contact" element={<PageContact title={"Επικοινωνία"} />}   />
                </Route>
            </Routes>
            <_Footer />
        </BrowserRouter>
    );
}; 

export default App;