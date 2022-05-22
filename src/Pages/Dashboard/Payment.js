import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Home/Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L275SFOMMtWukazHdz1KhPdJEB6N1GWFA4reU6i2sVdjcGFqPxkZbhTriMKbPPeRgGnPdqwtnS2WgdT3eSpEIM500Tmpg8BcX');

const Payment = () => {
    const { id } = useParams();
    const url = `https://fast-oasis-52502.herokuapp.com/booking/${id}`;

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mx-10'>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className='text-success font-bold'>Hello, {appointment.patientName}</p>
                    <h2 class="card-title">Please Pay For {appointment.treatment}</h2>
                    <p>Your Appointment: <span className='text-orange-700'>{appointment.date} </span> at {appointment.slot}</p>
                    <p>Please Pay: ${appointment.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>

                </div>
            </div>
        </div>
    );
};

export default Payment;