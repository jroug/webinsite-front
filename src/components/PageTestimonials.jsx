import React from 'react';

import { _BannerTop, SectionTestimonials } from ".";

const PageTestimonials = (props) => {
    return (
        <>
            <_BannerTop title={props.title} /> 
            <SectionTestimonials />
        </>
    );
};

export default PageTestimonials;