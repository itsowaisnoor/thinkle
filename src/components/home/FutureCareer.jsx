import React from 'react'
import './Home.css'
import Image from 'next/image'

const FutureCareer = () => {
    return (
        <>
            <section className='status-quo bento-group'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center mb-4 pb-lg-3">
                            <h2 className='text-48 text-black text-capitalize pb-lg-1'>The future of career discovery.</h2>
                            <p className='text-20 text-black o-6 px-lg-3 fw-300'>
                                At Thinkle, we’re redefining career guidance with a personalised, data-driven approach <br className='d-xxl-block d-none' /> that scales with the ambitions and goals of modern India.
                            </p>
                        </div>
                    </div>
                    <div className="row pt-lg-1">
                        <div className="col-xl-8">
                            <div className="row g-4">
                                <div className="col-12">
                                    <div className="black-block pt-6 ps-6 overflow-hidden">
                                        <div className="row align-items-start">
                                            <div className="col-md-5">
                                                <div className="text-28 text-white o-9">
                                                    Hyper-Personalised <br className='d-md-block d-none'/> Career Roadmaps
                                                </div>
                                                <p className='text-14 text-white o-4 fw-300'>
                                                    Leverage AI-powered algorithms for data-backed career recommendations and roadmaps
                                                </p>
                                            </div>
                                            <div className="col-md-7">
                                                <div className="hyper-img hyper2-img">
                                                    <Image className="position-static w-100 h-100 d-none d-lg-block" src="/app-1.svg" alt="" layout='fill' />
                                                    <img className="cover d-lg-none d-block" src="/home/hyper-mobile.png" alt="" />
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 d-lg-none d-block">
                                    <div className="black-block pt-6 overflow-hidden">
                                        <div className="row align-items-start">
                                            <div className="col-12">
                                                <div className="px-6">
                                                    <div className="text-28 text-white o-9">
                                                        Psychometric Assessments
                                                    </div>
                                                    <p className='text-14 text-white o-4 fw-300'>
                                                        Unlock professional snapshots with scientifically validated tools that map core motivators, personality, & strengths
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-10 ms-auto mt-5 pt-lg-4">
                                                <div className="psy-img">
                                                    <Image className="position-static w-100 h-100 d-lg-block d-none" src="/home/psychometric.png" alt="" layout='fill' /> 
                                                    <Image className="position-static w-100 h-100 d-lg-none d-block" src="/home/psychometric-mobile.png" alt="" layout='fill' /> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="black-block py-6 px-6 h-100">
                                        <div className="row align-items-start">
                                            <div className="col-12">
                                                <div className="text-28 text-white o-9">
                                                    On-Demand Guidance
                                                </div>
                                                <p className='text-14 text-white o-4 fw-300'>
                                                    Access 1:1 personalized guidance tailored to your <br className='d-lg-block d-none' /> unique career goals, ambitions, & challenges
                                                </p>
                                            </div>
                                            <div className="col-12">
                                                <div className="demand-img">
                                                    <Image className="position-static w-100 h-100" src="/step-3.png" alt="" layout='fill' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="black-block pt-6">
                                        <div className="row align-items-start">
                                            <div className="col-12">
                                                <div className="px-6">
                                                    <div className="text-28 text-white o-9">
                                                        Unlock New Opportunities
                                                    </div>
                                                    <p className='text-14 text-white o-4 fw-300'>
                                                        Explore a world of career possibilities, from trending      <br className='d-xxl-block d-none' />      industries to educational pathways
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-10 ms-auto mt-5 pt-lg-0 pt-md-3">
                                                <div className="unlock-img">
                                                    <Image className="position-static w-100 h-100 d-lg-block d-none" src="/app-3.svg" alt="" layout='fill' />
                                                    <Image className="position-static w-100 h-100 d-lg-none d-block" src="/home/mobile-3.png" alt="" layout='fill' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 mt-4 mt-xl-0">
                            <div className="row gy-4 h-100">
                                <div className="col-12 d-lg-block d-none">
                                    <div className="black-block pt-6 overflow-hidden">
                                        <div className="row align-items-start">
                                            <div className="col-12">
                                                <div className="px-6">
                                                    <div className="text-28 text-white o-9">
                                                        Psychometric Assessments
                                                    </div>
                                                    <p className='text-14 text-white o-4 fw-300'>
                                                        Unlock professional snapshots with scientifically validated tools that map core motivators, personality, & strengths
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-10 ms-auto mt-lg-5 pt-xxl-4 pt-2">
                                                <div className="psy-img position-relative">
                                                    {/* <Image className="position-static w-100 h-100" src="/psy-2.png" alt="" layout='fill' /> */}
                                                    <img className='cover' src="/home/psychometric.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="black-block pt-6 h-100">
                                        <div className="row align-items-start">
                                            <div className="col-12">
                                                <div className="px-6 pb-6">
                                                    <div className="text-28 text-white o-9">
                                                        Beyond jobs & degrees
                                                    </div>
                                                    <p className='text-14 text-white o-4 fw-300'>
                                                        Break through the emotional and psychological barriers that might be hindering your career progress
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-12 pt-5 pt-lg-0 pt-xxl-5">
                                                <div className="beyond-img pt-5 pt-lg-0 mt-xl-5">
                                                    <Image className="position-static w-100 h-100" src="/step-11.png" alt="" layout='fill' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FutureCareer