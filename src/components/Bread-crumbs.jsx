import { Link, useLocation } from 'react-router-dom';

const BreadCrumbs = () => {
	const location = useLocation();

	let currentLink = '';

	const crumbs = location.pathname
		.split('/')
		.filter((crumb) => crumb !== '')
		.map((crumb) => {
			currentLink = `${currentLink}/${crumb}`;
			// crumb = `/` + crumb;

			return (
				<div key={crumb} className=" z-20 top-[8%] text-gray-600 text-base ml-1">
					<Link to={currentLink}>{crumb} </Link>
					<span>/</span>
				</div>
			);
		});

	return <div className="flex font-bold italic mx-2 ">{crumbs}</div>;
};

export default BreadCrumbs;
