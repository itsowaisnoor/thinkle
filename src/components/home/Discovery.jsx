"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import JoinWaitlist from '../modal/join-waitlist/JoinWaitlist';

const Discovery = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <section className='discovery-block mb-0 d-flex align-items-center'>
                <div className="container">
                    <div className="row align-items-center gy-lg-0 gy-5">
                        <div className="col-md-5 offset-md-7 text-center pb-lg-0 pb-4 order-lg-1">
                            <div className="f-45 text-white mb-3">Career Discovery, Reimagined.</div>
                            <p className='f-16 text-white o-6 fw-400 mb-4 pb-lg-0 pb-1'>Sign up for early access to our AI-driven platform, <br className='d-lg-block d-none' /> career resources and exclusive content.</p>
                            {/* <button className='join-btn'>Join the Waitlist</button> */}
                            <a className="join-btn d-inline-block" onClick={() => setModalShow(true)}>Join the Waitlist</a>
                        </div>
                        <div className="col-lg-7 col-md-8 col-10 ps-0 offset-md-2 offset-lg-0 text-end d-md-none d-block">
                            <Image className='next-img img-fluid' src="/home/hand-mobile.png" alt="" layout="fill" />
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

export default Discovery