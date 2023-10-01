import Footer from './Footer';
import Navbar from './Navbar';

const Slider = () => {
	return (
		<main className="h-screen bg-orange-100">
			<Navbar />
			<section className="flex flex-col content-justify items-center p-10  text-gray-600">
				Slides
			</section>
			<Footer />
		</main>
	);
};

export default Slider;
