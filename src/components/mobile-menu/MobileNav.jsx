import React from 'react'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';

const MobileNav = ({ name, ...props }) => {
    const [show, setShow] = useState(false);

    const changeStatusBarColor = (color) => {
        const metaTag = document.getElementById("thinkle-color-meta");
        if (metaTag) {
            metaTag.setAttribute("content", color);
        }
    };

    const handleClose = () => {
        setShow(false);
        changeStatusBarColor("#fffbf4");
    };
    
    const handleShow = () => {
        setShow(true);
        changeStatusBarColor("#FCEB00");
    };

    useEffect(() => {
        const hamburger = document.getElementById("checkTheme");
        const closeButton = document.getElementById("closeTheme");

        if (hamburger) {
            hamburger.addEventListener("click", () => changeStatusBarColor("#FCEB00"));
        }

        if (closeButton) {
            closeButton.addEventListener("click", () => changeStatusBarColor("#fffbf4"));
        }

        return () => {
            if (hamburger) {
                hamburger.removeEventListener("click", () => changeStatusBarColor("#FCEB00"));
            }
            if (closeButton) {
                closeButton.removeEventListener("click", () => changeStatusBarColor("#fffbf4"));
            }
        };
    }, []);

    return (
        <>
            <Button onClick={handleShow} id="checkTheme" className="d-lg-none d-block mobile-btn bg-transparent p-0 border-0">
                <img src="/menu-icon.svg" alt="" />
            </Button>
            <Offcanvas className="menu-nav" show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton id="closeTheme">
                    <Offcanvas.Title>
                        <a className="navbar-brand" href="/">
                            <img className='cover' src="/thinkle-logo.png" alt="" />
                        </a>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll align-items-start align-items-lg-center">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/coaching">1:1 Guidance</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='/about-us'>About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='https://thinkle.toptalk.world/'>Resources</a>
                        </li>                        
                        <li className="nav-item">
                            <a className="nav-link" href='https://thinkle.notion.site/We-re-Hiring-4e211f3c46094ca7905fa6c25fb69fcd' target='_blank'>We’re Hiring</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Join Waitlist</a>
                        </li>
                    </ul>
                    <div className="mb-5 pb-4">
                        <div className="f-12 mb-1">SAY HELLO</div>
                        <p className='f-20'>divyanshu@thinkle.xyz</p>
                    </div>
                    
                    <div className="f-12 mb-2">FOLLOW US ON</div>
                    <ul className='gap-3 d-flex align-items-center p-0 mb-0'>
                        <li><a href="https://www.instagram.com/thinklehq/" target='_blank'> <Image className='next-img' src="/m-insta.svg" alt="" layout="fill" /></a></li>
                        <li><a href="https://www.linkedin.com/company/thinklecareers/" target='_blank'> <Image className='next-img' src="/m-linkedin.svg" alt="" layout="fill" /></a></li>
                        <li><a target='_blank'> <Image className='next-img' src="/m-twiter.svg" alt="" layout="fill" /></a></li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default MobileNav;