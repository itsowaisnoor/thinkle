import React, { useState } from 'react'
import './JoinWaitlist.css'
import Modal from 'react-bootstrap/Modal';
import Image from 'next/image';
import WaitlistInfo from '../join-waitlist-two/WaitlistInfo';
import { Formik } from 'formik';
import Select from 'react-select'

const options = [
    // { value: 'Select an option', label: 'Select an option' },
    { value: 'Pursuing a Bachelor’s Degree', label: 'Pursuing a Bachelor’s Degree' },
    { value: 'Pursuing a Master’s Degree', label: 'Pursuing a Master’s Degree' },
    { value: 'Pursuing a Doctoral Degree', label: 'Pursuing a Doctoral Degree' },
    { value: 'Seeking a Job/Internship', label: 'Seeking a Job/Internship' },
    { value: 'Employed in a Job/Profession', label: 'Employed in a Job/Profession' },
    { value: 'Self-Employed/Freelancer', label: 'Self-Employed/Freelancer' },
    { value: 'On a Career Break', label: 'On a Career Break' }

]

const JoinWaitlist = (props) => {

    const [joinShow, setJoinShow] = useState(false);
    return (
        <>
            <Modal
                {...props}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='join-waitlist'
            >
                <Modal.Header className='border-0 py-0 mb-lg-0' closeButton>
                    {/* <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title> */}
                </Modal.Header>
                <Modal.Body className='p-0 border-0'>
                    <div className="row g-0">
                        <div className="col-lg-6 text-center d-lg-block d-none">
                            <div className="row g-0">
                                <div className="col-md-8 offset-lg-2 px-lg-3">
                                    <h1 className='text-45 fw-500 text-capitalize'>The future of Career Discovery.</h1>
                                    <p className='text-16 o-6 mb-lg-5 pb-5'>Sign up for early access to our AI-driven platform, career resources and exclusive content.</p>
                                    <div className="pt-5 mob-image">
                                        <Image className="position-static w-300 h-auto img-fluid mx-auto" src="/m-portrait.svg" alt="" layout='fill' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-main bg-black h-100">
                                <h2 className='text-white text-center text-36 fw-500'>Join Waitlist</h2>
                                <Formik
                                    initialValues={{ firstName: '', lastName: '', email: '', careerJourney: '' }}
                                    validate={values => {
                                        const errors = {};
                                        if (!values.firstName) {
                                            errors.firstName = 'Oops, this field can’t be empty';
                                        }
                                        if (!values.lastName) {
                                            errors.lastName = 'Oops, this field can’t be empty';
                                        }
                                        if (!values.email) {
                                            errors.email = 'Oops, this field can’t be empty';
                                        } else if (
                                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                        ) {
                                            errors.email = 'Invalid email address';
                                        }
                                        if (!values.careerJourney) {
                                            errors.careerJourney = 'Oops, this field can’t be empty';
                                        }
                                        return errors;
                                    }}
                                    onSubmit={(values, { setSubmitting }) => {
                                        console.log('Values')
                                        setSubmitting(false);

                                    }}
                                >
                                    {({
                                        values,
                                        errors,
                                        touched,
                                        handleChange,
                                        handleBlur,
                                        handleSubmit,
                                        isSubmitting,
                                        setFieldValue
                                    }) => (
                                        <form onSubmit={handleSubmit} className='waitlist-form row gy-4'>
                                            <div className="col-md-6">
                                                <label className="form-label">First name</label>
                                                <div className="position-relative">
                                                    <input
                                                        type="text"
                                                        name="firstName"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.firstName}
                                                        className={`form-control ${errors.firstName && touched.firstName ? 'error-input' : ''}`}
                                                        placeholder='John'
                                                    />
                                                    {errors.firstName && touched.firstName && <div className="error">{errors.firstName}</div>}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">Last name</label>
                                                <div className="position-relative">
                                                    <input
                                                        type="text"
                                                        name="lastName"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.lastName}
                                                        className={`form-control ${errors.lastName && touched.lastName ? 'error-input' : ''}`}
                                                        placeholder='Doe'
                                                    />
                                                    {errors.lastName && touched.lastName && <div className="error">{errors.lastName}</div>}
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <label className="form-label">Email Address</label>
                                                <div className="position-relative">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        style={{ fontSize: '12px' }}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.email}
                                                        className={`form-control ${errors.email && touched.email ? 'error-input' : ''}`}
                                                        placeholder='johndoe@gmail.com'
                                                    />
                                                    {errors.email && touched.email && <div className="error">{errors.email}</div>}
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <label className="form-label">Where are you in your career journey?</label>

                                                <div className="position-relative">
                                                    <div className="custom-select select-opt">
                                                        {/* <select
                                                            className={`form-select ${errors.careerJourney && touched.careerJourney ? 'error-input' : ''}`}
                                                            name="careerJourney"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.careerJourney}
                                                        >
                                                            <option value="" disabled>Select an option</option>
                                                            <option value="masters">Pursuing a Master's Degree</option>
                                                            <option value="doctoral">Pursuing a Doctoral Degree</option>
                                                            <option value="seekingJob">Seeking a Job/Internship</option>
                                                            <option value="Job">Employed in a Job/Profession</option>
                                                            <option value="selfEmployed">Self-Employed/Freelancer</option>
                                                            <option value="break">On a Career Break</option>
                                                        </select> */}
                                                        <Select
                                                            className={`custom-option ${errors.careerJourney && touched.careerJourney ? 'error-input' : ''}`}
                                                            name="careerJourney"
                                                            onChange={(e)=> setFieldValue('careerJourney', e.target)}
                                                            onBlur={handleBlur}
                                                            value={values.careerJourney}
                                                            // menuIsOpen={true}
                                                            isSearchable={false}
                                                            placeholder="Select an option"
                                                            options={options}
                                                            styles={{
                                                                option: (provided, state) => ({
                                                                  ...provided,
                                                                  backgroundColor: state.isSelected ? 'transparent' : provided.backgroundColor,
                                                                }),
                                                              }}
                                                            
                                                            />
                                                    </div>
                                                    {errors.careerJourney && touched.careerJourney && <div className="error">{errors.careerJourney}</div>}
                                                </div>
                                            </div>
                                            <div className="col-12 pt-2">
                                                <button type="submit" className='yellow-btn w-100' disabled={isSubmitting}>
                                                    Join the Waitlist
                                                </button>
                                            </div>
                                        </form>
                                    )}
                                </Formik>
                                <div className="follow-us">
                                    <div className="follow-title" onClick={() => setJoinShow(true)}><span>Follow us on</span></div>
                                    <ul className='follow-link m-0 p-0 d-flex align-items-center justify-content-center'>
                                        <li><a href="https://www.instagram.com/thinklehq/" target='_blank'><Image className="position-static cover" src="/insta.svg" alt="" layout='fill' /></a></li>
                                        <li><a href="https://www.linkedin.com/company/thinklecareers/" target='_blank'><Image className="position-static cover" src="/linkdin.svg" alt="" layout='fill' /></a></li>
                                        <li><a target='_blank'><Image className="position-static cover" src="/twtr.svg" alt="" layout='fill' /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <WaitlistInfo
                show={joinShow}
                onHide={() => setJoinShow(false)}
            />
        </>
    )
}

export default JoinWaitlist