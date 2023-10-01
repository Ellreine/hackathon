import { Link } from 'react-router-dom';
import { starEmpty, starFill } from '../assets';
import PropTypes from 'prop-types';

const PersonCard = ({
	id,
	name,
	age,
	city,
	profession,
	about,
	photo,
	favorite,
	onAddToFavoritesClick,
}) => {
	const imageUrl =
		photo ||
		'https://cdn.kwork.com/files/portfolio/t0/13/16bb32c2842799b2aa60438352e9054369e0dbc0-1683823522.webp';
	return (
		<div className="w-[336px] min-h-[420px] relative card ">
			<div className="front flex justify-center w-full h-full overflow-hidden absolute transform transition-transform duration-500 ease-linear shadow-2xl hover:shadow-none rounded-3xl">
				<img className="h-full rounded-2xl" src={imageUrl} alt="" />
			</div>
			<div className="back w-full h-full overflow-hidden absolute transform transition-transform duration-500 ease-linear shadow-2xl hover:shadow-none rounded-2xl ">
				<div className="w-full h-full text-center text-gray-200 relative text-lg flex justify-around flex-col items-center">
					<div className="] w-full h-[150px] absolute top-[0%]">
						<img
							className="cursor-pointer absolute top-[10%] right-[6%] w-[32px] hover:scale-150 transform duration-300"
							src={favorite ? starFill : starEmpty}
							onClick={onAddToFavoritesClick}
						/>
						<div className="h-[100px] w-[100px] mx-auto mt-3 overflow-hidden rounded-full border border-white">
							<img src={imageUrl} alt="" />
						</div>

						<h2 className="text-3xl text-[#d6e8ee] text-center font-medium mt-2">
							{name}
						</h2>
					</div>
					<div className="w-full h-[150px] absolute top-[40%] flex justify-center items-center flex-col">
						<h3 className="my-2 text-2xl font-medium text-yellow-400">{profession}</h3>
						<span className="text-lg">{age} лет</span>
						<span className="text-lg">{city}</span>
						<h3 className="text-lg w-[85%] h-[150px] mt-4">{about}</h3>
					</div>
					<Link
						to={id}
						className="bg-[#3868d9] hover:scale-110 absolute top-[85%] duration-500 transform text-white w-[150px] font-bold py-2 px-4 rounded-3xl"
					>
						Open Page
					</Link>
				</div>
			</div>
		</div>
	);
};

PersonCard.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	age: PropTypes.number,
	photo: PropTypes.string,
	about: PropTypes.string,
	profession: PropTypes.string,
	city: PropTypes.string,
	favorite: PropTypes.bool,
	technology: PropTypes.array,
	onOpenClick: PropTypes.func,
	onAddToFavoritesClick: PropTypes.func,
};

export default PersonCard;

/* {technology.map((el, idx) => (
						<span key={idx}>{el}</span>
					))} */
