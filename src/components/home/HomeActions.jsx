import React from 'react'

const HomeActions = () => {
    return (
        <>
            <section className='actions-block d-flex align-items-center justify-content-center'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="f-48 ltr-5 text-white mb-lg-3 mb-2">Turn your Ambitions into Action.</div>
                            <p className='f-20 ltr-4 text-white o-6 mb-0 fw-300'>Take the first step toward your dream career with expert guidance and free assessments.</p>
                            <div className="search-input d-flex align-items-center flex-md-row flex-column">
                                <input className='form-control' type="text" placeholder='Email address*' />
                                {/* <button className='btn-two fw-500'>Find your Counsellor</button> */}
                                <button className='btn-two fw-500'>Book a Session</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeActions