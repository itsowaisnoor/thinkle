"use client"
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import Image from 'next/image'
import { useRouter } from 'next/navigation'; // Import useRouter



const Guidances = () => {
    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter(); // Initialize the router

    useEffect(() => {
        // Set mounted to true when the component mounts
        setIsMounted(true);
    }, []);

    const handleLearnMoreClick = () => {
        if (isMounted) {
            router.push('/coaching'); // Navigate to the desired page
        }
    };
    var guideinfo = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
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
            <section className='guides-block'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 text-center mb-lg-5">
                            <h2 className='text-48 text-black pb-lg-1 d-lg-block d-none'>One-on-One Personalised Guidance</h2>
                            <div className="d-lg-none d-block">
                                <div className="text-16 text-black o-5 text-uppercase">One-on-One</div>
                                <div className="text-34 text-black">Personalised Guidance.</div>
                            </div>
                            <p className='text-20 text-black fw-300 o-6 mb-lg-4'>
                                Whether you’re starting out, planning your next step, or making a big career  <br className='d-lg-block d-none' />change — do it more effectively with a career expert by your side.
                            </p>
                            <button className='yellow-btn d-lg-block d-none mx-auto' onClick={handleLearnMoreClick}>Learn More</button>
                            <button className='yellow-btn d-lg-none d-block fw-600 mx-auto'>Explore Coaching</button>
                        </div>
                    </div>
                    <div className="row gy-4 d-lg-flex d-none">
                        <div className="col-xl-5">
                            <div className="row gy-4">
                                <div className="col-xl-12 col-lg-6">
                                    <div className="guide-img">
                                        <Image className="position-static cover br-20" src="/home/G-one.png" alt="" layout='fill' />
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-6">
                                    <div className="guide-img">
                                        <Image className="position-static cover br-20" src="/home/G-two.png" alt="" layout='fill' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7">
                            <div className="guide-three">
                                <Image className="position-static cover br-20" src="/home/G-three.png" alt="" layout='fill' />
                            </div>
                        </div>
                    </div>

                    <div className="row d-lg-none d-flex">
                        <div className="col-12">
                            <Slider {...guideinfo}>
                                <div>
                                    <div className="guide-img">
                                        <Image className="position-static cover br-20" src="/home/GM-one.png" alt="" layout='fill' />
                                    </div>
                                </div>
                                <div>
                                    <div className="guide-img">
                                        <Image className="position-static cover br-20" src="/home/GM-two.png" alt="" layout='fill' />
                                    </div>
                                </div>
                                <div>
                                    <div className="guide-img">
                                        <Image className="position-static cover br-20" src="/home/GM-three.png" alt="" layout='fill' />
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

export default Guidances