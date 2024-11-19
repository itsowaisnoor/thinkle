"use client"
import React from 'react'
import Slider from "react-slick";
import Image from 'next/image'
import Link from 'next/link';

const PlayBook = () => {
    var bookinfo = {
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
            <section className='play-book'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center mb-4 pb-lg-3">
                            <h2 className='text-48 text-black pb-lg-1'>Your Career Playbook.</h2>
                            <p className='text-20 text-black o-6 px-lg-3 fw-300'>
                                Shape your journey with expert insights, actionable guides, and stories that inspire.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 d-lg-block d-none">
                            <div className="row g-4">
                                <div className="col-xl-4 col-md-6">
                                    <div className="play-box">
                                        <div className="play-img">
                                            <Image className='next-img w-100 h-100 cover' src="/cards-1.png" alt="" layout="fill" />
                                        </div>
                                        <div className="play-content">
                                            <ul className="t-info ps-0 d-flex align-items-center">
                                                <li className="ltr-1 text-black ltr-p">
                                                    <Image className='position-static' src="/doc.svg" alt="" width={130} height={60} />
                                                    <span className="align-middle ps-1 text-white text-white">Community Story</span>
                                                </li>
                                                <li className="f-14 fw-300 ltr-1 ltr-s">3 min read</li>
                                            </ul>

                                            <p className='text-24 text-white'>
                                                Owning it, one day at a time.
                                            </p>
                                            <Link href='https://thinkle.toptalk.world/community-spotlight-owning-it-one-day-at-a-time/' className='d-block red-more'>
                                                <Image className='position-relative cover' src="/red-mor.svg" alt="" layout="fill" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="play-box">
                                        <div className="play-img">
                                            <Image className='next-img w-100 h-100 cover' src="/cards-2.png" alt="" layout="fill" />
                                        </div>
                                        <div className="play-content">
                                            <ul className="t-info ps-0 d-flex align-items-center text-white">
                                                <li className="ltr-1 text-black ltr-p">
                                                    <Image className='position-static' src="/doc.svg" alt="" width={130} height={60} />
                                                    <span className="align-middle ps-1 text-white">Article</span>
                                                </li>
                                                <li className="f-14 fw-300 ltr-1 ltr-s">5 min read</li>
                                            </ul>

                                            <p className='text-24 text-white'>
                                            Careers, Dating & the Chaos.
                                            </p>
                                            <Link href='https://thinkle.toptalk.world/community-spotlight-owning-it-one-day-at-a-time/' className='d-block red-more'>
                                                <Image className='position-relative cover' src="/red-mor.svg" alt="" layout="fill" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="play-box">
                                        <div className="play-img">
                                            <Image className='next-img w-100 h-100 cover' src="/cards-3.png" alt="" layout="fill" />
                                        </div>
                                        <div className="play-content">
                                            <ul className="t-info ps-0 d-flex align-items-center">
                                                <li className="ltr-1 text-black ltr-p">
                                                    <Image className='position-static' src="/doc.svg" alt="" width={130} height={60} />
                                                    <span className="align-middle ps-1 text-white text-white">Guide</span>
                                                </li>
                                                <li className="f-14 fw-300 ltr-1 ltr-s">3 min read</li>
                                            </ul>

                                            <p className='text-24 text-white'>
                                            What they don’t tell you about networking.
                                            </p>
                                            <Link href='https://thinkle.toptalk.world/community-spotlight-owning-it-one-day-at-a-time/' className='d-block red-more'>
                                                <Image className='position-relative cover' src="/red-mor.svg" alt="" layout="fill" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 d-lg-none d-block">
                            <Slider {...bookinfo}>
                                <div>
                                    <div className="play-box">
                                        <div className="play-img">
                                            <Image className='next-img w-100 h-100 cover' src="/cards-1.png" alt="" layout="fill" />
                                        </div>
                                        <div className="play-content">
                                            <ul className="t-info ps-0 d-flex align-items-center">
                                                <li className="ltr-1 text-black ltr-p">
                                                    <Image className='position-static' src="/doc.svg" alt="" width={130} height={60} />
                                                    <span className="align-middle ps-1 text-white text-white">Community Story</span>
                                                </li>
                                                <li className="f-14 fw-300 ltr-1 ltr-s">3 min read</li>
                                            </ul>

                                            <p className='text-24 text-white'>
                                                Owning it, one day at a time.
                                            </p>
                                            <Link href='https://thinkle.toptalk.world/community-spotlight-owning-it-one-day-at-a-time/' className='d-block red-more'>
                                                <Image className='position-relative cover' src="/red-mor.svg" alt="" layout="fill" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="play-box">
                                        <div className="play-img">
                                            <Image className='next-img w-100 h-100 cover' src="/cards-2.png" alt="" layout="fill" />
                                        </div>
                                        <div className="play-content">
                                            <ul className="t-info ps-0 d-flex align-items-center text-white">
                                                <li className="ltr-1 text-black ltr-p">
                                                    <Image className='position-static' src="/doc.svg" alt="" width={130} height={60} />
                                                    <span className="align-middle ps-1 text-white">Article</span>
                                                </li>
                                                <li className="f-14 fw-300 ltr-1 ltr-s">5 min read</li>
                                            </ul>

                                            <p className='text-24 text-white'>
                                            Careers, Dating & the Chaos.
                                            </p>
                                            <Link href='https://thinkle.toptalk.world/community-spotlight-owning-it-one-day-at-a-time/' className='d-block red-more'>
                                                <Image className='position-relative cover' src="/red-mor.svg" alt="" layout="fill" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="play-box">
                                        <div className="play-img">
                                            <Image className='next-img w-100 h-100 cover' src="/cards-3.png" alt="" layout="fill" />
                                        </div>
                                        <div className="play-content">
                                            <ul className="t-info ps-0 d-flex align-items-center">
                                                <li className="ltr-1 text-black ltr-p">
                                                    <Image className='position-static' src="/doc.svg" alt="" width={130} height={60} />
                                                    <span className="align-middle ps-1 text-white text-white">Guide</span>
                                                </li>
                                                <li className="f-14 fw-300 ltr-1 ltr-s">3 min read</li>
                                            </ul>

                                            <p className='text-24 text-white'>
                                            What they don’t tell you about networking.
                                            </p>
                                            <Link href='https://thinkle.toptalk.world/community-spotlight-owning-it-one-day-at-a-time/' className='d-block red-more'>
                                                <Image className='position-relative cover' src="/red-mor.svg" alt="" layout="fill" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                            <div className="text-center mt-4 d-lg-none d-none">
                                <a className='yellow-btn d-inline-block mt-lg-1'>View All Blogs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PlayBook