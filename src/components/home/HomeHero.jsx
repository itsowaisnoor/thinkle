'use client';  // This tells Next.js that this component is client-side
import React, { useState } from 'react';  // Add this import statement
// import React from 'react'
import './Home.css'
import Image from 'next/image'
import JoinWaitlist from '../modal/join-waitlist/JoinWaitlist';


const HomeHero = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <section className='home-hero d-flex align-items-center justify-content-center'>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <h1 className='text-64 text-white px-lg-4'>Helping Modern India <br className='d-lg-block d-none' /> Discover Their Ideal Careers.</h1>
              <p className='text-18 text-white o-5 pb-lg-1'>At Thinkle, we blend the precision of AI algorithms with the wisdom of human experts to deliver
                career guidance that’s personalised,  impactful, and scalable.</p>
              <button className='yellow-btn mx-auto d-flex align-items-center justify-content-between' onClick={() => setModalShow(true)}>
                <i className='app-icon'> <Image className="position-static cover" src="/playstore.svg" alt="" layout='fill' /></i>
                <span className='px-2'>Explore Thinkle</span>
                <i className='app-icon'><Image className="position-static cover" src="/applestore.svg" alt="" layout='fill' /></i>
              </button>
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

export default HomeHero