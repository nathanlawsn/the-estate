import React, { useState } from 'react';
import Review from './Review';

export default function Reviews({ items }) {

  const [displayedItems, setDisplayedItems] = useState(4);

  const loadMoreItems = () => {
    setDisplayedItems(prevCount => prevCount + 2);
  };

  const hasMorePostsToShow = displayedItems < items.length;

      // Group reviews in pairs
    const reviewPairs = [];
    for (let i = 0; i < items.slice(0, displayedItems).length; i += 2) {
        const firstReview = items.slice(0, displayedItems)[i];
        const secondReview = items.slice(0, displayedItems)[i + 1];
        reviewPairs.push([firstReview, secondReview]);
    }

    return (
        <>
            {items.length > 0 ? (
                <div className="flex flex-col gap-8 md:gap-16">
                    {reviewPairs.map((pair, index) => (
                        <>
                        <div key={index} className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            {pair.map((review, innerIndex) => (
                                <Review
                                    key={innerIndex}
                                    heading={review.heading}
                                    text={review.text}
                                    rating={review.rating}
                                />
                            ))}
                        </div>
                        <div key={`divider-${index}`} className="hidden md:block w-full h-0.5 bg-white"></div>
                        </>

                    ))}
                    
                {hasMorePostsToShow && ( 
                    <button className="bg-primary-orange text-white font-medium flex items-center gap-5 sm:gap-[4.75rem] px-5 md:px-11 py-3 min-h-[5rem] sm:min-h-[6.25rem] w-full hover:bg-primary-purple transition-colors duration-500 ease-in-out group text-center justify-center" onClick={loadMoreItems}>
                        <span className="text-2xl sm:text-[2.125rem] ml-auto">Load more reviews</span>
                        <span className="block w-6 h-6 sm:w-8 sm:h-8 rotate-90 group-hover:rotate-[135deg] duration-500 ease-in-out ml-auto">
                            <svg viewBox="0 0 17.978 17.978" astro-icon="arrow">
                                <g fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    ><path
                                        d="m1.414 16.564 15.15-15.15"
                                        data-name="Line 1"></path><path
                                        d="M1.414 1.414h15.18v15.18"
                                        data-name="Path 1"></path>
                                </g>
                            </svg>
                        </span>
                    </button>
                )}
            </div>
            ) : (
            <div>
                <p>Sorry, there are no posts available in this category. Please try another.</p>
            </div>
        )}
    </>
    )
}