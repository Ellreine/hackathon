import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
	const activeLink = 'text-orange-400';
	return (
		<nav className="flex items-center justify-between bg-gray-600 text-slate-100 mx-auto">
			<Logo />
			<ul className="flex space-x-10 mr-6">
				<li>
					<NavLink to="/main" className={({ isActive }) => (isActive ? activeLink : '')}>
						<span className="mr-1 pt-2 text-lg">
							<ion-icon name="home-outline"></ion-icon>
						</span>
						Главная страница
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/favorites"
						className={({ isActive }) => (isActive ? activeLink : '')}
					>
						<span className="mr-1 pt-2 text-lg">
							<ion-icon name="bookmark-outline"></ion-icon>
						</span>
						Избранные
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/slides"
						className={({ isActive }) => (isActive ? activeLink : '')}
					>
						<span className="mr-1 pt-2 text-lg">
							<ion-icon name="albums-outline"></ion-icon>
						</span>
						Slides
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
