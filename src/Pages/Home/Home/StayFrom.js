import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const StayFrom = () => {
    return (
        <div style={{
            background: `url(${appointment})`
        }}
            className='text-center '
        >
            <div className='p-20'>
                <div className='pb-8'>
                    <h1 className='text-primary text-xl font-bold'>Contact Us</h1>
                    <h2 className='text-white text-4xl'>Stay connected with us</h2>
                </div>
                <div>
                    <input type="email" placeholder="Email Address" className="input input-bordered input-primary w-full max-w-xs mb-2" required />
                    <br />
                    <input type="text" placeholder="Subject" className="input input-bordered input-primary w-full max-w-xs mb-2" />
                    <br />
                    <textarea type="text" placeholder="Your Massage..." className="input input-bordered input-primary w-full max-w-xs mb-2" />
                </div>
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </div>
    );
};

export default StayFrom;