import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Homepage = () => {
	return (
		<main
			style={{ backgroundImage: `url('../../bg.jpg')` }}
			className="h-screen min-h-full bg-cover bg-center"
		>
			<Navbar />
			<section className="flex flex-col h-5/6 justify-center items-center text-center">
				<h1 className="text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r to-gray-700 from-orange-500">
					The DreamTeam
				</h1>

				<p className="w-3/4 bg-gray-300/50 rounded-lg text-gray-800 text-2xl mb-3 p-2">
					Целеустремленные фронт-енд разработчики, идущие сквозь препятствия и трудности,
					ради достижения своих поставленных целей.
				</p>

				<Link
					to="/main"
					className="cursor-pointer bg-orange-400 p-3 rounded-lg text-white hover:scale-[1.1] transition-all ease-in-out"
				>
					Ознакомиться с участниками команды
				</Link>
			</section>
			<Footer />
		</main>
	);
};

export default Homepage;
