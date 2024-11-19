"use client"
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import Slider from "react-slick";

const OurTeam = () => {
    var settings = {
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
            <section className="our-team">
                <div className="container">
                    <div className="row gy-lg-5 gy-3">
                        <div className="col-12">
                            <div className="f-20 ltr-5 text-black o-6 mb-lg-3 mb-2">Our Team</div>
                            <div className="f-40 ltr-5 text-black fw-400">The team that make things happen.</div>
                        </div>
                        <div className="col-12 d-lg-block d-none">
                            <div className="row gy-lg-6 gx-lg-5 g-4">
                                <div className="col-xl-3 col-md-4">
                                    <div className="member-info">
                                        <div className="member-img position-relative">
                                            <Image className="cover" src="/about/divyanshu.svg" alt="" layout='fill' />
                                            <Link target='_blank' href='https://www.linkedin.com/in/divyanshugupta14/'
                                                className="linkedin-link position-absolute p-3">
                                                <Image src="/linkedin.svg" alt="" layout='fill' />
                                            </Link>
                                        </div>
                                        <div className="team-info">
                                            <h6 className="f-16 text-black lh-20 ltr-64">Divyanshu Gupta</h6>
                                            <p className="f-14 text-black o-6 ltr-4">Co-Founder &amp; CEO</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-4">
                                    <div className="member-info">
                                        <div className="member-img position-relative">
                                            <Image className="cover" src="/about/jiya.svg" alt="" layout='fill' />
                                            <Link target='_blank' href='https://www.linkedin.com/in/jiyagoel/'
                                                className="linkedin-link position-absolute p-3">
                                                <Image src="/linkedin.svg" alt="" layout='fill' />
                                            </Link>
                                        </div>
                                        <div className="team-info">
                                            <h6 className="f-16 text-black lh-20 ltr-64">Jiya Goel</h6>
                                            <p className="f-14 text-black o-6 ltr-4">Co-Founder &amp; COO</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-4">
                                    <div className="h-100 d-flex align-items-center justify-content-center text-center">
                                        <p className="f-20 ltr-4 text-black pb-5 px-4 source">&quot;We&apos;re not just building a product; we’re
                                            building futures.&quot;</p>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-4">
                                    <div className="member-info">
                                        <div className="member-img position-relative">
                                            <Image className="cover" src="/about/ritesh.svg" alt="" layout='fill' />
                                            <Link target='_blank'
                                                href='https://www.linkedin.com/in/riteshchoudhary1412/'
                                                className="linkedin-link position-absolute p-3">
                                                <Image src="/linkedin.svg" alt="" layout='fill' />
                                            </Link>
                                        </div>
                                        <div className="team-info">
                                            <h6 className="f-16 text-black lh-20 ltr-64">Ritesh Choudhary</h6>
                                            <p className="f-14 text-black o-6 ltr-4">Lead Data Scientist</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-4">
                                    <div className="member-info">
                                        <div className="member-img position-relative">
                                            <Image className="cover" src="/about/arushi.svg" alt="" layout='fill' />
                                            <Link target='_blank'
                                                href='https://www.linkedin.com/in/arushigupta311/'
                                                className="linkedin-link position-absolute p-3">
                                                <Image src="/linkedin.svg" alt="" layout='fill' />
                                            </Link>
                                        </div>
                                        <div className="team-info">
                                            <h6 className="f-16 text-black lh-20 ltr-64">Arushi Gupta</h6>
                                            <p className="f-14 text-black o-6 ltr-4">Lead Counselling Psychologist</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-4">
                                    <div className="h-100 d-flex align-items-center justify-content-center text-center">
                                        <p className="f-20 ltr-4 text-black pb-5 px-4 source">
                                            &quot;Unlocking possibilities one day at a time.&quot;</p>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-4">
                                    <div className="member-info">
                                        <div className="member-img position-relative">
                                            <Image className="cover" src="/about/dipankar.svg" alt="" layout='fill' />
                                            <Link target='_blank'
                                                href='https://www.linkedin.com/in/dipankar-datta-product-designer/'
                                                className="linkedin-link position-absolute p-3">
                                                <Image src="/linkedin.svg" alt="" layout='fill' />
                                            </Link>
                                        </div>
                                        <div className="team-info">
                                            <h6 className="f-16 text-black lh-20 ltr-64">Dipankar Datta</h6>
                                            <p className="f-14 text-black o-6 ltr-4">Senior Product Designer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-4">
                                    <div className="member-info">
                                        <div className="member-img position-relative">
                                            <Image className="cover" src="/about/nitika.svg" alt="" layout='fill' />
                                            <Link target='_blank'
                                                href='https://www.linkedin.com/in/nitika-arora/ '
                                                className="linkedin-link position-absolute p-3">
                                                <Image src="/linkedin.svg" alt="" layout='fill' />
                                            </Link>
                                        </div>
                                        <div className="team-info">
                                            <h6 className="f-16 text-black lh-20 ltr-64">Nitika Arora</h6>
                                            <p className="f-14 text-black o-6 ltr-4">Chief Psychometrician</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-4">
                                    <div className="member-info">
                                        <div className="member-img position-relative">
                                            <Image className="cover" src="/about/shweta.svg" alt="" layout='fill' />
                                            <Link target='_blank'
                                                href='https://www.linkedin.com/in/shweta-sharma-71b3b2192/'
                                                className="linkedin-link position-absolute p-3">
                                                <Image src="/linkedin.svg" alt="" layout='fill' />
                                            </Link>
                                        </div>
                                        <div className="team-info">
                                            <h6 className="f-16 text-black lh-20 ltr-64">Shweta Sharma</h6>
                                            <p className="f-14 text-black o-6 ltr-4">Senior Counselling Psychologist</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-4">
                                    <div className="member-info">
                                        <div className="member-img position-relative">
                                            <Image className="cover" src="/about/krishnapriya.svg" alt="" layout='fill' />
                                            <Link target='_blank'
                                                href='https://www.linkedin.com/in/krishnapriya-j-01b6301bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
                                                className="linkedin-link position-absolute p-3">
                                                <Image src="/linkedin.svg" alt="" layout='fill' />
                                            </Link>
                                        </div>
                                        <div className="team-info">
                                            <h6 className="f-16 text-black lh-20 ltr-64">Krishnapriya J</h6>
                                            <p className="f-14 text-black o-6 ltr-4">Content Marketing Manager</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-4">
                                    <div className="member-info">
                                        <div className="member-img position-relative">
                                            <Image className="cover" src="/about/Amit.svg" alt="" layout='fill' />
                                            <Link target='_blank'
                                                href='https://www.linkedin.com/in/amit-sarkar-8551131a4/'
                                                className="linkedin-link position-absolute p-3">
                                                <Image src="/linkedin.svg" alt="" layout='fill' />
                                            </Link>
                                        </div>
                                        <div className="team-info">
                                            <h6 className="f-16 text-black lh-20 ltr-64">Amit Sarkar</h6>
                                            <p className="f-14 text-black o-6 ltr-4">Junior Data Scientist</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-4">
                                    <div className="h-100 d-flex align-items-center justify-content-center text-center">
                                        <p className="f-20 ltr-4 text-black pb-5 px-4 source">
                                            &quot;Our mission? Empowering you to discover your path and thrive.&quot;
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 d-lg-none d-block">
                            <Slider {...settings}>
                                <div>
                                    <div className="member-info info2">
                                        <div className="member-img position-relative member-box">
                                            <Image className="cover" src="/about/divyanshu1.svg" alt="" layout='fill' />
                                            <Link target='_blank' href='https://www.linkedin.com/in/divyanshugupta14/'
                                                className="linkedin-link position-absolute p-3">
                                                <Image src="/linkedin.svg" alt="" layout='fill' />
                                            </Link>
                                        </div>
                                        <div className="team-info">
                                            <h6 className="f-16 text-black lh-20 ltr-64">Divyanshu Gupta</h6>
                                            <p className="f-14 text-black o-6 ltr-4">Co-Founder &amp; CEO</p>
                                        </div>
                                    </div>
                                    <div className="h-300 d-flex align-items-center justify-content-center text-center">
                                        <p className="f-20 ltr-4 text-black pb-5 px-4 source">&quot;We&apos;re not just building a product; we’re
                                            building futures.&quot;</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="member-info info2">
                                        <div className="member-img position-relative">
                                            <Image className="cover" src="/about/jiya.svg" alt="" layout='fill' />
                                            <Link target='_blank' href='https://www.linkedin.com/in/jiyagoel/'
                                                className="linkedin-link position-absolute p-3">
                                                <Image src="/linkedin.svg" alt="" layout='fill' />
                                            </Link>
                                        </div>
                                        <div className="team-info">
                                            <h6 className="f-16 text-black lh-20 ltr-64">Jiya Goel</h6>
                                            <p className="f-14 text-black o-6 ltr-4">Co-Founder &amp; COO</p>
                                        </div>
                                    </div>
                                    <div className="member-info info2">
                                        <div className="member-img position-relative">
                                            <Image className="cover" src="/about/ritesh1.svg" alt="" layout='fill' />
                                            <Link target='_blank'
                                                href='https://www.linkedin.com/in/riteshchoudhary1412/'
                                                className="linkedin-link position-absolute p-3">
                                                <Image src="/linkedin.svg" alt="" layout='fill' />
                                            </Link>
                                        </div>
                                        <div className="team-info">
                                            <h6 className="f-16 text-black lh-20 ltr-64">Ritesh Choudhary</h6>
                                            <p className="f-14 text-black o-6 ltr-4">Lead Data Scientist</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="member-info info2">
                                        <div className="member-img position-relative">
                                            <Image className="cover" src="/about/arushi1.svg" alt="" layout='fill' />
                                            <Link target='_blank'
                                                href='https://www.linkedin.com/in/arushigupta311/'
                                                className="linkedin-link position-absolute p-3">
                                                <Image src="/linkedin.svg" alt="" layout='fill' />
                                            </Link>
                                        </div>
                                        <div className="team-info">
                                            <h6 className="f-16 text-black lh-20 ltr-64">Arushi Gupta</h6>
                                            <p className="f-14 text-black o-6 ltr-4">Lead Psychologist</p>
                                        </div>
                                    </div>
                                    <div className="member-info info2">
                                        <div className="member-img position-relative">
                                            <Image className="cover" src="/about/dipankar1.svg" alt="" layout='fill' />
                                            <Link target='_blank'
                                                href='https://www.linkedin.com/in/dipankar-datta-product-designer/'
                                                className="linkedin-link position-absolute p-3">
                                                <Image src="/linkedin.svg" alt="" layout='fill' />
                                            </Link>
                                        </div>
                                        <div className="team-info">
                                            <h6 className="f-16 text-black lh-20 ltr-64">Dipankar Datta</h6>
                                            <p className="f-14 text-black o-6 ltr-4">Senior Product Designer</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="h-300 d-flex align-items-center justify-content-center text-center post2">
                                        <p className="f-20 ltr-4 text-black pb-5 px-4 source">“Unlocking possibilities, one day at a time.”</p>
                                    </div>
                                    <div className="member-info info2">
                                        <div className="member-img position-relative">
                                            <Image className="cover" src="/about/nitika1.svg" alt="" layout='fill' />
                                            <Link target='_blank'
                                                href='https://www.linkedin.com/in/nitika-arora/ '
                                                className="linkedin-link position-absolute p-3">
                                                <Image src="/linkedin.svg" alt="" layout='fill' />
                                            </Link>
                                        </div>
                                        <div className="team-info">
                                            <h6 className="f-16 text-black lh-20 ltr-64">Nitika Arora</h6>
                                            <p className="f-14 text-black o-6 ltr-4">Chief Psychometrician</p>
                                        </div>
                                    </div>
                                </div>


                                <div>
                                    <div className="member-info info2">
                                        <div className="member-img position-relative">
                                            <Image className="cover" src="/about/shweta1.svg" alt="" layout='fill' />
                                            <Link target='_blank'
                                                href='https://www.linkedin.com/in/shweta-sharma-71b3b2192/'
                                                className="linkedin-link position-absolute p-3">
                                                <Image src="/linkedin.svg" alt="" layout='fill' />
                                            </Link>
                                        </div>
                                        <div className="team-info">
                                            <h6 className="f-16 text-black lh-20 ltr-64">Shweta Sharma</h6>
                                            <p className="f-14 text-black o-6 ltr-4">Senior  Psychologist</p>
                                        </div>
                                    </div>
                                    <div className="member-info info2">
                                        <div className="member-img position-relative">
                                            <Image className="cover" src="/about/Amit1.svg" alt="" layout='fill' />
                                            <Link target='_blank'
                                                href='https://www.linkedin.com/in/amit-sarkar-8551131a4/'
                                                className="linkedin-link position-absolute p-3">
                                                <Image src="/linkedin.svg" alt="" layout='fill' />
                                            </Link>
                                        </div>
                                        <div className="team-info">
                                            <h6 className="f-16 text-black lh-20 ltr-64">Amit Sarkar</h6>
                                            <p className="f-14 text-black o-6 ltr-4">Junior Data Scientist</p>
                                        </div>
                                    </div>
                                </div>


                            <div>
                                <div className="member-info info2">
                                        <div className="member-img position-relative">
                                            <Image className="cover" src="/about/krishnapriya1.svg" alt="" layout='fill' />
                                            <Link target='_blank'
                                                href='https://www.linkedin.com/in/krishnapriya-j-01b6301bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
                                                className="linkedin-link position-absolute p-3">
                                                <Image src="/linkedin.svg" alt="" layout='fill' />
                                            </Link>
                                        </div>
                                        <div className="team-info">
                                            <h6 className="f-16 text-black lh-20 ltr-64">Krishnapriya J</h6>
                                            <p className="f-14 text-black o-6 ltr-4">Content Marketing Manager</p>
                                        </div>
                                    </div>
                                    <div className="h-300 d-flex align-items-center justify-content-center text-center">
                                        <p className="f-20 ltr-4 text-black pb-5 px-4 source">“Our mission? Empowering you to discover your path and thrive.”</p>
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

export default OurTeam