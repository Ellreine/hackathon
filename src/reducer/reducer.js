import { Elijah, Lera, Nikita, Ajiniyaz } from '../assets';

const initialState = [
	{
		id: '258',
		name: 'Ilya Korenevskiy',
		age: 26,
		city: 'Moscow',
		profession: 'Frontend Developer',
		photo: Elijah,
		about: 'Кто не желает меняться, тот не развивается',
		technology: ['HTML', 'CSS', 'JS', 'React', 'TailWind', 'Redux'],
		color: 'bg-[#018abe]',
		favorite: false,
		// color: 'bg-[#3868d9]',
		social: {
			linkedIn: 'https://linkedin.com/in/mur-archiviste',
			telegram: 'https://t.me/mur_archiviste',
			github: 'https://github.com/mur-archiviste',
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
		about: 'Мне нравится рисовать и путешествовать.',
		technology: ['HTML', 'CSS', 'JS', 'React', 'TailWind', 'Redux'],
		color: 'bg-[#e1cbd7]',
		favorite: false,
		social: {
			linkedIn: 'https://linkedin.com/in/mur-archiviste',
			telegram: 'https://t.me/mur_archiviste',
			github: 'https://github.com/mur-archiviste',
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
		age: 30,
		city: 'Moscow',
		profession: 'Frontend Developer',
		photo: Nikita,
		about: 'Я люблю программировать и учить новые технологии.',
		technology: ['HTML', 'CSS', 'JS', 'React', 'TailWind', 'Redux'],
		color: 'bg-[#86a8cf]',
		favorite: false,
		social: {
			linkedIn: 'https://linkedin.com/in/mur-archiviste',
			telegram: 'https://t.me/mur_archiviste',
			github: 'https://github.com/mur-archiviste',
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
		name: 'Ажинияз Д.',
		age: 31,
		city: 'Nukus',
		profession: 'Frontend Developer',
		photo: Ajiniyaz,
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