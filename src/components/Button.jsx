import PropTypes from 'prop-types';

const Button = ({ color, title, rounded, onClick }) => {
	const styles = `${color} ${rounded && 'rounded-md'}`;

	return (
		<button
			className={`${styles} shadow-md px-2 py-1 hover:scale-[1.1] transition-all ease-in-out`}
			onClick={onClick}
		>
			{title}
		</button>
	);
};

Button.propTypes = {
	color: PropTypes.string,
	title: PropTypes.func,
	rounded: PropTypes.bool,
	onClick: PropTypes.func,
};

export default Button;
