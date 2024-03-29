
import React from 'react';

export default function Card({ title, text, imageUrl, imageAlt, category, slug }) {
	return (
		<a
			href={`/blog/${slug}`}
			className="overflow-hidden relative group cursor-pointer bg-white"
		>
			<div className="relative">
				<img
					src={imageUrl}
					alt={imageAlt}
					className='aspect-[473/549] object-cover h-full w-full'
				/>
				<div
					className="flex items-center gap-2 bg-white rounded-[100px] absolute top-7 right-7 h-11 px-4"
				>
					<span className="font-medium text-[0.938rem]">{category}</span>
				</div>

				<div
					className="bg-white absolute bottom-0 z-10 w-full translate-y-[calc(100%-6.5rem)] group-hover:translate-y-0 duration-500 ease-in-out px-6 py-7"
				>
					<h3 className="text-3xl font-medium">{title}</h3>
					<p className="text-base font-medium text-[#999999] m-0 mt-9 line-clamp-2">
						{text}
					</p>
				</div>
			</div>
			<div className="flex items-center gap-4 relative z-20 bg-white px-6 py-7">
				<span className="text-xl font-medium">Read article</span>
				<span
					className="block w-4 h-4 group-hover:rotate-45 duration-500 ease-in-out"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="17.978" height="17.978" viewBox="0 0 17.978 17.978">
						<g id="arrow-up-right" transform="translate(1.414 1.414)">
							<line id="Line_1" data-name="Line 1" y1="15.15" x2="15.15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
							<path id="Path_1" data-name="Path 1" d="M0,0H15.18V15.18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
						</g>
					</svg>
				</span>
			</div>
		</a>
	)
}