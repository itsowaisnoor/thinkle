"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import JoinWaitlist from '../modal/join-waitlist/JoinWaitlist';

const CareerDiscovery = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <section className='discovery-block disc-2 mb-0'>
                <div className="container">
                    <div className="row align-items-start gy-lg-0 gy-5">
                        <div className="col-lg-5 text-center pb-lg-0 pb-4">
                            <div className="f-45 text-white mb-3 mt-lg-4">Career Discovery,<br className='d-sm-block d-none'/> Reimagined.</div>
                            <p className='f-16 text-white o-6 fw-300 mb-4 pb-lg-0 pb-1'>Sign up for early access to our AI-driven platform, <br className='d-md-block d-none' /> career resources and exclusive content.</p>
                            {/* <button className='join-btn'>Join the Waitlist</button> */}
                            <a className="join-btn d-inline-block" onClick={() => setModalShow(true)}>Join the Waitlist</a>
                        </div>
                        <div className="col-xl-4 offset-xl-2 px-lg-0 col-lg-5 offset-lg-2 col-8 offset-2 text-end disc2-img pt-lg-0 pt-4">
                            <img className='cover' src="/coaching/desert-portrait.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <JoinWaitlist
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

export default CareerDiscovery