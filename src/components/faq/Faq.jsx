"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    const [seeMore, setSeeMore] = useState(false)
    return (
        <>

            <section className='faq-content'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="f-20 ltr-5 text-black o-6 mb-2 fw-400">FAQs</div>
                            <h1 className='f-48 ltr-5 text-black mb-5'>
                                Frequently Asked Questions </h1>
                        </div>
                        <div className="col-lg-7">
                            <Accordion className='custom-acco acc-2' defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>What is Thinkle?</Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            Thinkle is an AI-powered career discovery platform designed to help people make smarter, more informed career decisions.
                                        </p>
                                        <p>
                                            Combining the precision of AI algorithms with the wisdom of human experts, Thinkle delivers hyper-personalised career recommendations that connect your  unique background, strengths, and ambitions to real-world opportunities.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Who is Thinkle for ?</Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            Thinkle is built with young adults in mind—including students and early-career professionals aged 17-25—but career discovery isn’t limited by age, and neither are we.
                                        </p>
                                        <p>
                                            Whether you’re a student exploring career options, a recent graduate seeking direction, or a professional considering new paths, Thinkle is built to support anyone looking for clarity, direction, and a personalised career roadmap.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>How does Thinkle’s AI work?</Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            Thinkle leverages advanced AI/ML algorithms to analyse your unique background, skills, and motivators—benchmarking them against millions of real-world industry data points to deliver hyper-personalised career recommendations tailored to you, your career and your goals.
                                        </p>
                                        <p>
                                            Our AI doesn’t just discover what career fits you—it explains why it’s the right fit and how to get there, providing actionable steps to help you succeed.
                                        </p>
                                        <p>
                                            At Thinkle, data is at the core of everything we do—ensuring our guidance is precise, personalised, and aligned with the realities of today’s fast-evolving job market.

                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>How is Thinkle different from traditional Career Counselling?</Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            Traditional career counselling is often limited to helping school students choose academic streams or universities, overlooking how these choices connect to specific career paths, long-term outcomes and most importantly your potential and ambition.
                                        </p>
                                        <p>
                                            At Thinkle, we take a more holistic approach, blending the best of career ‘counselling’ and ‘coaching’ to address both your professional goals and the emotional and psychological factors that shape your career decisions.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>Will Thinkle replace human career counsellors or coaches?</Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            Thinkle isn’t here to replace human career counsellors or coaches. Our AI is designed to augment their work, offering data-driven insights and tailored recommendations that make career guidance more objective, personalised, and accessible.
                                        </p>
                                        <p>
                                            Thinkle handles the groundwork, so counsellors and coaches can focus on what they do best—bringing intuition, empathy, and real-world experience to guide you through your unique career journey.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                {seeMore &&
                                    <>
                                        <Accordion.Item eventKey="5">
                                            <Accordion.Header>How can I use Thinkle?</Accordion.Header>
                                            <Accordion.Body>
                                                <p>
                                                    We’re currently building our mobile app, and it’s launching soon! Join the waitlist to be one of the first to be among the first to experience the future of career discovery.
                                                </p>
                                                <p>
                                                    If you’re looking for personalised support right now, we offer 1:1 career guidance. Check out the Career Guidance page for more details and to get started!
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="6">
                                            <Accordion.Header>What problem is Thinkle solving?</Accordion.Header>
                                            <Accordion.Body>
                                                <p>
                                                    Navigating careers today is overwhelming. In India, quality career information and guidance remain out of reach for most. Traditional career guidance hasn’t evolved in the last decade—it relies heavily on human counsellors and static assessments, making the process subjective, limited in reach, and often disconnected from the realities of the modern job market.
                                                </p>
                                                <p>
                                                    The result? Millions of young people end up making life-changing decisions based on narrow, biased advice from family, friends, or random online sources, leading to confusion, missed opportunities, and untapped potential.
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </>
                                }
                            </Accordion>

                            <span
                                className='see-more mt-lg-5 mt-4 pt-2 pt-lg-4 d-block'
                                onClick={() => setSeeMore(!seeMore)}
                            >
                                {seeMore ? 'See Less' : 'See More'}
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faq