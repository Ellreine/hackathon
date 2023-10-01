import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from './Button';

const FavoriteItem = ({ participant, handleDeleteFavorites }) => {
	console.log(participant.photo);
	return (
		<div className="bg-slate-300/50 w-80 h-fit rounded-xl  overflow-hidden text-center">
			<img src={participant.photo} alt={participant.name} />
			<h1 className="font-bold text-lg mt-3">{participant.name}</h1>
			<div className="flex flex-col gap-2 mx-5 p-3">
				<Link
					to={`${participant.id}`}
					className="bg-orange-400 rounded-md shadow-md px-2 py-1 hover:scale-[1.1] transition-all ease-in-out"
				>
					Open card
				</Link>
				<Button
					title={'Remove from favorites'}
					color={'bg-orange-400'}
					rounded={true}
					onClick={() => handleDeleteFavorites(participant.id)}
				/>
			</div>
		</div>
	);
};

FavoriteItem.propTypes = {
	participant: PropTypes.object,
	handleDeleteFavorites: PropTypes.func,
};

export default FavoriteItem;
