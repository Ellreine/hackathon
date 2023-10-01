import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Footer from './Footer';
import PersonCard from './Personal-card';

const Main = ({ peopleDataState, onAddToFavoritesClick, favoritesLocalStorage }) => {
	return (
		<main className="min-h-screen background">
			<Navbar />
			<section className="flex flex-col items-center p-10  text-gray-600">
				<h1 className="text-3xl font-bold">This is the DreamTeam</h1>
				<p className="m-2 p-2 text-2xl">
					Our team speacializes in the web development using React framework
				</p>

				<div className="flex flex-wrap justify-around gap-16 max-w-[1560px] my-8">
					{peopleDataState.map((person, index) => (
						<PersonCard
							key={person.id}
							idx={index}
							{...person}
							onAddToFavoritesClick={() => onAddToFavoritesClick(person.id)}
							favoritesLocalStorage={favoritesLocalStorage}
						/>
					))}
				</div>
			</section>
			<Footer />
		</main>
	);
};

Main.propTypes = {
	peopleDataState: PropTypes.array,
	onAddToFavoritesClick: PropTypes.func,
	favoritesLocalStorage: PropTypes.array,
};

export default Main;
