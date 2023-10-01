import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from './Button';

const FavoriteItem = ({ participant, handleDeleteFavorites }) => {
	return (
		<div className="bg-slate-300/50 w-80 h-fit rounded-xl p-2 text-center">
			<img src={participant.image} alt={participant.name} />
			<h1 className="font-bold text-lg">{participant.name}</h1>
			<Link
				to={`${participant.participantId}`}
				className="bg-orange-400 rounded-md shadow-md px-2 py-1 hover:scale-[1.1] transition-all ease-in-out"
			>
				Open card
			</Link>
			<Button
				title={'Remove from favorites'}
				color={'bg-orange-400'}
				rounded={true}
				onClick={() => handleDeleteFavorites(participant.participantId)}
			/>
		</div>
	);
};

FavoriteItem.propTypes = {
	participant: PropTypes.object,
	handleDeleteFavorites: PropTypes.func,
};

export default FavoriteItem;
