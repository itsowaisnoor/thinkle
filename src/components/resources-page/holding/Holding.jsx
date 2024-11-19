"use client"
import React from 'react'
import FarmerMotion from '@/components/farmer-motion/FarmerMotion'
// import Image from 'next/image'

const Holding = () => {
    return (
        <>
            <section className='hoding-content'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className='f-48 ltr-5 text-black mb-3'>What’s Holding You Back?</h1>
                            <p className='f-20 ltr-4 lh-30 text-black o-6'>
                                'Am I good enough?' 'Why does everyone else have it figured out but me?' We've all been there. At Thinkle, <br className='d-lg-block d-none' /> we take a holistic approach that looks beyond jobs and degrees—because your career is more than that.
                            </p>
                        </div>
                        <div className="col-12">
                            {/* <ul className='tags-list'>
                                <li><span>Lack of Motivation</span></li>
                                <li><span>Fear of Failure</span></li>
                                <li><Image className='next-img' src="/icon1.svg" alt="" layout="fill" /></li>
                                <li><span>Financial Stress</span></li>
                                <li><span>Burnout</span></li>
                                <li><span>Imposter Syndrome</span></li>
                                <li><Image className='next-img' src="/icon2.svg" alt="" layout="fill" /></li>
                                <li><span>Lack of direction</span></li>
                                <li><span>Job Stress</span></li>
                                <li><Image className='next-img' src="/icon3.svg" alt="" layout="fill" /></li>
                                <li><span>Procrastination</span></li>
                                <li><Image className='next-img' src="/icon4.svg" alt="" layout="fill" /></li>
                                <li><span>Career Anxiety</span></li>
                                <li><Image className='next-img' src="/icon5.svg" alt="" layout="fill" /></li>
                                <li><span>Peer pressure</span></li>
                                <li><Image className='next-img' src="/icon6.svg" alt="" layout="fill" /></li>
                                <li><span>Perfectionism</span></li>
                                <li><span>Self-doubt</span></li>
                            </ul> */}
                            {/* <FarmerMotion /> */}
                            <div className="pills-img mt-5 pt-lg-5">
                                <img className='img-fluid d-md-block d-none' src="/Pills-web.png" alt="" />
                                <img className='img-fluid d-md-none d-block' src="/Pills-mobile.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Holding