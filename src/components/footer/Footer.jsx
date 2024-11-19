'use client';  // This tells Next.js that this component is client-side
import React, { useState } from 'react';  // Add this import statement
import Image from 'next/image'
// import React from 'react'
import JoinWaitlist from '../modal/join-waitlist/JoinWaitlist';


const Footer = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <footer className="site-footer bg-black">
                <div className="container">
                    <div className="row mb-5 pb-lg-5 gy-5 gy-lg-0">
                        <div className="col-lg-3">
                            <div className="position-relative f-logo">
                                <a className='nav-brand' href="/">
                                    <Image className="img-fluid" src="/thinkle-white-logo.png" alt="" layout="fill" />
                                    {/* <Image className="img-fluid d-lg-none d-block" src="/thinkle-white-logo.png" alt="" layout="fill" /> */}
                                </a>
                                <p className="mobile-logo-tagline">the future of career discovery</p>
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-5 py-lg-0 py-4">
                            <div className="row gy-5">
                                <div className="col-6">
                                    <ul className="ps-0 f-links">
                                        <li><a href="/about-us">About Us</a></li>
                                        <li><a href="/coaching">Career Guidance</a></li>
                                        <li><a href="https://thinkle.toptalk.world/">Resources</a></li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul className="ps-0 f-links text-md-end">
                                        <li className=''><a href='#'  onClick={() => setModalShow(true)}>Join Waitlist</a></li>
                                        <li><a href="https://thinkle.notion.site/We-re-Hiring-4e211f3c46094ca7905fa6c25fb69fcd" target='_blank'>We&apos;re Hiring!</a></li>
                                        <li className=''><a href='mailto:divyanshu@thinkle.xyz'>Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-lg-5 gy-4 gx-0 align-items-end pb-lg-1 pb-3 pe-5 pe-lg-0">
                        <div className="col-md-6">
                            <h3 className='f-20 fw-300 ltr-1 o-6 text-white mb-3 pb-lg-1'>Coming Soon...</h3>
                            <div className="row gx-3">
                                <div className="col-6 col-lg-4">
                                    <a href="#" className='p-none'>
                                        <Image className='img-fluid' src="/ap.svg" alt="" width={250} height={70} />
                                    </a>
                                </div>
                                <div className="col-6 col-lg-4">
                                    <a href="#" className='p-none'>
                                        <Image className='img-fluid' src="/gp.svg" alt="" width={250} height={70} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <ul className="social-links d-flex gap-30 align-items-center justify-content-lg-end justify-content-between ps-0 mb-0 mt-md-0 mt-1">
                                <li><a href="https://www.instagram.com/thinklehq/" target='_blank'><Image src="/insta.svg" alt="" layout='fill' /></a></li>
                                <li><a href="https://www.linkedin.com/company/thinklecareers/" target='_blank'><Image src="/linkdin.svg" alt="" layout='fill' /></a></li>
                                <li><a><Image src="/youtube.svg" alt="" layout='fill' /></a></li>
                                <li><a><Image src="/twtr.svg" alt="" layout='fill' /></a></li>
                                <li><a href="https://chat.whatsapp.com/CaJADzzVi483r7vQrI2Y6o" target='_blank'><Image src="/whatsap.svg" alt="" layout='fill' /></a></li>
                            </ul>
                        </div>
                    </div>
                    <hr className="my-3" />
                    <div className="row gy-lg-0 gy-4">
                        <div className="col-md-6">
                            <p className="f-12 text-white o-6">©2024 Thinkle Technologies Private Limited</p>
                        </div>
                        <div className="col-md-6 text-md-end">
                            <a className="f-12 text-white o-6 ltr_2 me-lg-8 d-inline-block me-8" href="#">Privacy Policy</a>
                            <a className="f-12 text-white o-6 ltr_2" href="#">Terms & Conditions</a>
                        </div>
                    </div>
                </div>
            </footer>
            <JoinWaitlist
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

export default Footer