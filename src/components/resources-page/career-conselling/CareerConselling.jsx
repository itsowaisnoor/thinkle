"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Accordion from 'react-bootstrap/Accordion';
import Slider from 'react-slick/lib/slider';

const fetchImageById = (id) => {
    const imageMapping = {
        1: '/sd-1.png',
        2: '/sd-2.png',
        3: '/sd-3.png',
    };
    return imageMapping[id] || '';
};

const CareerConselling = () => {
    const [imageUrl, setImageUrl] = useState('/sd-1.png');

    const handleClick = (id) => {
        const image = fetchImageById(id);
        setImageUrl(image);
    };

    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 767,
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
            <section className='conselling'>
                <div className="container">
                    <div className="row d-lg-flex d-none">
                        <div className="col-lg-5">
                            <h1 className='f-48 ltr-5 fw-400 text-black mb-4 mb-lg-5 text-capitalize'>Is Career Counselling <br className='d-lg-block d-none' /> for you?</h1>
                            <Accordion className='custom-acco cust-acc2' defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header onClick={() => handleClick(1)}>Students & Recent Graduates</Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            For ambitious students ready to make their mark. Whether you're exploring diverse paths or aiming for that dream first job, Thinkle helps you stand out and build a foundation for lasting success.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header onClick={() => handleClick(2)}>Early Career Professionals</Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            For go-getters who refuse to settle. If you're eyeing that next big promotion or sensing it's time for a strategic career move, Thinkle helps you stay ahead in a competitive world.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header onClick={() => handleClick(3)}>Mid Career Professionals</Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            For accomplished professionals seeking their next challenge. Whether you want to advance, pivot to a new field, or find greater meaning in your work, Thinkle helps you reach new heights.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <div className="career-img">
                                <Image className='img-fluid' src={imageUrl} alt="" layout="fill" />
                            </div>
                        </div>
                    </div>

                    <div className="row d-lg-none d-flex">
                        <div className="col-12">
                            <h1 className='f-48 ltr-5 text-black mb-4 mb-lg-5'>Is Career Counselling <br className='d-lg-block d-none' /> for you?</h1>

                            <Slider  {...settings}>
                                <div>
                                    <div className="text-center">
                                        <div className="career-img">
                                            <img className='img-fluid' src="/coach-1.png" alt="" />
                                        </div>
                                        <h3 className='f-18 ltr-4 text-black'>Students & Recent Graduates</h3>
                                        <p className='f-16 ltr-4 gry-txt'>
                                            For ambitious students ready to make their mark. Whether you're exploring diverse paths or aiming for that dream first job, Thinkle helps you stand out and build a foundation for lasting success.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-center">
                                        <div className="career-img">
                                            <img className='img-fluid' src="/coach-3.png" alt="" />
                                        </div>
                                        <h3 className='f-18 ltr-4 text-black'>Early Career Professionals</h3>
                                        <p className='f-16 ltr-4 gry-txt'>
                                            For go-getters who refuse to settle. If you're eyeing that next big promotion or sensing it's time for a strategic career move, Thinkle helps you stay ahead in a competitive world.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-center">
                                        <div className="career-img">
                                            <img className='img-fluid' src="/coach-2.png" alt="" />
                                        </div>
                                        <h3 className='f-18 ltr-4 text-black'>Mid Career Professionals</h3>
                                        <p className='f-16 ltr-4 gry-txt'>
                                            For accomplished professionals seeking their next challenge. Whether you want to advance, pivot to a new field, or find greater meaning in your work, Thinkle helps you reach new heights.
                                        </p>
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

export default CareerConselling