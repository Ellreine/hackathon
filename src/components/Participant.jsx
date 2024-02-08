import { useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Button from './Button';

const Participant = () => {
	const navigate = useNavigate();
	const { participantId } = useParams();

	return (
		<div className="bg-orange-100 h-screen">
			<Navbar />
			<Button
				title={'Go back'}
				color={'bg-orange-400'}
				rounded={true}
				onClick={() => navigate(-1)}
			/>
			Participant {participantId}
			<Footer />
		</div>
	);
};

export default Participant;
