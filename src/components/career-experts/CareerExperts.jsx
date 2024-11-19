"use client"
import React from 'react'
import Image from 'next/image'
import Slider from "react-slick";

const CareerExperts = () => {
    var settings = {
        dots: false,
        arrows: true,
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
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    var experts = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };
    return (
        <>
            <section className='career-experts'>
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-10 offset-lg-1 text-center pb-lg-3">
                            <h1 className='f-48 ltr-5 text-black mb-lg-4 mb-2 pb-lg-0 pb-1'>Career Experts, Handpicked for Your Success.</h1>
                            <p className='f-20 ltr-4 text-black o-6 fw-300'>At Thinkle, we value the trust our members place in us. With fewer than 5% of counsellors accepted onto <br className='d-lg-block d-none' /> our platform, we ensure you receive the highest standard of career guidance and support.</p>
                        </div>
                        <div className="col-12 d-lg-block d-none">
                            <Slider {...settings}>
                                <div>
                                    <div className="experts-block">
                                        <div className="expert-img">
                                            <Image className='next-img w-100 h-100 cover' src="/img10.png" alt="" layout="fill" />
                                        </div>
                                        <div className="expert-content">
                                            <h6 className='f-16 ltr-4 text-black'>Dr. Aditi Tandon</h6>
                                            <p className='f-14 ltr-4 text-black o-6'>5+ Years Of Experience</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="experts-block">
                                        <div className="expert-img">
                                            <Image className='next-img w-100 h-100 cover' src="/img13.png" alt="" layout="fill" />
                                        </div>
                                        <div className="expert-content">
                                            <h6 className='f-16 ltr-4 text-black'>Rishna Bansal</h6>
                                            <p className='f-14 ltr-4 text-black o-6'>7+ Years Of Experience</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="experts-block">
                                        <div className="expert-img">
                                            <Image className='next-img w-100 h-100 cover' src="/img12.png" alt="" layout="fill" />
                                        </div>
                                        <div className="expert-content">
                                            <h6 className='f-16 ltr-4 text-black'>Dr. Damodar Rao</h6>
                                            <p className='f-14 ltr-4 text-black o-6'>2+ Years Of Experience</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="experts-block">
                                        <div className="expert-img">
                                            <Image className='next-img w-100 h-100 cover' src="/img11.png" alt="" layout="fill" />
                                        </div>
                                        <div className="expert-content">
                                            <h6 className='f-16 ltr-4 text-black'>Dr. Jayashree Gopal</h6>
                                            <p className='f-14 ltr-4 text-black o-6'>8+ Years Of Experience</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="experts-block">
                                        <div className="expert-img">
                                            <Image className='next-img w-100 h-100 cover' src="/img10.png" alt="" layout="fill" />
                                        </div>
                                        <div className="expert-content">
                                            <h6 className='f-16 ltr-4 text-black'>Dr. Aditi Tandon</h6>
                                            <p className='f-14 ltr-4 text-black o-6'>5+ Years Of Experience</p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>

                        <div className="d-lg-none d-block">
                            <Slider {...experts}>
                                <div>
                                    <div className="member-info">
                                        <div className="member-img position-relative">
                                            <Image className="cover" src="/img2.png" alt="" layout='fill' />
                                        </div>
                                        <div className="team-info pt-lg-4 pt-3">
                                            <h6 className="f-16 text-black lh-20 ltr-64">Dr. Aditi Tandon</h6>
                                            <p className="f-14 text-black o-6 ltr-4">5+ Years Of Experience</p>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <div className="member-img position-relative">
                                            <Image className="cover" src="/img2.png" alt="" layout='fill' />
                                        </div>
                                        <div className="team-info pt-lg-4 pt-3">
                                            <h6 className="f-16 text-black lh-20 ltr-64">Dr. Damodar Rao</h6>
                                            <p className="f-14 text-black o-6 ltr-4">2+ Years Of Experience</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="member-info">
                                        <div className="member-img position-relative">
                                            <Image className="cover" src="/img2.png" alt="" layout='fill' />
                                        </div>
                                        <div className="team-info pt-lg-4 pt-3">
                                            <h6 className="f-16 text-black lh-20 ltr-64">Rishna Bansal</h6>
                                            <p className="f-14 text-black o-6 ltr-4">7+ Years Of Experience</p>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <div className="member-img position-relative">
                                            <Image className="cover" src="/img2.png" alt="" layout='fill' />
                                        </div>
                                        <div className="team-info pt-lg-4 pt-3">
                                            <h6 className="f-16 text-black lh-20 ltr-64">Dr. Jayashree Gopal</h6>
                                            <p className="f-14 text-black o-6 ltr-4">8+ Years Of Experience</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="member-info">
                                        <div className="member-img position-relative">
                                            <Image className="cover" src="/img2.png" alt="" layout='fill' />
                                        </div>
                                        <div className="team-info pt-lg-4 pt-3">
                                            <h6 className="f-16 text-black lh-20 ltr-64">Dr. Aditi Tandon</h6>
                                            <p className="f-14 text-black o-6 ltr-4">5+ Years Of Experience</p>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <div className="member-img position-relative">
                                            <Image className="cover" src="/img2.png" alt="" layout='fill' />
                                        </div>
                                        <div className="team-info pt-lg-4 pt-3">
                                            <h6 className="f-16 text-black lh-20 ltr-64">Dr. Damodar Rao</h6>
                                            <p className="f-14 text-black o-6 ltr-4">2+ Years Of Experience</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="member-info">
                                        <div className="member-img position-relative">
                                            <Image className="cover" src="/img2.png" alt="" layout='fill' />
                                        </div>
                                        <div className="team-info pt-lg-4 pt-3">
                                            <h6 className="f-16 text-black lh-20 ltr-64">Rishna Bansal</h6>
                                            <p className="f-14 text-black o-6 ltr-4">7+ Years Of Experience</p>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <div className="member-img position-relative">
                                            <Image className="cover" src="/img2.png" alt="" layout='fill' />
                                        </div>
                                        <div className="team-info pt-lg-4 pt-3">
                                            <h6 className="f-16 text-black lh-20 ltr-64">Dr. Jayashree Gopal</h6>
                                            <p className="f-14 text-black o-6 ltr-4">8+ Years Of Experience</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="member-info">
                                        <div className="member-img position-relative">
                                            <Image className="cover" src="/img2.png" alt="" layout='fill' />
                                        </div>
                                        <div className="team-info pt-lg-4 pt-3">
                                            <h6 className="f-16 text-black lh-20 ltr-64">Dr. Aditi Tandon</h6>
                                            <p className="f-14 text-black o-6 ltr-4">5+ Years Of Experience</p>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <div className="member-img position-relative">
                                            <Image className="cover" src="/img2.png" alt="" layout='fill' />
                                        </div>
                                        <div className="team-info pt-lg-4 pt-3">
                                            <h6 className="f-16 text-black lh-20 ltr-64">Dr. Damodar Rao</h6>
                                            <p className="f-14 text-black o-6 ltr-4">2+ Years Of Experience</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="member-info">
                                        <div className="member-img position-relative">
                                            <Image className="cover" src="/img2.png" alt="" layout='fill' />
                                        </div>
                                        <div className="team-info pt-lg-4 pt-3">
                                            <h6 className="f-16 text-black lh-20 ltr-64">Rishna Bansal</h6>
                                            <p className="f-14 text-black o-6 ltr-4">7+ Years Of Experience</p>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <div className="member-img position-relative">
                                            <Image className="cover" src="/img2.png" alt="" layout='fill' />
                                        </div>
                                        <div className="team-info pt-lg-4 pt-3">
                                            <h6 className="f-16 text-black lh-20 ltr-64">Dr. Jayashree Gopal</h6>
                                            <p className="f-14 text-black o-6 ltr-4">8+ Years Of Experience</p>
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

export default CareerExperts