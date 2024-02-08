import {
	Elijah,
	Lera,
	Nikita,
	Ajiniyaz,
	Nikita1,
	Lera1,
	Lera2,
	Lera3,
	Elijah1,
	Elijah2,
} from '../assets';

const data = [
	{
		id: '258',
		name: 'Ilya Korenevskiy',
		age: 26,
		city: 'Tomsk',
		profession: 'Frontend Developer',
		photo: Elijah,
		portfolio: [Elijah1, Elijah2],
		about: 'Кто не желает меняться, тот не развивается',
		technology: ['HTML', 'CSS', 'JS', 'React', 'TailWind', 'Redux'],
		color: 'bg-[#018abe]',
		favorite: false,
		// color: 'bg-[#3868d9]',
		social: {
			linkedIn: 'https://linkedin.com/in/mur-archiviste',
			telegram: 'https://t.me/ellreine',
			github: 'https://github.com/ellreine',
		},
		tasks: {
			1: 'Поднятие коммандного духа',
			2: 'Приготовление кофе',
			3: 'Подготовка печенек',
		},
		progress: {
			JS: '90%',
			React: '60%',
			Node: '15%',
		},
	},
	{
		id: '456',
		name: 'Lera Bareysha',
		age: 25,
		city: 'Moscow',
		profession: 'Frontend Developer',
		photo: Lera,
		portfolio: [Lera1, Lera2, Lera3],
		about: 'Мне нравится рисовать и путешествовать.',
		technology: ['HTML', 'CSS', 'JS', 'React', 'TailWind', 'Redux'],
		color: 'bg-[#e1cbd7]',
		favorite: false,
		social: {
			linkedIn: 'https://linkedin.com/in/valeryia-bareisha',
			telegram: 'https://t.me/den_asmos',
			github: 'https://github.com/den-asmos',
		},
		tasks: {
			1: 'Поднятие коммандного духа',
			2: 'Приготовление кофе',
			3: 'Подготовка печенек',
		},
		progress: {
			JS: '90%',
			React: '60%',
			Node: '15%',
		},
	},
	{
		id: '789',
		name: 'Nikita Kapusta',
		age: 21,
		city: 'Omsk',
		profession: 'Frontend Developer',
		photo: Nikita,
		portfolio: [Nikita1, Nikita1],
		about: 'Я люблю программировать и учить новые технологии.',
		technology: ['HTML', 'CSS', 'JS', 'React', 'TailWind', 'Redux'],
		color: 'bg-[#86a8cf]',
		favorite: false,
		social: {
			linkedIn: 'https://linkedin.com/in/mur-archiviste',
			telegram: 'https://t.me/KapustaBOSS',
			github: 'https://github.com/Kapustian2',
		},
		tasks: {
			1: 'Поднятие коммандного духа',
			2: 'Приготовление кофе',
			3: 'Подготовка печенек',
		},
		progress: {
			JS: '90%',
			React: '60%',
			Node: '15%',
		},
	},
	{
		id: '147',
		name: 'Ajiniyaz Dzhiyemuratov',
		age: 31,
		city: 'Nukus',
		profession: 'Frontend Developer',
		photo: Ajiniyaz,
		portfolio: [Nikita1, Nikita1],
		about: 'Я люблю программировать и учить новые технологии.',
		technology: ['HTML', 'CSS', 'JS', 'React', 'TailWind', 'Redux'],
		color: 'bg-[#26425a]',
		favorite: false,
		social: {
			linkedIn: 'http://linkedin.com/in/ajiniyaz-djiemuratov-95030a264',
			telegram: '@imagickid',
			github: 'https://github.com/imagickid',
		},
		tasks: {
			1: 'Поднятие коммандного духа',
			2: 'Приготовление кофе',
			3: 'Подготовка печенек',
		},
		progress: {
			JS: '90%',
			React: '60%',
			Node: '20%',
		},
	},
];

const participants = localStorage.getItem('participants')
	? JSON.parse(localStorage.getItem('participants'))
	: [];

const initialState = data.map((object1) => {
	const matchItem = participants.find((object2) => object2.id === object1.id);
	if (matchItem) {
		return matchItem;
	}
	return object1;
});
console.log('initialState', initialState);
console.log('participants', participants);

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'toggleFavorite': {
			const updateState = state.map((object) => {
				if (object.id === action.payload) {
					return { ...object, favorite: !object.favorite };
				}
				return object;
			});
			return updateState;
		}
		case 'removeFavorite': {
			const updateState = state.map((object) => {
				if (object.id === action.payload) {
					return { ...object, favorite: false };
				}
				return object;
			});
			return updateState;
		}
		default:
			return state;
	}
};

export default reducer;
