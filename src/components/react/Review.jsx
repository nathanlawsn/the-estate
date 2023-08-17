import React from 'react';

const Review = ({ heading, text, rating }) => {
  const svgArray = Array.from({ length: rating }, (_, index) => (
    <svg
      key={index}
      className='shrink-0 w-7 h-6'
      xmlns="http://www.w3.org/2000/svg"
      width="24.224"
      height="23.037"
      viewBox="0 0 24.224 23.037"
    >
      <path
        id="Path_70"
        data-name="Path 70"
        d="M14.112,2l3.743,7.582,8.369,1.223-6.056,5.9L21.6,25.037,14.112,21.1,6.627,25.037,8.056,16.7,2,10.805l8.369-1.223Z"
        transform="translate(-2 -2)"
        fill="#ff834b"
      />
    </svg>
  ));

  return (
    <div className="bg-white py-9 px-8">
      <div className="flex flex-col xl:flex-row items-start justify-between gap-4">
        <p className="font-medium text-[1.875rem]/[2.5rem]">{heading}</p>
        <div className="flex gap-1 items-center shrink-0">
          {svgArray}
        </div>
      </div>
      <div className="mt-[3.25rem]">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Review;
