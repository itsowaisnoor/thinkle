import Image from 'next/image'
import React from 'react'

const ForStudents = () => {
    return (
        <>
            <section className="for-students">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="f-20 ltr-5 text-black o-5 mb-lg-3 pb-lg-1 mb-2">By Students, For Students</div>
                            <div className="f-32 ltr-5 text-black fw-400">
                                To all those who walked with us, taught us, and inspired us, <br
                                    className="d-lg-block d- d-none" />
                                this journey is as much yours, as it is ours.
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row d-lg-flex d-none justify-content-center">
                                <div className="col-11 my-lg-5">
                                    <div className="row grid-block">
                                        <div className="col-lg text-center">
                                            <Image className="img-fluid" src="/about/i1.png" alt="" layout='fill' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                                        </div>
                                        <div className="col-lg text-center">
                                            <Image className="img-fluid" src="/about/i2.png" alt="" layout='fill' />
                                        </div>
                                        <div className="col-lg text-center pe-4">
                                            <Image className="img-fluid" src="/about/i-3.png" alt="" layout='fill' />
                                        </div>
                                        <div className="col-lg text-center">
                                            <Image className="img-fluid" src="/about/i4.png" alt="" layout='fill' />
                                        </div>
                                        <div className="col-lg text-center">
                                            <Image className="img-fluid" src="/about/i5.png" alt="" layout='fill' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="row grid-block">
                                        <div className="col-lg-3 text-center">
                                            <Image className="img-fluid" src="/about/i-6.png" alt="" layout='fill' />
                                        </div>
                                        <div className="col-lg-3 text-center">
                                            <Image className="img-fluid" src="/about/i7.svg" alt="" layout='fill' />
                                        </div>
                                        <div className="col-lg-3 text-center">
                                            <Image className="img-fluid" src="/about/i8.png" alt="" layout='fill' />
                                        </div>
                                        <div className="col-lg-3 text-center">
                                            <Image className="img-fluid" src="/about/i9.png" alt="" layout='fill' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row d-lg-none d-flex justify-content-center mt-7">
                                <div className="col-12">
                                    <div className="row grid-block align-items-center">
                                        <div className="col-4 text-center">
                                            <img className="img-fluid" src="/about/i1.png" alt="" />
                                        </div>
                                        <div className="col pe-0 text-center">
                                            <img className="img-fluid" src="/about/i-3.png" alt="" />
                                        </div>
                                        <div className="col-3 text-center d-flex align-items-center">
                                            <div className="px-2 mt-1 lbs-top">
                                                <img className="img-fluid" src="/about/i2.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-11 my-lg-5">
                                    <div className="row grid-block align-items-center gx-4">
                                        <div className="col text-center">
                                            <img className="img-fluid" src="/about/i5.png" alt="" />
                                        </div>
                                        <div className="col-6 text-center">
                                            <img className="img-fluid" src="/about/i4.png" alt="" />
                                        </div>

                                        <div className="col text-center">
                                            <img className="img-fluid" src="/about/i-6.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-10">
                                    <div className="row grid-block align-items-center gx-4">
                                        <div className="col-3 text-center">
                                            <img className="img-fluid" src="/about/i7.svg" alt="" />
                                        </div>
                                        <div className="col-4 pe-4 text-center">
                                            <img className="img-fluid" src="/about/i8.png" alt="" />
                                        </div>
                                        <div className="col-5 px-0 text-center">
                                            <img className="img-fluid" src="/about/i9.png" alt="" />
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

export default ForStudents