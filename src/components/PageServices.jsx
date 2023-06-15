import React from 'react';

import { _BannerTop, SectionOurServices } from "./";

const PageServices = (props) => {
    return (
        <>
            <_BannerTop title={props.title} /> 
            <SectionOurServices />
        </>
    );
};

export default PageServices;