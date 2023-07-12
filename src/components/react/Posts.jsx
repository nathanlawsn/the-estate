import React, { useState } from 'react';
import Card from './Card';

let res = await fetch(`${import.meta.env.API_URL}/wp-json/wp/v2/posts`);
let posts = await res.json();

export default function Posts() {

  const [displayedItems, setDisplayedItems] = useState(9);

  const loadMoreItems = () => {
    setDisplayedItems(prevCount => prevCount + 9);
  };

    return (
        <div className="flex flex-col gap-20">
            <div className="grid gap-10 md:gap-x-0 md:gap-y-20 md:grid-cols-2 lg:grid-cols-3">
                {posts.slice(0, displayedItems).map((post) => (
                    <Card
                        key={post.slug}
                        title={post.title.rendered}
                        text={post.acf.short_description}
                        category={post.acf.category[0].name}
                        imageUrl={post.acf.image.url}
                        imageAlt={post.acf.image.alt}
                        slug={post.slug}
                    />
                ))}
            </div>
            
            <button className="bg-orange-400 text-white flex items-center gap-5 sm:gap-[4.75rem] px-5 md:px-11 py-3 min-h-[5rem] sm:min-h-[6.25rem] w-full hover:bg-primary-purple transition-colors duration-500 ease-in-out group text-center justify-center" onClick={loadMoreItems}>
                <span class="text-2xl sm:text-[2.125rem] ml-auto">Load more articles</span>
                <span class="block w-6 h-6 sm:w-8 sm:h-8 group-hover:rotate-45 duration-500 ease-in-out ml-auto">
                    <svg viewBox="0 0 17.978 17.978" astro-icon="arrow">
                        <g fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            ><path
                                d="m1.414 16.564 15.15-15.15"
                                data-name="Line 1"></path><path
                                d="M1.414 1.414h15.18v15.18"
                                data-name="Path 1"></path>
                        </g>
                    </svg>
                </span>
            </button>
        </div>
    )
}