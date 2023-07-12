import React, { useState } from 'react';
import Video from './Video';

const Modal = ({ isOpen, onClose, url }) => {
	return (
		<div className={`fixed z-50 top-0 bottom-0 left-0 right-0 duration-500 ease-in-out transition-colors ${isOpen ? 'bg-black/80 pointer-events-auto' : 'bg-transparent pointer-events-none'}`}>
			<div className={`fixed duration-500 transition-all z-50 top-1/2 left-0 right-0 justify-center items-center flex ${isOpen ? '-translate-y-1/2 opacity-100' : 'translate-y-full opacity-0'}`}>
				<div className="relative w-full max-w-5xl px-8">
					<div className="bg-black">
						<Video url={url} />
					</div>
					<button className="absolute -top-10 right-8 w-5 h-5" onClick={onClose}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" fill="#ffffff">
							<path d="M12,10.93l5.719-5.72a.751.751,0,0,1,1.062,1.062l-5.72,5.719L18.78,17.71a.751.751,0,0,1-1.061,1.062L12,13.053,6.281,18.772A.751.751,0,0,1,5.22,17.71l5.719-5.719L5.219,6.272A.751.751,0,0,1,6.281,5.21Z" transform="translate(-5 -4.991)" fillRule="evenodd"/>
						</svg>
					</button>
				</div>
			</div>
		</div>
  	);
};

const App = ({ url }) => {
	const [isModalOpen, setModalOpen] = useState(false);

	const handleOpenModal = () => {
		setModalOpen(true);
 	};

	const handleCloseModal = () => {
		setModalOpen(false);
	};

	return (
	<>
		<div className='absolute cursor-pointer left-0 right-0 z-30 top-1/2 -translate-y-1/2 hover:scale-105 duration-500 ease-in-out transition-transform flex justify-center' onClick={handleOpenModal}>
			<svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88">
			<g id="Group_24" data-name="Group 24" transform="translate(-446.25 -1652)">
				<g id="Ellipse_3" data-name="Ellipse 3" transform="translate(446.25 1652)" fill="#fff" stroke="#fff" strokeWidth="1">
				<circle cx="44" cy="44" r="44" stroke="none"/>
				<circle cx="44" cy="44" r="43.5" fill="none"/>
				</g>
				<path id="Polygon_3" data-name="Polygon 3" d="M11,0,22,19H0Z" transform="translate(502.25 1684.5) rotate(90)" fill="#ff834b"/>
			</g>
			</svg>
		</div>

		<Modal isOpen={isModalOpen} onClose={handleCloseModal} url={url} />
	</>
	);
};

export default App;
