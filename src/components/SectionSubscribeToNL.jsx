import React from 'react';

import pattern19 from '../assets/images/background/pattern-19.png';
import subscribe from '../assets/images/resource/subscribe.png';

import { useQuery, gql } from '@apollo/client';

import {GraphQLQueries} from "./queries/GraphQLQueries";
import { logVar } from "./utils/Utils";


const SectionSubscribeToNL = () => {

    const SUBNL_SECTION_CONTENT = gql`query SUBNL_SECTION_CONTENT
    {
      ${GraphQLQueries.queries.sectionSubscribeToNL}
    }`;

    const { data, loading, error } = useQuery(SUBNL_SECTION_CONTENT);

    if (loading) { logVar('loading From SectionSubscribeToNL'); return }
    if (error) { logVar('error From SectionSubscribeToNL'); return }
    if (!data) { logVar('!data From SectionSubscribeToNL'); return }

    const sectionSubscribeToNLData = data.sectionSubscribeToNL.sectionSubscribeToNLFields;
// console.log(sectionSubscribeToNLData);

    return (
        <section className="subscribe-section">
            <div className="pattern-layer" style={{ "backgroundImage" : "url(" + pattern19 + ")" }} ></div>
            <div className="auto-container">
                <div className="row clearfix">
    
                    {/* <!-- Image Column --> */}
                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="image">
                                <img src={sectionSubscribeToNLData.mainImage.sourceUrl} alt="" />
                            </div>
                        </div>
                    </div>
    
                    {/* <!-- Form Column --> */}
                    <div className="form-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <h2 dangerouslySetInnerHTML={{__html:sectionSubscribeToNLData.mainTitle}}></h2>
                            {/* <!-- Subscribe Form --> */}
                            <div className="subscribe-form">
                                <form method="post" action="">
                                    <div className="form-group">
                                        <input type="text" name="username" placeholder="Name" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" name="email" placeholder="Email" required />
                                    </div>
                                    <div className="form-group">
                                        <button className="theme-btn btn-style-five" type="submit" name="submit-form"><span className="txt">subscribe</span></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
        </section>
    );
};

export default SectionSubscribeToNL;