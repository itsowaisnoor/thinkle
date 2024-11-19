import dynamic from 'next/dynamic';
import Image from "next/image";
import styles from "./page.module.css";
import HomeHero from '@/components/home/HomeHero';
import Header from '@/components/Header';
import StatusQuo from '@/components/home/StatusQuo';
import FutureCareer from '@/components/home/FutureCareer';
import Guidances from '@/components/home/Guidances';
import Actions from '@/components/actions/Actions';
import RealGrowth from '@/components/home/RealGrowth';
import PlayBook from '@/components/home/PlayBook';
import Faq from '@/components/faq/Faq';
import Footer from '@/components/footer/Footer';
import Discovery from '@/components/home/Discovery';
import HomeActions from '@/components/home/HomeActions';



// const Header = dynamic(() => import('@/components/Header'), { ssr: false });

export default function Home() {
  return (
    <>
      <div className='landing-page'>
        <Header />
        <HomeHero />
        <StatusQuo />
        <FutureCareer />
        <Guidances />
        <HomeActions />
        <RealGrowth />
        <PlayBook />
        <Faq />
        <Discovery />
        <Footer />
      </div>
    </>
  );
}
