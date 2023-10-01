const SocialLink = ({ iconUrl, link }) => {
	return (
		<span className="flex items-center gap-2">
			<img src={iconUrl} alt="icon" className="h-5 w-5" />
			<a href={link} className="hover:text-indigo-300 ease-in-out duration-150">
				{link}
			</a>
		</span>
	);
};

export default SocialLink;
