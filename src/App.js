import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { 
    _Header,
    _BannerHome, 
    _Footer,
    PageHome,
    PageAbout
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
                    <Route exact path="/" element={<PageHome />} />
                    <Route key={"1"} path="/about" element={<PageAbout />}   />
                </Route>
            </Routes>
            <_Footer />
        </BrowserRouter>
    );
}; 

export default App;