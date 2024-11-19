"use client"
import Image from 'next/image'
import React from 'react'
import Slider from "react-slick";

const OurValue = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            }
          ]
    };
    return (
        <>
            <section className="our-values">
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-xl-5 pe-xl-0">
                            <div className="f-20 ltr-5 text-black o-5 mb-lg-3 mb-2">Our Values</div>
                            <div className="f-29 ltr-5 text-black fw-400">Driven by Purpose, Guided by <br className="d-lg-block d-none" />
                                Values.</div>
                        </div>
                        <div className="col-xl-7">
                            <div className="row g-lg-6 d-lg-flex d-none">
                                <div className="col-lg-6 col-md-4">
                                    <div className="value-box">
                                        <i className="v-icon">
                                            <Image src="/y1.svg" alt="" layout="fill" />
                                        </i>
                                        <h4 className="f-27 text-black ltr-4 fw-500">Authenticity</h4>
                                        <p className="f-16 text-black ltr-4">
                                            We operate with transparency and integrity, delivering honest, unbiased guidance
                                            that cuts through the noise and stays true to our mission.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-4">
                                    <div className="value-box">
                                        <i className="v-icon">
                                            <Image src="/y2.svg" alt="" layout="fill" />
                                        </i>
                                        <h4 className="f-27 text-black ltr-4 fw-500">Ambition</h4>
                                        <p className="f-16 text-black ltr-4">
                                            We believe in aiming high. Thinkle is built to inspire and support individuals
                                            in reaching their full potential, no matter how ambitious their goals.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-4">
                                    <div className="value-box">
                                        <i className="v-icon">
                                            <Image src="/y3.svg" alt="" layout="fill" />
                                        </i>
                                        <h4 className="f-27 text-black ltr-4 fw-500">Innovation</h4>
                                        <p className="f-16 text-black ltr-4">
                                            We challenge traditional approaches to career guidance, using cutting-edge
                                            technology to deliver dynamic, personalised insights that evolves with the
                                            changing world.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-4">
                                    <div className="value-box">
                                        <i className="v-icon">
                                            <Image src="/y4.svg" alt="" layout="fill" />
                                        </i>
                                        <h4 className="f-27 text-black ltr-4 fw-500">Inclusivity</h4>
                                        <p className="f-16 text-black ltr-4">
                                            We are committed to ensuring everyone has access to opportunities, regardless of
                                            their background. We believe in leveling the playing field for all.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-4">
                                    <div className="value-box">
                                        <i className="v-icon">
                                            <Image src="/y5.svg" alt="" layout="fill" />
                                        </i>
                                        <h4 className="f-27 text-black ltr-4 fw-500">Empowerment</h4>
                                        <p className="f-16 text-black ltr-4">
                                            We provide the tools and confidence for people to take control of their careers,
                                            helping them make informed decisions aligned with their strengths and ambitions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-lg-none d-block">
                                <Slider {...settings}>
                                    <div>
                                        <div className="value-box">
                                            <i className="v-icon">
                                                <Image src="/y1.svg" alt="" layout="fill" />
                                            </i>
                                            <h4 className="f-27 text-black ltr-4 fw-500">Authenticity</h4>
                                            <p className="f-16 text-black ltr-4">
                                                We operate with transparency and integrity, delivering honest, unbiased
                                                guidance
                                                that cuts through the noise and stays true to our mission.
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="value-box">
                                            <i className="v-icon">
                                                <Image src="/y2.svg" alt="" layout="fill" />
                                            </i>
                                            <h4 className="f-27 text-black ltr-4 fw-500">Ambition</h4>
                                            <p className="f-16 text-black ltr-4">
                                                We believe in aiming high. Thinkle is built to inspire and support
                                                individuals
                                                in reaching their full potential, no matter how ambitious their goals.
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="value-box">
                                            <i className="v-icon">
                                                <Image src="/y3.svg" alt="" layout="fill" />
                                            </i>
                                            <h4 className="f-27 text-black ltr-4 fw-500">Innovation</h4>
                                            <p className="f-16 text-black ltr-4">
                                                We challenge traditional approaches to career guidance, using cutting-edge
                                                technology to deliver dynamic, personalised insights that evolves with the
                                                changing world.
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="value-box">
                                            <i className="v-icon">
                                                <Image src="/y4.svg" alt="" layout="fill" />
                                            </i>
                                            <h4 className="f-27 text-black ltr-4 fw-500">Inclusivity</h4>
                                            <p className="f-16 text-black ltr-4">
                                                We are committed to ensuring everyone has access to opportunities,
                                                regardless of
                                                their background. We believe in leveling the playing field for all.
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="value-box">
                                            <i className="v-icon">
                                                <Image src="/y5.svg" alt="" layout="fill" />
                                            </i>
                                            <h4 className="f-27 text-black ltr-4 fw-500">Empowerment</h4>
                                            <p className="f-16 text-black ltr-4">
                                                We provide the tools and confidence for people to take control of their
                                                careers,
                                                helping them make informed decisions aligned with their strengths and
                                                ambitions.
                                            </p>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurValue