import React from 'react'
import './SubHero.css'

const subHero = () => {
  return (
    <>
      <section className='sub-bnr m-0'>
        <div className="container">
          <div className="row">
            <div className="offset-lg-6 col-lg-6">
              <h1 className='text-black f-64 ltr-5 mb-lg-4 fw-400 ls-1'>Navigate your <br className='d-lg-block d-none' /> career with <br className='d-lg-block d-none' /> confidence & clarity.</h1>
              <p className='f-18 ltr-4 text-black o-6 mb-4 fw-300'>At Thinkle, we combine the precision of AI with the wisdom and <br className='d-lg-block d-none' /> empathy of human experts to deliver personalised guidance that <br className='d-lg-block d-none' /> meets your passion, goals and potential</p>
              <div className="search-input coach-search d-flex align-items-center flex-md-row flex-column mb-3">
                <input className='form-control' type="text" placeholder='Email address*' autocomplete="off"/>
                <button className='btn-two'>Explore Thinkle</button>
              </div>
              {/* <h6 className='ltr-4 text-black f-16 fw-400 ps-4 d-lg-block d-none'>Thank you for taking the first step!</h6> */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default subHero