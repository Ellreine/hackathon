import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import FavoriteItem from './FavoriteItem';
import Footer from './Footer';

// функция для добавления в localStorage
// function handleAddFavorites() {
// 	const participantFavorites = [
// 		{ name: 'ajiniyaz', participantId: 123 },
// 		{ name: 'fred', participantId: 456 },
// 	];
// 	localStorage.setItem('participants', JSON.stringify(participantFavorites));
// }

const Favorites = () => {
	const [participants, setParticipants] = useState(function () {
		const storedValue = localStorage.getItem('participants');
		return storedValue ? JSON.parse(storedValue) : {};
	});

	const handleDeleteFavorites = (id) => {
		setParticipants((participants) =>
			participants.filter((participant) => participant.participantId !== id),
		);
	}

	useEffect(() => {
		localStorage.setItem('participants', JSON.stringify(participants));
	}, [participants]);

	return (
		<main className="h-screen bg-orange-100">
			<Navbar />
			<ul className="p-8 grid grid-cols-2 gap-8 place-items-center">
				{participants.map((participant) => (
					<li key={participant.participantId}>
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
}

export default Favorites;
