
import React from 'react';

export default function Card({ title, text, imageUrl, imageAlt, category, slug }) {
	return (
		<a
			href={`/blog/${slug}`}
			class="overflow-hidden relative group cursor-pointer bg-white"
		>
			<div class="relative">
				<img
					src={imageUrl}
					alt={imageAlt}
					className='aspect-[473/549] object-cover h-full w-full'
				/>
				<div
					class="flex items-center gap-2 bg-white rounded-[100px] absolute top-7 right-7 h-11 px-4"
				>
					<span class="font-medium text-[0.938rem]">{category}</span>
				</div>

				<div
					class="bg-white absolute bottom-0 z-10 w-full translate-y-[calc(100%-6.5rem)] group-hover:translate-y-0 duration-500 ease-in-out px-6 py-7"
				>
					<h3 class="text-3xl">{title}</h3>
					<p class="text-base text-[#999999] m-0 mt-9 line-clamp-2">
						{text}
					</p>
				</div>
			</div>
			<div class="flex items-center gap-4 relative z-20 bg-white px-6 py-7">
				<span class="text-xl">Read article</span>
				<span
					class="block w-4 h-4 group-hover:rotate-45 duration-500 ease-in-out"
				>
				</span>
			</div>
		</a>
	)
}