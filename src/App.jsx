import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Homepage from './components/Homepage';
import Main from './components/Main';
import Participant from './components/Participant';
import Favorites from './components/Favorites';
import Slider from './components/Slider';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Homepage />} />
				<Route path="main" element={<Main />} />
				<Route path="main/:participantId" element={<Participant />} />
				<Route path="favorites/:participantId" element={<Participant />} />
				<Route path="favorites" element={<Favorites />} />
				<Route path="slides" element={<Slider />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
