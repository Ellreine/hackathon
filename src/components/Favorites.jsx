import PropTypes from 'prop-types';
import Navbar from './Navbar';
import FavoriteItem from './FavoriteItem';
import Footer from './Footer';
import { removeFavorite } from '../actions/removeFavorites';
import { useDispatch } from 'react-redux';

const Favorites = ({ favoritesLocalStorage, setFavoritesLocalStorage }) => {
	const dispatch = useDispatch();
	const handleDeleteFavorites = (id) => {
		dispatch(removeFavorite(id));
		setFavoritesLocalStorage((participants) =>
			participants.filter((participant) => participant.id !== id),
		);
	};

	return (
		<main className="min-h-screen background">
			<Navbar />
			<ul className="p-8 grid grid-cols-2 gap-8 place-items-center">
				{favoritesLocalStorage.map((participant) => (
					<li key={participant.id}>
						<FavoriteItem
							participant={participant}
							handleDeleteFavorites={handleDeleteFavorites}
						/>
					</li>
				))}
			</ul>
			<Footer />
		</main>
	);
};

Favorites.propTypes = {
	favoritesLocalStorage: PropTypes.array,
	setFavoritesLocalStorage: PropTypes.func,
};

export default Favorites;
