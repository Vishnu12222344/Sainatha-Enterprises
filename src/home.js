import React from 'react';
import Navbar from './navbar';
import Header from './Header';
import HeroCarousel from './Herosection';
import ContactForm from './Contact';
import Collections from './collections';
import Footer from './Footer';
import ReviewPage from './reviews';
function Home(){
    return(
        <>
        <Header/>
        <Navbar/>
        <HeroCarousel/>
        <Collections/>
        <ReviewPage/>
        <ContactForm/>
        <Footer/>
        </>
    )
}
export default Home;