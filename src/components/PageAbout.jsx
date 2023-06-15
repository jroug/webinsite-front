import React from 'react';

import { _BannerTop, SectionWhyUs } from "./";

const PageAbout = (props) => {
    
    return (
        <>
            <_BannerTop title={props.title} />
            <SectionWhyUs />
        </>
    );
};

export default PageAbout;