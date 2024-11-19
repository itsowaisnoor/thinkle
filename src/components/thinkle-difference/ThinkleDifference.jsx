"use client"
import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick/lib/slider'

const ThinkleDifference = () => {
    var difference = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    };
    return (
        <>
            <section className='difference my-6'>
                <div className="container">
                    <div className="f-48 ltr-5 text-black fw-400 text-center mb-5 pb-lg-4">The Thinkle Difference.</div>

                    <div className="row justify-content-center gy-6 text-center d-lg-flex d-none">
                        <div className="col-lg-4">
                            <div className="value-box">
                                <i className="v-icon mx-auto">
                                    <Image src="/cc.svg" alt="" layout="fill" />
                                </i>
                                <h4 className="f-27 text-black ltr-4 fw-500">Complete Confidentiality</h4>
                                <p className="f-16 text-black ltr-4 o-6">
                                    Your privacy is our priority—every <br className='d-lg-block d-none' /> interaction remains strictly confidential.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="value-box">
                                <i className="v-icon mx-auto">
                                    <Image src="/mi.svg" alt="" layout="fill" />
                                </i>
                                <h4 className="f-27 text-black ltr-4 fw-500">Measurable Impact</h4>
                                <p className="f-16 text-black ltr-4 o-6">
                                    Track progress with our AI-driven analytics, helping <br className='d-lg-block d-none' />  you see how far you’ve come and what’s ahead
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="value-box">
                                <i className="v-icon mx-auto">
                                    <Image src="/dg.svg" alt="" layout="fill" />
                                </i>
                                <h4 className="f-27 text-black ltr-4 fw-500">On demand guidance</h4>
                                <p className="f-16 text-black ltr-4 o-6">
                                    Access personalised guidance on your terms, <br className='d-lg-block d-none' /> available whenever you’re ready for the next step.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="value-box">
                                <i className="v-icon mx-auto">
                                    <Image src="/ps.svg" alt="" layout="fill" />
                                </i>
                                <h4 className="f-27 text-black ltr-4 fw-500">Personalised Support</h4>
                                <p className="f-16 text-black ltr-4 o-6">
                                    Receive unbiased, tailored career guidance, <br className='d-lg-block d-none' /> built around your unique goals and aspirations.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="value-box">
                                <i className="v-icon mx-auto">
                                    <Image src="/ss.svg" alt="" layout="fill" />
                                </i>
                                <h4 className="f-27 text-black ltr-4 fw-500">Safe Space</h4>
                                <p className="f-16 text-black ltr-4 o-6">
                                    Explore your passions and potential in a <br className='d-lg-block d-none' /> supportive, judgement-free environment.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="d-lg-none d-block">
                        <Slider {...difference}>
                            <div>
                                <div className="value-box">
                                    <i className="v-icon mx-auto">
                                        <Image src="/cc.svg" alt="" layout="fill" />
                                    </i>
                                    <h4 className="f-27 text-black ltr-4 fw-500">Complete Confidentiality</h4>
                                    <p className="f-16 text-black ltr-4 o-6">
                                        Your privacy is our priority—every interaction remains strictly confidential.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="value-box">
                                    <i className="v-icon mx-auto">
                                        <Image src="/mi.svg" alt="" layout="fill" />
                                    </i>
                                    <h4 className="f-27 text-black ltr-4 fw-500">Measurable Impact</h4>
                                    <p className="f-16 text-black ltr-4 o-6">
                                        Track progress with our AI-driven analytics, helping you see how far you’ve come and what’s ahead
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="value-box">
                                    <i className="v-icon mx-auto">
                                        <Image src="/dg.svg" alt="" layout="fill" />
                                    </i>
                                    <h4 className="f-27 text-black ltr-4 fw-500">On demand guidance</h4>
                                    <p className="f-16 text-black ltr-4 o-6">
                                        Access personalised guidance on your terms, available whenever you’re ready for the next step.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="value-box">
                                    <i className="v-icon mx-auto">
                                        <Image src="/ps.svg" alt="" layout="fill" />
                                    </i>
                                    <h4 className="f-27 text-black ltr-4 fw-500">Personalised Support</h4>
                                    <p className="f-16 text-black ltr-4 o-6">
                                        Receive unbiased, tailored career guidance, built around your unique goals and aspirations.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="value-box">
                                    <i className="v-icon mx-auto">
                                        <Image src="/ss.svg" alt="" layout="fill" />
                                    </i>
                                    <h4 className="f-27 text-black ltr-4 fw-500">Safe Space</h4>
                                    <p className="f-16 text-black ltr-4 o-6">
                                        Explore your passions and potential in a supportive, judgement-free environment.
                                    </p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ThinkleDifference