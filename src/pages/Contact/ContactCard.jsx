import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { Send } from "lucide-react";

const ContactCard = ({ icon: Icon, title, value, link, linkText, delay = 0 }) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setIsVisible(true), delay);
		return () => clearTimeout(timer);
	}, [delay]);

	return (
		<div
			className={`group bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 ${
				isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
			}`}
			style={{ transitionDelay: `${delay}ms` }}
		>
			<div className="flex items-start gap-4">
				<div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
					<Icon className="text-white" size={24} />
				</div>
				<div className="flex-1">
					<h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
						{title}
					</h3>
					<p className="text-gray-300 mb-3">{value}</p>
					{link && (
						<Link
							to={link}
							className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
							target={link.startsWith("http") ? "_blank" : undefined}
						>
							<Send size={16} />
							{linkText}
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

export default ContactCard;
