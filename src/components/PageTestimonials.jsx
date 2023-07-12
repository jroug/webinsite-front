import React, { Suspense, lazy } from 'react';

import { _BannerTop } from ".";

import { useQuery, gql } from '@apollo/client';
import GraphQLQueries from "./queries/GraphQLQueries";
import { logVar } from "./utils/Utils";

const PageTestimonials = (props) => {

    const TESTIMONIALS_CONTENT = gql`query TESTIMONIALS_CONTENT
    {
      ${GraphQLQueries.queries.testimonialsPage}
    }`;

    const { data, loading, error } = useQuery(TESTIMONIALS_CONTENT);

    if (loading) { logVar('loading From Page_Testimonials'); return }
    if (error) { logVar('error From Page_Testimonials'); return }
    if (!data) { logVar('!data From Page_Testimonials'); return }

    const pageTitle = data.testimonialsPage.title;
    const componentsData = data.testimonialsPage.componentsSectionsAllPages.componentsSections;
    
    let componentArray = [];
    let idx = 0;

    componentsData.forEach( (element) => {
        componentArray[idx++] = lazy ( () => import( './' + element.title.replaceAll(" ", "") ) );
    });

    return (
        <>
            <_BannerTop title={pageTitle} /> 
            <Suspense fallback={<div>Loading...</div>}>
                {
                    componentArray.map( (Component, index) => {
                        return <Component key={index} />
                    })
                }
            </Suspense>
        </>
    );
};

export default PageTestimonials;