"use client"
import React from 'react'
import Image from 'next/image'
import Slider from "react-slick";


const RealGrowth = () => {
    var real = {
        dots: false,
        arrows: false,
        centerMode: true,
        centerPadding: '30px',
        infinite: true,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <section className='real-growth'>
                <div className="container-fluid px-0 overflow-hidden">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center mb-4 pb-lg-3">
                            <h2 className='text-48 text-black pb-lg-1'>Real Journeys,<br className='d-lg-none'></br> Real Growth.</h2>
                            <p className='text-20 text-black o-6 px-lg-3 fw-300'>
                                Hear from individuals we’ve had the privilege to support, and from others <br className='d-lg-block d-none' /> who believe in Thinkle’s mission & impact.
                            </p>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-12 review-post">
                            <Slider {...real} className='cloud-shade'>

                                <div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="real-box">
                                                <div className="d-flex align-items-center">
                                                    <i className='user-img'><Image className='next-img w-100 h-100 cover' src="/d2.svg" alt="" layout="fill" /></i>
                                                    <div className='ps-3'>
                                                        <div className="text-18 o-9 ltr-3 text-black fw-400">Ananya Jain</div>
                                                        <div className="text-14 o-6 text-black ltr-3 fw-300">Cornell University</div>
                                                    </div>
                                                </div>
                                                <p className='text-16 text-black fw-300'>
                                                    The insights into what to expect from business school helped me make a more informed decision about my master's and the direction I wanted to...
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="real-box">
                                                <div className="d-flex align-items-center">
                                                    <i className='user-img'><Image className='next-img w-100 h-100 cover' src="/d3.svg" alt="" layout="fill" /></i>
                                                    <div className='ps-3'>
                                                        <div className="text-18 o-9 ltr-3 text-black fw-400">Toyesh Saini</div>
                                                        <div className="text-14 o-6 text-black ltr-3 fw-300">London Business School</div>
                                                    </div>
                                                </div>
                                                <p className='text-16 text-black fw-300'>
                                                    Thinkle has been instrumental in helping me gain clarity in both my career path and startup journey. It is exactly what people need, offering genuine support and...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="real-box">
                                                <div className="d-flex align-items-center">
                                                    <i className='user-img'><Image className='next-img w-100 h-100 cover' src="/d4.svg" alt="" layout="fill" /></i>
                                                    <div className='ps-3'>
                                                        <div className="text-18 o-9 ltr-3 text-black fw-400">Ananya Jain</div>
                                                        <div className="text-14 o-6 text-black ltr-3 fw-300">Cornell University</div>
                                                    </div>
                                                </div>
                                                <p className='text-16 text-black fw-300'>
                                                    I believe I am on the right track now, preparing for CAT instead of going on and on about how I wanted to have a degree from abroad. Wasn’t for me, thank you for..
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="real-box">
                                                <div className="d-flex align-items-center">
                                                    <i className='user-img'><Image className='next-img w-100 h-100 cover' src="/d5.svg" alt="" layout="fill" /></i>
                                                    <div className='ps-3'>
                                                        <div className="text-18 o-9 ltr-3 text-black fw-400">Joydeep Datta</div>
                                                        <div className="text-14 o-6 text-black ltr-3 fw-300">Parent</div>
                                                    </div>
                                                </div>
                                                <p className='text-16 text-black fw-300'>
                                                    I’ve seen too many people sold false dreams by so called career experts and organisations looking to cash in on aspirations. What Thinkle’s building is a breadth...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="real-box">
                                                <div className="d-flex align-items-center">
                                                    <i className='user-img'><Image className='next-img w-100 h-100 cover' src="/d-icon.svg" alt="" layout="fill" /></i>
                                                    <div className='ps-3'>
                                                        <div className="text-18 o-9 ltr-3 text-black fw-400">Parth</div>
                                                        <div className="text-14 o-6 text-black ltr-3 fw-300">Financial Analyst</div>
                                                    </div>
                                                </div>
                                                <p className='text-16 text-black fw-300'>
                                                    I found the session really valuable. Before Thinkle, I was unsure of my next career move, but the session gave me the clarity I needed to make a decision.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="real-box">
                                                <div className="d-flex align-items-center">
                                                    <i className='user-img'><Image className='next-img w-100 h-100 cover' src="/d1.svg" alt="" layout="fill" /></i>
                                                    <div className='ps-3'>
                                                        <div className="text-18 o-9 ltr-3 text-black fw-400">Aswath S</div>
                                                        <div className="text-14 o-6 text-black ltr-3 fw-300">NMIMS</div>
                                                    </div>
                                                </div>
                                                <p className='text-16 text-black fw-300'>
                                                    As a second-year student, I struggled with indecision about my future career path. Thinkle’s guidance has been incredibly valuable, and...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RealGrowth