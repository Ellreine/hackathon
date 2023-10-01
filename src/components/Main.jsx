import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Button from './Button';

const Main = () => {
	const handleAddFavorites = () => {
		const participantFavorites = [
			{ name: 'ajiniyaz', participantId: 123 },
			{ name: 'fred', participantId: 456 },
			{ name: 'fred', participantId: 456 },
		];
		localStorage.setItem('participants', JSON.stringify(participantFavorites));
	};

	return (
		<main className="h-screen bg-orange-100">
			<Navbar />
			<section className="flex flex-col content-justify items-center p-10  text-gray-600">
				<h1 className="text-3xl font-bold">This is the DreamTeam</h1>
				<p className="m-2 p-2 text-2xl">
					Our team speacializes in web development using React framework
				</p>
				<div>Number of members:</div>
				<ul>
					<li>
						<Link to="123">Lera</Link>
					</li>
					<li>
						<Link to="456">Ilya</Link>
					</li>
					<li>
						<Link to="789">Nikita</Link>
					</li>
					<li>
						<Link to="147">Ajiniyaz</Link>
					</li>
				</ul>
				<Button
					title={'Add to favorites'}
					color={'bg-orange-400'}
					rounded={true}
					onClick={() => handleAddFavorites()}
				/>
			</section>
			<Footer />
		</main>
	);
};

export default Main;
