import React, { useState } from 'react';
import Footer from '../Home/Shared/Footer';
import AbailableAppointment from './AbailableAppointment';
import AppointmentBanner from './AppointmentBanner';

const Appointment = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AbailableAppointment date={date} setDate={setDate}></AbailableAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;