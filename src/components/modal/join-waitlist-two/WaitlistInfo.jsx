import React from 'react'
import './WaitlistInfo.css'
import Modal from 'react-bootstrap/Modal';
import Image from 'next/image';

const WaitlistInfo = (props) => {
    return (
        <>
            <Modal
                {...props}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='join-waitlist wait-info'
            >
                <Modal.Header className='border-0 py-4 mb-lg-2' closeButton>
                    {/* <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title> */}
                </Modal.Header>
                <Modal.Body className='p-0 border-0'>
                    <div className="row g-0">
                        <div className="col-lg-6 text-center d-md-block d-none">
                            <div className="row g-0">
                                <div className="col-md-8 offset-lg-2 px-lg-3">
                                    <h1 className='text-45 fw-500 text-capitalize'>The future of Career Discovery.</h1>
                                    <p className='text-16 o-6 mb-lg-5 pb-5'>Sign up for early access to our AI-driven platform, career resources and exclusive content.</p>
                                    <div className="pt-5">
                                        <Image className="position-static w-300 h-auto img-fluid mx-auto" src="/m-portrait.svg" alt="" layout='fill' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-main bg-black h-100 d-flex flex-column justify-content-end">
                                <ul className='u-info d-flex align-items-center justify-content-center p-0'>
                                    <li><Image className="position-static cover" src="/w1.svg" alt="" layout='fill' /></li>
                                    <li><Image className="position-static cover" src="/w2.svg" alt="" layout='fill' /></li>
                                    <li><Image className="position-static cover" src="/w3.svg" alt="" layout='fill' /></li>
                                    <li><Image className="position-static cover" src="/w4.svg" alt="" layout='fill' /></li>
                                    <li><Image className="position-static cover" src="/w5.svg" alt="" layout='fill' /></li>
                                </ul>
                                <div className="d-none">
                                    <h3 className='text-white text-center text-24'>Yay! You have been added to <br /> our waitlist!</h3>
                                    <p className='text-16 o-7 ltr-5 px-lg-5 text-center'>We'll send you an email as soon as we launch. Feel free to invite others to join our waitlist so they can enjoy early access too!</p>
                                </div>
                                <div className="d-block">
                                    <h3 className='text-white text-center text-28 fw-500'>Yay, you’re on the waitlist!</h3>
                                    <p className='text-16 o-7 ltr-5 fw-300 text-center'>
                                        Thank you for making the first investment <br /> towards your career.
                                    </p>
                                    <p className='text-16 o-7 ltr-5 fw-300 text-center'>
                                        Sit tight – we’re launching soon!
                                    </p>
                                </div>
                                <div className="follow-us follow-us-tittle">
                                    <div className="follow-title"><span>Follow us on</span></div>
                                    <ul className='follow-link m-0 p-0 d-flex align-items-center justify-content-center'>
                                        <li><Image className="position-static cover" src="/insta.svg" alt="" layout='fill' /></li>
                                        <li><Image className="position-static cover" src="/linkdin.svg" alt="" layout='fill' /></li>
                                        <li><Image className="position-static cover" src="/twtr.svg" alt="" layout='fill' /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default WaitlistInfo