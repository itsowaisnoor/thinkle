"use client"
import React from 'react'
import Slider from "react-slick";
import './Home.css'

const StatusQuo = () => {
    var bookinfo = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <section className='status-quo'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center main-title">
                            <h2 className='text-48 text-black pb-lg-1'>Challenging The Status Quo.</h2>
                            <p className='text-20 text-black o-6 px-lg-3 fw-300'>The career guidance landscape is broken—outdated, subjective, and inaccessible—leaving many to navigate a complex, overwhelming world without clear direction.</p>
                        </div>
                    </div>
                    <div className="row d-lg-flex d-none">
                        <div className="col-md-4 text-center">
                            <div className="text-80 t1-clr">93%</div>
                            <p className='text-16 text-black fw-300'>
                                Indian students know only 7 career options. The <br /> future of millions limited to just seven choices.
                            </p>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="text-80 t1-clr fw-500 sm-text">700 <span className='fw-400'>million</span></div>
                            <p className='text-16 text-black fw-300'>
                                under the age of 25. A generation left to gamble <br className='d-lg-block d-none' />
                                their future on trial & error, relying on luck & chance.
                            </p>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="text-80 t1-clr">1 in 2</div>
                            <p className='text-16 text-black fw-300'>
                                graduates are considered unemployable. Years  <br className='d-lg-block d-none' />
                                of education, yet unprepared for the real world.
                            </p>
                        </div>
                    </div>

                    <div className="row d-lg-none d-flex">
                        <div className="col-12">
                            <Slider {...bookinfo}>
                                <div>
                                    <div className="text-80 t1-clr">93%</div>
                                    <p className='text-16 text-black fw-300'>
                                        Indian students know only 7 career options. The future of millions limited to just seven choices.
                                    </p>
                                </div>
                                <div>
                                    <div className="text-80 t1-clr fw-500 sm-text">700 <span className='fw-400'>million</span></div>
                                    <p className='text-16 text-black fw-300'>
                                        under the age of 25. A generation left to gamble <br className='d-lg-block d-none' />
                                        their future on trial & error, relying on luck & chance.
                                    </p>
                                </div>
                                <div>
                                    <div className="text-80 t1-clr">1 in 2</div>
                                    <p className='text-16 text-black fw-300'>
                                        graduates are considered unemployable. Years  <br className='d-lg-block d-none' />
                                        of education, yet unprepared for the real world.
                                    </p>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default StatusQuo