import React, { Suspense, lazy } from 'react';
import { _BannerTop } from "./";
import { useQuery, gql } from '@apollo/client';
import {GraphQLQueries} from "./queries/GraphQLQueries";
import { logVar } from "./utils/Utils";

const PageServices = () => {

    const SERVICES_CONTENT = gql`query SERVICES_CONTENT
    {
      ${GraphQLQueries.queries.servicesPage}
    }`;

    const { data, loading, error } = useQuery(SERVICES_CONTENT);

    if (loading) { logVar('loading From Page_Services'); return }
    if (error) { logVar('error From Page_Services'); return }
    if (!data) { logVar('!data From Page_Services'); return }

    const pageTitle = data.servicesPage.title;
    const componentsData = data.servicesPage.componentsSectionsAllPages.componentsSections;
    
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
    )
};

export default PageServices;