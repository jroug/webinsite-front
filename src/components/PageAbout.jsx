import React from 'react';

import { _BannerTop, SectionWhyUs, SectionAboutUs, SectionSubscribeToNL } from "./";

const PageAbout = (props) => {
    
    return (
        <>
            <_BannerTop title={props.title} />
            <SectionAboutUs />
            <SectionWhyUs />
            <SectionSubscribeToNL />
        </>
    );
};

export default PageAbout;