import React, { useState, useEffect } from 'react';

const Booking = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
    // Check if jQuery is loaded, and if not, load it asynchronously
    if (typeof jQuery === 'undefined') {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js';
        document.head.appendChild(script);
    }

    // Wait for jQuery to be available and then load the calendar widget scripts and styles
    setTimeout(function () {
        if (typeof jQuery !== 'undefined') {
        jQuery.getScript(
            'https://patterdalehallestate.anytimebooking.eu/widgets/calendar/js/calendar.js'
        );
        }
    }, 1000);
    }, []);

    return (
        <>
            <div className='group'>
                <div className={`bg-primary-orange group-hover:bg-primary-purple transition-colors duration-500 ease-in-out ${isOpen && 'bg-primary-purple'}`} data-push='right'>
                    <button className={`bg-primary-orange text-white font-medium flex items-center gap-5 justify-between sm:gap-[4.75rem] px-5 lg:px-11 py-3 min-h-[5rem] sm:min-h-[6.25rem] w-full group-hover:bg-primary-purple transition-colors duration-500 ease-in-out ${isOpen && 'bg-primary-purple'}`} onClick={toggleDropdown}>
                        <span className='text-3xl'>Check availability</span>
                        {isOpen ? 
                            <svg className='w-8 h-8' xmlns="http://www.w3.org/2000/svg" width="37.243" height="37.243" viewBox="0 0 37.243 37.243">
                                <g id="Group_45" data-name="Group 45" transform="translate(-1478.379 -930.379)">
                                    <line id="Line_7" data-name="Line 7" x2="33" y2="33" transform="translate(1480.5 932.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="3"/>
                                    <line id="Line_8" data-name="Line 8" x1="33" y2="33" transform="translate(1480.5 932.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="3"/>
                                </g>
                            </svg>
                        : 
                        <span className='block group-hover:rotate-90 duration-500 ease-in-out'>
                            <svg className='w-8 h-8' xmlns="http://www.w3.org/2000/svg" width="17.978" height="17.978" viewBox="0 0 17.978 17.978">
                                <g id="arrow-up-right" transform="translate(1.414 1.414)">
                                    <line id="Line_1" data-name="Line 1" y1="15.15" x2="15.15" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                    <path id="Path_1" data-name="Path 1" d="M0,0H15.18V15.18" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                </g>
                            </svg> 
                        </span>
                        }
                    </button>
                </div>
            </div>
            <div className={`bg-primary-purple text-white col-span-2 py-10 lg:pt-28 lg:pb-24 ${isOpen ? 'block' : 'hidden'}`}>
                <div className='w-full max-w-[94rem] mx-auto px-8'>
                    <div id="atb_calendar_container" className='!max-w-none'>
                    <div
                        id="atb_anytime"
                        data-url="patterdalehallestate"
                        data-category="48449"
                        data-unit="69536"
                        data-months="3"
                        className='grid grid-cols-1 gap-10 xl:grid-cols-[minmax(0,auto)_minmax(333px,333px)] xl:gap-[5.5rem] border-none p-0 m-0'
                    >
                        <span className="no-js">Sorry, this calendar requires JavaScript in order to work.</span>
                    </div>
                    </div>
                    <div className='mt-14 grid grid-cols-1 gap-10 xl:grid-cols-[minmax(0,auto)_minmax(333px,333px)] xl:gap-[5.5rem]'>
                        <div className='grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-10 items-start border-[#603B51] border-t-2 pt-9'>
                            <div className='flex items-center gap-2'>
                                <div className='text-xl font-medium rounded-full h-10 w-10 border-[#86AC9C] border-2 text-center flex items-center justify-center'>01</div>
                                <span className='text-xl font-medium'>Arrival/Departure date</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='text-xl font-medium rounded-full text-center h-10 w-10 border-transparent border-2 flex flex-col items-center justify-center relative'>01
                                    <div className='bg-primary-orange w-1.5 h-1.5 rounded-full absolute bottom-0'></div>
                                </div>
                                <span className='text-xl font-medium'>Discount applied</span>
                            </div>
                            <div>
                                <span className='text-xl font-medium mb-4 h-10 flex items-center'>Book with confidence</span>
                                <p className='text-base [text-wrap:balance]'>View our <a className='underline hover:no-underline' href="#">terms and conditions</a>, which includes our dog policy, cancellation policy and more.</p>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Booking;
