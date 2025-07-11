import React from 'react';
import HeaderTop from '../common/header/HeaderTop';
import HeaderBottomOne from '../common/header/HeaderBottomOne';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import breadcrumbBg from '../assets/images/breadcrumb/1.jpg';
import Subscribe from '../components/subscribe/Subscribe';
import Footer from '../common/footer/Footer';
import ContactWidget from '../components/widgets/ContactWidget';
import FaqAccordion from '../components/accordion/Accordion';

const Faq = () => {
    return (
        <>
            <HeaderTop />
            <HeaderBottomOne />
            <Breadcrumb 
                breadcrumbBg={breadcrumbBg} 
                heading="Frequently Asked Questions" 
                description="Your trusted partner for 24/7 Property Preservation & Interior Decoration Services" 
                currentPage="FAQ" 
            />
            <div className="faq-area pt-110 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-12">
                            <div className="faq">
                                <FaqAccordion
                                    preExpanded
                                    question="What services does LIAMSPHERE ProPreserveNG offer?"
                                    answer="We provide comprehensive Property Preservation, Maintenance, and Interior Decoration services including property inspections, emergency repairs, landscaping, winterization, interior remodeling, and aesthetic enhancements for both residential and commercial properties."
                                />
                                <FaqAccordion
                                    question="How quickly can you respond to emergency property preservation needs?"
                                    answer="Our team is available 24/7 for emergency services. We typically respond within 2-4 hours for urgent situations and can mobilize our preservation specialists immediately to secure and protect your property."
                                />
                                <FaqAccordion
                                    question="What areas do you serve for property preservation services?"
                                    answer="We currently serve the entire [Your Service Area] region with full-service property preservation. Our network of professionals ensures we can handle properties of any size or condition throughout this area."
                                />
                                <FaqAccordion
                                    question="How do you ensure quality in your interior decoration projects?"
                                    answer="Our interior decoration team follows a meticulous process: initial consultation, design conceptualization, material selection, and precise execution. We use only premium materials and work with certified professionals to deliver exceptional results that match your vision."
                                />
                                <FaqAccordion
                                    question="What maintenance programs do you offer for property owners?"
                                    answer="We offer customized maintenance programs including regular inspections, seasonal maintenance packages, and comprehensive care plans tailored to your property's specific needs and budget requirements."
                                />
                                <FaqAccordion
                                    question="Are your preservation services compliant with industry standards?"
                                    answer="Absolutely. Our services meet all Fannie Mae, Freddie Mac, FHA, VA, and lender-specific requirements. We stay updated with all industry regulations to ensure full compliance in every preservation action."
                                />
                                <FaqAccordion
                                    question="How do you handle property preservation for bank-owned properties?"
                                    answer="We follow strict REO preservation protocols including securement, debris removal, utility management, winterization (when applicable), and regular maintenance inspections to maintain property value and marketability."
                                />
                                <FaqAccordion
                                    question="Can you provide references from previous clients?"
                                    answer="We'd be happy to provide references from our satisfied clients, including banks, property managers, and individual homeowners who have used our preservation and decoration services."
                                />
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 pr-50">
                            <ContactWidget 
                                title="Need Immediate Assistance?"
                                description="Our property preservation experts are standing by to help with any urgent needs or questions about our services."
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Subscribe />
            <Footer />
        </>
    )
}

export default Faq;