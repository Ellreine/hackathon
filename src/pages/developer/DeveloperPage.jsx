import { useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Progress } from '../../components';
import { SocialLink } from './components';
import { github, linkedIn, telegram } from '../../assets';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

const DeveloperPage = ({ peopleDataState }) => {
	const navigate = useNavigate();
	const { paramId } = useParams();

	const dev = peopleDataState.filter((person) => person.id === paramId);

	console.log(dev);
	return (
		<main className="min-h-screen bg-orange-100">
			<Navbar />

			<div className="max-w-[1080px] w-full flex flex-col py-2 px-4">
				<div className="flex justify-center">
					<Button
						title={'Go back'}
						color={'bg-orange-400'}
						rounded={true}
						onClick={() => navigate(-1)}
					/>
				</div>
				<div className="flex justify-start items-end">
					<div className="p-2 border border-indigo-300 rounded-full flex justify-center items-center shadow-md">
						<img
							src={dev[0].photo}
							alt={dev[0].name}
							className="w-60 h-60 rounded-full object-contain"
						/>
					</div>
					<h2 className="mx-2 my-4 text-5xl">{dev[0].name}</h2>
				</div>

				<div className="mx-2 my-4 text-lg">
					<p>{dev[0].age} лет</p>
					<p>{dev[0].about}</p>
				</div>

				<div className="mx-2 my-4">
					<h3 className="my-2 text-3xl text-indigo-400">Портфолио</h3>
					<Progress title="JS" percent={dev[0].progress.JS} color="#fbbf24" />
					<Progress title="React" percent={dev[0].progress.React} color="#3b82f6" />
					<Progress title="Node" percent={dev[0].progress.Node} color="#16a34a" />
				</div>

				<div className="mx-2 my-4 flex flex-col gap-2">
					<h3 className="my-2 text-3xl text-indigo-400">Социальные сети</h3>
					<SocialLink iconUrl={github} link={dev[0].social.github} />
					<SocialLink iconUrl={linkedIn} link={dev[0].social.linkedIn} />
					<SocialLink iconUrl={telegram} link={dev[0].social.telegram} />
				</div>

				<div className="mx-2 my-4 text-lg">
					<h3 className="my-2 text-3xl text-indigo-400">Задачи</h3>
					<ul className="list-disc px-4">
						<li>{dev[0].tasks[1]}</li>
						<li>{dev[0].tasks[2]}</li>
						<li>{dev[0].tasks[3]}</li>
					</ul>
				</div>
			</div>
			<Footer />
		</main>
	);
};

DeveloperPage.propTypes = {
	peopleDataState: PropTypes.array,
};

export default DeveloperPage;
