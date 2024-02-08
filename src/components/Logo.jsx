import { Link } from 'react-router-dom';

const Logo = () => {
	return (
		<Link to="/" className="flex items-center ml-6 py-3">
			<img src="../../icon.png" alt="Dream Team logo" className="w-12 h-12 mr-5" />
			<span className="font-bold bg-clip-text text-transparent bg-gradient-to-r to-white from-orange-500">
				DreamTeam
			</span>
		</Link>
	);
}

export default Logo;
