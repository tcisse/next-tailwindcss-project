import FirstSection from "../components/FirstSection"
import NavBar from "../components/NavBar"
import SecondSection from "../components/SecondSection"
import Events from "../components/Events"
import Third from "../components/Third"
import HappeningNow from "../components/HappeningNow"
import Section4 from "../components/Section4"
import Festival from "../components/festival"
import Newletter from "../components/Newletter"
import Footer from "../components/Footer"
import Image from 'next/image'

export default function Home() {
  return (
    
    <>
    <NavBar/>
    <FirstSection/>
    <SecondSection/>
    <Events/>
    <Third/>
    <HappeningNow/>
    <Section4/>
    <Festival/>
    <Newletter/>
    <Footer/>


    </>
  )
}