import React , { Suspense, lazy } from 'react';
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
import ToolEditPage from './components/utils/ToolEditPage';


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


// const ToolEditPage = lazy(() => import('./components/utils/ToolEditPage'));

// const PageHome = lazy(() => import('./components/PageHome'));
// const PagePortfolio = lazy(() => import('./components/PagePortfolio'));
// const PageContact = lazy(() => import('./components/PageContact'));
// const TemplatePortfolioInner = lazy(() => import('./components/TemplatePortfolioInner'));
// const TemplateServiceInner = lazy(() => import('./components/TemplateServiceInner'));
// const TemplateBlogInner = lazy(() => import('./components/TemplateBlogInner'));
// const TemplatePage = lazy(() => import('./components/TemplatePage'));
// const PageBlog = lazy(() => import('./components/PageBlog'));




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
            {/* <Suspense fallback={<span style={{fontSize:'40px'}}>Loading</span>} > */}
                <Routes >
                    <Route>
                        <Route key={"0"} path="/" exact element={<PageHome />} />

                        {
                            ["about", "testimonials", "services", "faq"].map((pageSlug, index) => {
                                return (
                                    <Route key={pageSlug} path={"/"+pageSlug} element={<TemplatePage pageSlug={pageSlug} />} />
                                )
                            })
                        }
              
                            <Route key={"5"} path="/service-inner" element={<TemplateServiceInner title={"Υπηρεσία"} />}   />
                        <Route key={"6"} path="/portfolio" element={<PagePortfolio title={"Ιστοσελίδες"} />}   />
                            <Route key={"7"} path="/portfolio-inner" element={<TemplatePortfolioInner title={"Ιστοσελίδα"} />}   />
                        <Route key={"8"} path="/blog" element={<PageBlog title={"Blog"} />}   />
                            <Route key={"9"} path="/blog-inner" element={<TemplateBlogInner title={"Post"} />}   />
                        <Route key={"10"} path="/contact" element={<PageContact title={"Επικοινωνία"} />}   />
                    </Route>
                </Routes>
            {/* </Suspense> */}
            <_Footer />
        </BrowserRouter>
    );
}; 

export default App;