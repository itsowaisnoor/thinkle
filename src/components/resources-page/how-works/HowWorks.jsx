"use client"
import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';

const fetchImageById = (id) => {
    const imageMapping = {
        1: '/coaching/phone-1.png',
        2: '/coaching/phone-2.png',
        3: '/coaching/phone-3.png',
        4: '/coaching/phone-4.png',
        5: '/coaching/step-5.png',
    };
    return imageMapping[id] || '';
};

const HowWorks = () => {
    const [imageUrl, setImageUrl] = useState('/coaching/phone-1.png');

    const handleClick = (id) => {
        const image = fetchImageById(id);
        setImageUrl(image);
    };

    return (
        <>
            <section className='how-works'>
                <div className="container">
                    <div className="row align-items-lg-end">
                        <div className="col-lg-5">
                            <div className="f-20 ltr-5 text-black o-6 mb-2 text-uppercase">How it works</div>
                            <h1 className='f-48 ltr-5 text-black mb-4 mb-lg-5 fw-400'>
                                Personalised to fit <br className='d-lg-block d-none' /> your career.
                            </h1>
                            <Accordion className='custom-acco custom-acc2' defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header onClick={() => handleClick(1)}>Personalised Matching</Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            Our algorithm pairs you with a counselor whose expertise aligns perfectly with your career goals and needs.
                                        </p>
                                        <div className="career-img text-center">
                                            <img className='img-fluid' src="/coaching/phone-1.png" alt="" />
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header onClick={() => handleClick(2)}>Comprehensive Assessment</Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            Take our in-depth psychometric assessments to map out your professional identity, motivators and growth areas.
                                        </p>
                                        <div className="career-img text-center">
                                            <img className='img-fluid' src="/coaching/phone-2.png" alt="" />
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header onClick={() => handleClick(3)}>AI-powered Career Roadmap</Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            Our AI algorithm analyses your assessment results, background, and goals to generate a hyper-personalised career roadmap.
                                        </p>
                                        <div className="career-img text-center">
                                            <img className='img-fluid' src="/coaching/phone-3.png" alt="" />
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header onClick={() => handleClick(4)}>Collaborative Action Planning</Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            Work with your counselor to develop a clear, actionable plan based on your personalized roadmap.
                                        </p>
                                        <div className="career-img text-center">
                                            <img className='img-fluid' src="/coaching/phone-4.png" alt="" />
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header onClick={() => handleClick(5)}>Progress Tracking & Optimization</Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            Regular check-ins and assessments help you stay on course, with ongoing guidance to adjust your plan as needed.
                                        </p>
                                        <div className="career-img text-center">
                                            <img className='img-fluid' src="/coaching/step-5.png" alt="" />
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <div className="col-lg-6 offset-lg-1 text-lg-end d-lg-block d-none">
                            <div className="career-phone text-lg-end">
                                <img className='img-fluid cover' src={imageUrl} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HowWorks