import Actions from '@/components/actions/Actions'
import CareerExperts from '@/components/career-experts/CareerExperts'
import Footer from '@/components/footer/Footer'
import Header from '@/components/Header'
import CareerConselling from '@/components/resources-page/career-conselling/CareerConselling'
import Holding from '@/components/resources-page/holding/Holding'
import HowWorks from '@/components/resources-page/how-works/HowWorks'
import OurMembers from '@/components/resources-page/our-members/OurMembers'
import SubHero from '@/components/resources-page/SubHero'
import ThinkleDifference from '@/components/thinkle-difference/ThinkleDifference'
import Faq from '@/components/faq/Faq'
import React from 'react'
import CareerDiscovery from '@/components/career-discovery/CareerDiscovery'

const page = () => {
  return (
    <>
      <div className="resource-page bg-theme">
        <Header />
        <main className='resources-page'>
          <SubHero />
          <CareerConselling />
          <Holding />
          <HowWorks />
          <OurMembers />
          <Actions />
          {/* <CareerExperts /> */}
          <ThinkleDifference />
          <Faq />
          <CareerDiscovery />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default page