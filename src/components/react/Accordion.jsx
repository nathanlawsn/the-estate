import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion border-b border-white py-6 cursor-pointer">
      <div className="accordion-header flex justify-between gap-4 items-end" onClick={toggleAccordion}>
        <h3 className='font-medium'>{title}</h3>
        <span className={`duration-500 transition-transform ease-in-out ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17.978"
              height="17.978"
              viewBox="0 0 17.978 17.978"
          >
              <g
                  id="arrow-up-right"
                  transform="translate(23.564 -5.586) rotate(90)"
              >
                  <line
                      id="Line_1"
                      data-name="Line 1"
                      y1="15.15"
                      x2="15.15"
                      transform="translate(7 7)"
                      fill="none"
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"></line>
                  <path
                      id="Path_1"
                      data-name="Path 1"
                      d="M7,7H22.18V22.18"
                      fill="none"
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"></path>
              </g>
          </svg>
        </span>
      </div>
      {isOpen && (
        <div className="pt-8">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;