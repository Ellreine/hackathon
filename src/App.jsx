import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Homepage from './components/Homepage';
import Main from './components/Main';
import Favorites from './components/Favorites';
import Slider from './components/Slider';
// import { peopleData } from './components/information';
import { DeveloperPage } from './pages';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from './actions/toggleFavorite';
import { removeFavorite } from './actions/removeFavorites';

const App = () => {
	const peopleData = useSelector((store) => store);

	const dispatch = useDispatch();
	const [peopleDataState, setPeopleDataState] = useState(peopleData);
	const [favoritesLocalStorage, setFavoritesLocalStorage] = useState(() => {
		const storedValue = localStorage.getItem('participants');
		return storedValue ? JSON.parse(storedValue) : [];
	});
	console.log(favoritesLocalStorage);

	const onAddToFavoritesClick = (favPersonId) => {
		dispatch(toggleFavorite(favPersonId));

		const tolocal = peopleDataState.filter((personData) => personData.id === favPersonId);

		const hasFavorite = favoritesLocalStorage.some((object) => object.id === favPersonId);

		console.log('check', hasFavorite);
		if (!hasFavorite) {
			setFavoritesLocalStorage((prev) => [...prev, ...tolocal]);
		} else {
			setFavoritesLocalStorage((participants) =>
				participants.filter((participant) => participant.id !== favPersonId),
			);
			dispatch(removeFavorite(favPersonId));
		}

		setPeopleDataState((participants) =>
			participants.map((participant) =>
				participant.id === favPersonId
					? { ...participant, favorite: !participant.favorite }
					: participant,
			),
		);
	};

	useEffect(() => {
		localStorage.setItem('participants', JSON.stringify(favoritesLocalStorage));
	}, [favoritesLocalStorage, peopleData]);

	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Homepage />} />
				<Route
					path="main"
					element={
						<Main
							peopleDataState={peopleDataState}
							onAddToFavoritesClick={onAddToFavoritesClick}
							favoritesLocalStorage={favoritesLocalStorage}
						/>
					}
				/>
				<Route
					path="main/:paramId"
					element={<DeveloperPage peopleDataState={peopleDataState} />}
				/>
				<Route
					path="favorites/:paramId"
					element={<DeveloperPage peopleDataState={peopleDataState} />}
				/>
				<Route
					path="favorites"
					element={
						<Favorites
							favoritesLocalStorage={favoritesLocalStorage}
							setFavoritesLocalStorage={setFavoritesLocalStorage}
						/>
					}
				/>
				<Route path="slides" element={<Slider />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
