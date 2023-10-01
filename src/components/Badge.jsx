const Badge = ({ color, title }) => {
	return <div className={`${color} rounded-md shadow-md px-2 py-1 w-fit font-bold`}>{title}</div>;
};

export default Badge;
