import React, { useEffect, useState } from "react";
import { Link } from "react-router";
const SocialCard = ({ icon: Icon, platform, username, link, color, delay = 0 }) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setIsVisible(true), delay);
		return () => clearTimeout(timer);
	}, [delay]);

	return (
		<Link
			to={link}
			target="_blank"
			className={`group bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 hover:border-${color}/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-${color}/25 ${
				isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
			}`}
			style={{ transitionDelay: `${delay}ms` }}
		>
			<div className="text-center">
				<div
					className={`inline-flex p-4 bg-gradient-to-r from-${color} to-${color}/80 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}
				>
					<Icon className="text-white" size={32} />
				</div>
				<h3
					className={`text-lg font-semibold text-white mb-2 group-hover:text-${color} transition-colors duration-300`}
				>
					{platform}
				</h3>
				<p className="text-gray-300 text-sm">{username}</p>
			</div>
		</Link>
	);
};

export default SocialCard;
