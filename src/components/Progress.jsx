import PropTypes from 'prop-types';

const Progress = ({ title, percent, color }) => {
	return (
		<div className="max-w-sm relative w-full py-1">
			<div className=" w-full my-3">
				<span>{title}</span>
				<div
					className="w-full h-2 rounded-md
       mt-1 bg-[#eee]"
				>
					<span className="percentage" style={{ width: percent, background: color }}>
						<span className="tooltip" style={{ background: color }}>
							{percent}
						</span>
					</span>
				</div>
			</div>
		</div>
	);
};

Progress.propTypes = {
	title: PropTypes.array,
	percent: PropTypes.string,
	color: PropTypes.string,
};

export default Progress;
