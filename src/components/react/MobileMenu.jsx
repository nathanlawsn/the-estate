import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const MobileMenu = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='xl:hidden'>
        <button aria-label='Toggle menu' onClick={handleMenuToggle}>
            {isOpen ? <XMarkIcon className='w-8 h-8 text-black' /> : <Bars3Icon className='w-8 h-8 text-black' /> }
        </button>

        <div className={`fixed h-[calc(100dvh-7rem)] left-0 top-[7rem] w-full bg-off-white p-10 text-2xl font-medium z-50 duration-500 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <ul className='flex flex-col gap-5'>
              {items.items.map((item, i) =>(
                <li key={i}>å
                    <a className="hover:underline focus:underline" href={item.slug ? `/${item.slug}` : '/#'}>
                        {item.title}
                    </a>
                </li>
              ))}
            </ul>

            <a className="rounded-full flex items-center justify-between gap-5 sm:gap-[4.75rem] px-5 py-3 min-h-[3.125rem] sm:min-w-[13.125rem] transition-colors duration-500 ease-in-out group bg-primary-orange text-white hover:bg-primary-purple mt-auto" href="https://patterdalehallestate.anytimebooking.eu/place_booking/#forward">
            <span>Book now</span>
            <span className="group-hover:rotate-45 duration-500 ease-in-out block w-4 h-4 undefined">
                  <svg viewBox="0 0 17.978 17.978" astro-icon="arrow"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m1.414 16.564 15.15-15.15" data-name="Line 1"></path><path d="M1.414 1.414h15.18v15.18" data-name="Path 1"></path></g></svg>
                </span>
          </a>
        </div>

    </div>
  );
};

export default MobileMenu;
