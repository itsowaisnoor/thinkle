"use client"
import React from 'react'
import Image from 'next/image'
import Slider from "react-slick";
import RealGrowth from '@/components/home/RealGrowth';

const OurMembers = () => {
    // var settings = {
    //     dots: false,
    //     arrows: false,
    //     infinite: true,
    //     autoplay: true,
    //     speed: 5000,
    //     autoplaySpeed: 5000,
    //     slidesToShow: 3,
    //     slidesToScroll: 2,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // };
    var real = {
        dots: false,
        arrows: false,
        centerMode: true,
        centerPadding: '30px',
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
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
            <section className='our-members'>
                <div className="container-fluid px-0 overflow-hidden">
                    <div className="row gy-lg-5 gy-4 gx-0">
                        <div className="col-12 text-center pb-lg-4">
                            <h1 className="f-48 ltr-5 text-black mb-lg-3">Real Journeys,<br className='d-lg-none'></br> Real Growth.</h1>
                            <p className='f-20 ltr-4 text-black o-6'>
                            Hear from individuals we’ve had the privilege to support, and from others <br className='d-lg-block d-none' /> who believe in Thinkle’s mission & impact.
                            </p>
                        </div>
                        <div className="col-12 pt-lg-0 pt-lg-3 pt-2 review-post">
                            {/* <Slider {...settings}>
                                <div>
                                    <div className="member-block">
                                        <Image className='next-img' src="/quote.svg" alt="" layout="fill" />
                                        <p className='f-16 o-6 ltr-3 text-black mt-2 mb-lg-5 pb-lg-3'>
                                            Thinkle’s AI recommendations were spot on! And chatting with a mentor gave me the confidence I needed to switch careers
                                        </p>
                                        <div className="d-flex align-items-center">
                                            <i className='user-img'><Image className='next-img w-100 h-100 cover' src="/user.png" alt="" layout="fill" /></i>
                                            <div className='ps-2'>
                                                <div className="f-14 ltr-3 text-black fw-500 mb-1">Dipankar Datta</div>
                                                <div className="f-10 ltr-3" style={{ color: "#727272" }}>Financial Analyst</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="member-block">
                                        <Image className='next-img' src="/quote.svg" alt="" layout="fill" />
                                        <p className='f-16 o-6 ltr-3 text-black mt-2 mb-lg-5 pb-lg-3'>
                                            Thinkle’s AI recommendations were spot on! And chatting with a mentor gave me the confidence I needed to switch careers
                                        </p>
                                        <div className="d-flex align-items-center">
                                            <i className='user-img'><Image className='next-img w-100 h-100 cover' src="/user.png" alt="" layout="fill" /></i>
                                            <div className='ps-2'>
                                                <div className="f-14 ltr-3 text-black fw-500 mb-1">Dipankar Datta</div>
                                                <div className="f-10 ltr-3" style={{ color: "#727272" }}>Financial Analyst</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="member-block">
                                        <Image className='next-img' src="/quote.svg" alt="" layout="fill" />
                                        <p className='f-16 o-6 ltr-3 text-black mt-2 mb-lg-5 pb-lg-3'>
                                            Thinkle’s AI recommendations were spot on! And chatting with a mentor gave me the confidence I needed to switch careers
                                        </p>
                                        <div className="d-flex align-items-center">
                                            <i className='user-img'><Image className='next-img w-100 h-100 cover' src="/user.png" alt="" layout="fill" /></i>
                                            <div className='ps-2'>
                                                <div className="f-14 ltr-3 text-black fw-500 mb-1">Dipankar Datta</div>
                                                <div className="f-10 ltr-3" style={{ color: "#727272" }}>Financial Analyst</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="member-block">
                                        <Image className='next-img' src="/quote.svg" alt="" layout="fill" />
                                        <p className='f-16 o-6 ltr-3 text-black mt-2 mb-lg-5 pb-lg-3'>
                                            Thinkle’s AI recommendations were spot on! And chatting with a mentor gave me the confidence I needed to switch careers
                                        </p>
                                        <div className="d-flex align-items-center">
                                            <i className='user-img'><Image className='next-img w-100 h-100 cover' src="/user.png" alt="" layout="fill" /></i>
                                            <div className='ps-2'>
                                                <div className="f-14 ltr-3 text-black fw-500 mb-1">Dipankar Datta</div>
                                                <div className="f-10 ltr-3" style={{ color: "#727272" }}>Financial Analyst</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider> */}
                            <Slider {...real} className='cloud-shade'>

                                <div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="real-box">
                                                <div className="d-flex align-items-center">
                                                    <i className='user-img'><Image className='next-img w-100 h-100 cover' src="/d2.svg" alt="" layout="fill" /></i>
                                                    <div className='ps-3'>
                                                        <div className="text-18 o-9 ltr-3 text-black fw-500">Ananya Jain</div>
                                                        <div className="text-14 o-6 text-black ltr-3">Cornell University</div>
                                                    </div>
                                                </div>
                                                <p className='text-16 text-black fw-300 text-truncate-3'>
                                                    The insights into what to expect from business school helped me make a more informed decision about my master's and the direction I wanted to...
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="real-box">
                                                <div className="d-flex align-items-center">
                                                    <i className='user-img'><Image className='next-img w-100 h-100 cover' src="/d3.svg" alt="" layout="fill" /></i>
                                                    <div className='ps-3'>
                                                        <div className="text-18 o-9 ltr-3 text-black fw-500">Toyesh Saini</div>
                                                        <div className="text-14 o-6 text-black ltr-3">London Business School</div>
                                                    </div>
                                                </div>
                                                <p className='text-16 text-black fw-300 text-truncate-3'>
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
                                                        <div className="text-18 o-9 ltr-3 text-black fw-500">Ananya Jain</div>
                                                        <div className="text-14 o-6 text-black ltr-3">Cornell University</div>
                                                    </div>
                                                </div>
                                                <p className='text-16 text-black fw-300 text-truncate-3'>
                                                    I believe I am on the right track now, preparing for CAT instead of going on and on about how I wanted to have a degree from abroad. Wasn’t for me, thank you for..
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="real-box">
                                                <div className="d-flex align-items-center">
                                                    <i className='user-img'><Image className='next-img w-100 h-100 cover' src="/d5.svg" alt="" layout="fill" /></i>
                                                    <div className='ps-3'>
                                                        <div className="text-18 o-9 ltr-3 text-black fw-500">Joydeep Datta</div>
                                                        <div className="text-14 o-6 text-black ltr-3">Parent</div>
                                                    </div>
                                                </div>
                                                <p className='text-16 text-black fw-300 text-truncate-3'>
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
                                                        <div className="text-18 o-9 ltr-3 text-black fw-500">Parth</div>
                                                        <div className="text-14 o-6 text-black ltr-3">Financial Analyst</div>
                                                    </div>
                                                </div>
                                                <p className='text-16 text-black fw-300 text-truncate-3'>
                                                    I found the session really valuable. Before Thinkle, I was unsure of my next career move, but the session gave me the clarity I needed to make a decision.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="real-box">
                                                <div className="d-flex align-items-center">
                                                    <i className='user-img'><Image className='next-img w-100 h-100 cover' src="/d1.svg" alt="" layout="fill" /></i>
                                                    <div className='ps-3'>
                                                        <div className="text-18 o-9 ltr-3 text-black fw-500">Aswath S</div>
                                                        <div className="text-14 o-6 text-black ltr-3">NMIMS</div>
                                                    </div>
                                                </div>
                                                <p className='text-16 text-black fw-300 text-truncate-3'>
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

export default OurMembers