import React from 'react'
import Header from "@/components/Header";
import Hero from '@/components/hero/Hero';
import OurStory from '@/components/our-Story/OurStory';
import OurMission from '@/components/our-mission/OurMission';
import OurTeam from '@/components/our-team/OurTeam';
import ForStudents from '@/components/students/ForStudents';
import OurValue from '@/components/our-value/OurValue';
import ExploreJob from '@/components/job-explore/ExploreJob';
import Footer from '@/components/footer/Footer';

const page = () => {
    return (
        <>
            <Header />
            <main className="home-page about-page">
                <Hero />
                <OurStory />
                <OurMission />
                <OurTeam />
                <ForStudents />
                <OurValue />
                <ExploreJob />
            </main>
            <Footer />
        </>
    )
}

export default page