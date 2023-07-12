import React from 'react';
import { useQuery, gql } from '@apollo/client';
import {GraphQLQueries} from "./queries/GraphQLQueries";
import { logVar } from "./utils/Utils";

const SectionTestimonials = () => {

    const TESTIMONIALS_SECTION_CONTENT = gql`query TESTIMONIALS_SECTION_CONTENT
    {
      ${GraphQLQueries.queries.sectionTestimonials}
    }`;

    const { data, loading, error } = useQuery(TESTIMONIALS_SECTION_CONTENT);

    if (loading) { logVar('loading From SectionTestimonials'); return }
    if (error) { logVar('error From SectionTestimonials'); return }
    if (!data) { logVar('!data From SectionTestimonials'); return }

    const sectionSectionTestimonialsData = data.sectionTestimonials.sectionTestimonialsFields;

    // logVar(sectionSectionTestimonialsData);

    return (
        <section className="testimonial-page-section">
            <div className="auto-container">
                { /* <!-- Sec Title --> */ }
                <div className="sec-title centered">
                    <div className="title">{sectionSectionTestimonialsData.smallTitleTop}</div>
                    <div className="separator"><span></span></div>
                    <h2>{sectionSectionTestimonialsData.mainTitle}</h2>
                </div>
                <div className="row clearfix">
                    {
                        sectionSectionTestimonialsData.testimonialCases.map((testimonial, index) => {

                            let parser = new DOMParser();

                            let parsedDocument = parser.parseFromString(testimonial.excerpt, "text/html");
                            let excerpt_text = parsedDocument.getElementsByTagName("p");

                            let parsedDocument2 = parser.parseFromString(testimonial.content, "text/html");
                            let content_text = parsedDocument2.getElementsByTagName("p");

                            return (
                                <div className="testimonial-block-two col-lg-6 col-md-12 col-sm-12" key={index}>
                                    <div className="inner-box">
                                        <div className="upper-box">
                                            <div className="quote-icon flaticon-two-quotes"></div>
                                            <div className="author-info">
                                                <h3>{testimonial.title}</h3>
                                                <div className="designation">{excerpt_text[0].innerText}</div>
                                            </div>
                                            <div className="author-image">
                                                <img src={testimonial.featuredImage.node.sourceUrl} alt="" />
                                            </div>
                                        </div>
                                        <div className="lower-box">
                                            <div className="text">{content_text[0].innerText}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default SectionTestimonials;