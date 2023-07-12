import React, { Suspense, lazy } from 'react';

import { _BannerTop } from ".";

import { useQuery, gql } from '@apollo/client';
import {GraphQLQueries, getGenericPageQuery} from "./queries/GraphQLQueries";
import { logVar } from "./utils/Utils";

const TemplatePage = (props) => {
    
 
    const pageSlug = props.pageSlug;

    const PAGE_CONTENT = gql`query PAGE_CONTENT
    {
      ${ getGenericPageQuery(pageSlug) }
    }`;

    const { data, loading, error } = useQuery(PAGE_CONTENT);

    if (loading) { logVar('loading From ' + pageSlug + ' Page' ); return }
    if (error) { logVar('error From ' + pageSlug + ' Page' ); return }
    if (!data) { logVar('!data From ' + pageSlug + ' Page' ); return }

    const pageTitle = data.genericPage.title;
    const componentsData = data.genericPage.componentsSectionsAllPages.componentsSections;
    
    let componentArray = [];
    let idx = 0;

    componentsData.forEach( (element) => {
        componentArray[idx++] = lazy ( () => import( './' + element.title.replaceAll(" ", "") ) );
    });

    // logVar(componentsData);

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

export default TemplatePage;