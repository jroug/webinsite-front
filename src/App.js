import React from 'react';
import { 
    _Header, 
    _Footer,
    PageHome
} from "./components";

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