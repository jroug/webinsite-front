
import React, { Suspense, lazy } from "react";
import { useQuery, gql } from '@apollo/client';

import {GraphQLQueries} from "./queries/GraphQLQueries";
import { logVar } from "./utils/Utils";

import { _BannerHome } from "./";

const PageHome = () => {


    const HOMEPAGE_CONTENT = gql`query HOMEPAGE_CONTENT
    {
      ${GraphQLQueries.queries.homePage}
    }`;

    // const HOMEPAGE_CONTENT = gql`query HOMEPAGE_CONTENT
    // {
    //   ${GraphQLQueries.queries.homePage}
    //   ${GraphQLQueries.queries.sectionOurServices}
    //   ${GraphQLQueries.queries.sectionWhyUs}
    // }`;

    const { data, loading, error } = useQuery(HOMEPAGE_CONTENT);

    if (loading) { logVar('loading From Page_Home'); return }
    if (error) { logVar('error From Page_Home'); return }
    if (!data) { logVar('!data From Page_Home'); return }

    const homepageData = data.homePage.homepageFields;
    const componentsData = data.homePage.componentsSectionsAllPages.componentsSections;

    // const SectionOurServices = lazy ( () => import('./SectionOurServices') );
    // const SectionWhyUs = lazy ( () => import('./SectionWhyUs') );
    
    var componentArray = [];
    let idx = 0;
    
    componentsData.forEach( (element) => {
        componentArray[idx++] = lazy ( () => import( './' + element.title.replaceAll(" ", "") ) );
    });

    // logVar(componentArray);
    // const SectionOurServices = lazy ( () => import('./SectionOurServices') );
    
 
    
    return (
       <>
        <_BannerHome homeHeaderData = { homepageData } />
       
        <Suspense fallback={<div>Loading...</div>}>
           {
                componentArray.map( (Component, index) => ( <Component key={index} />) )
           }
        </Suspense>
       </>
    );
}
export default PageHome;