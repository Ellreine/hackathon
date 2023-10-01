import { useState } from 'react';

export const Slider = () => {
	const slides = [
		'../../../public/img/1.jpg',
		'../../../public/img/2.jpg',
		'../../../public/img/3.jpg',
	];

	const [currentSlide, setCurrentSlide] = useState(0);

	const pastSlide = () =>
		setCurrentSlide((currentSlide) =>
			currentSlide === 0 ? slides.length - 1 : currentSlide - 1,
		);
	const nextSlide = () =>
		setCurrentSlide((currentSlide) =>
			currentSlide === slides.length - 1 ? 0 : currentSlide + 1,
		);

	return (
		<div className="max-w-lg overflow-hidden relative">
			<div
				className="flex transition-transform ease-out duration-500"
				style={{ transform: `translateX(-${currentSlide * 100}%)` }}
			>
				{slides.map((slide) => (
					<img src={slide} />
				))}
			</div>
			<div className="absolute inset-0 text-white flex items-center justify-between p-4">
				<button onClick={pastSlide}>
					<div className="">{`<`}</div>
				</button>
				<button onClick={nextSlide}>
					<div>{`>`}</div>
				</button>
			</div>
		</div>
	);
};
