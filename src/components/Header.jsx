"use client"
import Image from 'next/image';
import './Header.css'
import React, { useEffect, useState } from 'react'
import MobileNav from './mobile-menu/MobileNav';
import JoinWaitlist from './modal/join-waitlist/JoinWaitlist'
import { usePathname } from 'next/navigation';

const Header = () => {
    const [modalShow, setModalShow] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 100);
    };

    // Add this function
    const isLinkActive = (href) => {
        if (href === '/') {
            return pathname === href;
        }
        return pathname.startsWith(href);
    };

    useEffect(() => {
        window.addEventListener("load", (event) => {
            if (window.scrollY > 100) {
                setIsScrolled(true)
            }
        });
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <header className="sticky-top">
                <nav className={`${isScrolled ? 'scrolled' : ''} navbar  navbar-expand-lg`}>
                    <div className="container">
                        <a className="navbar-brand p-0" href="/">
                            <img className='custom-img' src="/thinkle-logo.png" alt=""/>
                        </a>
                        <div className="d-flex align-items-center">
                            <a className="join-btn d-lg-none d-inline-block me-2" onClick={() => setModalShow(true)}>Join the Waitlist</a>

                            {['end'].map((placement, idx) => (
                                <MobileNav key={idx} placement={placement} name={placement} />
                            ))}
                            <div className="offcanvas offcanvas-top" tabIndex="-1" id="offcanvasTop"
                                aria-labelledby="offcanvasTopLabel">
                                <div className="offcanvas-header">
                                    <a className="navbar-brand" href="/">
                                        <img className='custom-img' src="/thinkle-logo.png" alt="thinkle" />
                                    </a>
                                    <button type="button" id="closeTheme" className="btn-close o-1" data-bs-dismiss="offcanvas"
                                        aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll align-items-start align-items-lg-center">
                                        <li className="nav-item">
                                            <a 
                                                className={`nav-link ${isLinkActive('/coaching') ? 'active' : ''}`} 
                                                aria-current="page" 
                                                href="/coaching"
                                            >
                                                Career Guidance
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a 
                                                className={`nav-link ${isLinkActive('/about-us') ? 'active' : ''}`} 
                                                href='/about-us'
                                            >
                                                About Us
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a 
                                                className="nav-link" 
                                                href='https://thinkle.toptalk.world/'
                                            >
                                                Resources
                                            </a>
                                        </li>
                                        <li className="nav-item try-btn ms-0 mt-lg-0 mt-3">
                                            <span className="join-btn d-inline-block" onClick={() => setModalShow(true)}>Join the Waitlist</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <JoinWaitlist
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </header>
        </>
    )
}

export default Header