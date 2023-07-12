import React from 'react';

import { _BannerTop } from "./";

const PageFaq = (props) => {

    const handleAccBtn = (el) => {
        let that = el.currentTarget;
        if(!that.classList.contains('active')){
            document.querySelector("#accordion-box").querySelectorAll('.acc-btn').forEach((el2) => {
                el2.classList.remove('active');
                el2.nextElementSibling.classList.remove('current');
            });
            that.classList.add('active');
            that.nextElementSibling.classList.add('current');
        }else{
            that.classList.remove('active');
            that.nextElementSibling.classList.remove('current');
        }
    }

    return (
        <>
            <_BannerTop title={props.title} />
            
        </>
    );
};

export default PageFaq;