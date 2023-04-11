import React from 'react';

const Footer = () => {
    return (
        <div className='bg-gray-800 text-white'>
            <div className='grid grid-cols-6 border-b m-6 py-6'>
                <div className='col-span-2'>
                    <h2 className='font-bold text-2xl'>CareerOppurtune</h2>
                    <p className='text-gray-400 pe-6'>Explore exciting job opportunities and take the next step in your career with CareerOppurtune. Stay connected with us for the latest updates and news in the job market. Contact us for any queries or feedback, we would love to hear from you!</p>
                </div>
                <div>
                    <h3 className='font-bold'>Company</h3>
                    <ul className='text-gray-400'>
                        <li>About Us</li>
                        <li>Work</li>
                        <li>Latest News</li>
                        <li>Career</li>
                    </ul>
                </div>
                <div>
                    <h3 className='font-bold'>Product</h3>
                    <ul className='text-gray-400'>
                        <li>Prototype</li>
                        <li>Plans & Pricing</li>
                        <li>Customers</li>
                        <li>Integrations</li>
                    </ul>
                </div>
                <div>
                    <h3 className='font-bold'>Support</h3>
                    <ul className='text-gray-400'>
                        <li>Help Desk</li>
                        <li>Sales</li>
                        <li>Become a Partner</li>
                        <li>Developers</li>
                    </ul>
                </div>
                <div>
                    <h3 className='font-bold'>Contact</h3>
                    <ul className='text-gray-400'>
                        <li>524 Broadway , NYC</li>
                        <li>+1 777 - 978 - 5570</li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-between mx-6 pb-9 text-gray-500'>
                <h3><small>@2023 CareerHub. All Rights Reserved</small></h3>
                <h3><small>Powered by CareerHub</small></h3>
            </div>
        </div>
    );
};

export default Footer;