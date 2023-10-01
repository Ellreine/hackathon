import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Slider = ({ images }) => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const pastSlide = () =>
		setCurrentSlide((currentSlide) =>
			currentSlide === 0 ? images.length - 1 : currentSlide - 1,
		);

	const nextSlide = () =>
		setCurrentSlide((currentSlide) =>
			currentSlide === images.length - 1 ? 0 : currentSlide + 1,
		);

	return (
		<div className="max-w-lg overflow-hidden relative">
			<div
				className="flex transition-transform ease-out duration-500"
				style={{ transform: `translateX(-${currentSlide * 100}%)` }}
			>
				{images.map((slide, index) => (
					<img key={index} src={slide} alt={`slide-${index}`} />
				))}
			</div>
			<div className="absolute inset-0 text-white flex items-center justify-between p-4">
				<Button title={'<'} color={'bg-[#417dc3]'} rounded={true} onClick={pastSlide} />
				<Button title={'>'} color={'bg-[#417dc3]'} rounded={true} onClick={nextSlide} />
			</div>
		</div>
	);
};

Slider.propTypes = {
	images: PropTypes.array,
};

export default Slider;
