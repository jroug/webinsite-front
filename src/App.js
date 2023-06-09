import React from 'react';
import { 
    _Header,
    _Banner, 
    _Footer,
    PageHome
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
        <>
            <_Header />
            <_Banner />
            <PageHome />
            <_Footer />
        </>
    );
}; 

export default App;