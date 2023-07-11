import React, { Suspense, lazy } from "react";
import { useQuery, gql } from '@apollo/client';

import GraphQLQueries from "./queries/GraphQLQueries";
import { logVar } from "./utils/Utils";

import { _BannerTop } from "./";

const PageAbout = (props) => {
    
    const ABOUT_CONTENT = gql`query ABOUT_CONTENT
    {
      ${GraphQLQueries.queries.aboutPage}
    }`;

    // const HOMEPAGE_CONTENT = gql`query HOMEPAGE_CONTENT
    // {
    //   ${GraphQLQueries.queries.homePage}
    //   ${GraphQLQueries.queries.sectionOurServices}
    //   ${GraphQLQueries.queries.sectionWhyUs}
    // }`;

    const { data, loading, error } = useQuery(ABOUT_CONTENT);

    if (loading) { logVar('loading From Page_About'); return }
    if (error) { logVar('error From Page_About'); return }
    if (!data) { logVar('!data From Page_About'); return }

    const pageTitle = data.aboutPage.title;
    const componentsData = data.aboutPage.componentsSectionsAllPages.componentsSections;

    // const SectionOurServices = lazy ( () => import('./SectionOurServices') );
    // const SectionWhyUs = lazy ( () => import('./SectionWhyUs') );
    
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

export default PageAbout;