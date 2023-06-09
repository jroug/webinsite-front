import React from 'react';
import { 
    _Header, 
    _Footer,
    PageHome
} from "./components";

import './assets/css/main.css';
import './assets/css/responsive.css';

const App = () => {
    return (
        <>
            <_Header />
            <PageHome />
            <_Footer />
        </>
    );
}; 

export default App;