import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Edantal from './Edantal';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import StayFrom from './StayFrom';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Edantal></Edantal>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <StayFrom></StayFrom>
            <Footer></Footer>
        </div>
    );
};

export default Home;