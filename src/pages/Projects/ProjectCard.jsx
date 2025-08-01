import { ExternalLink } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const ProjectCard = ({ project }) => {
	const { name, description, image, live, github } = project;
	return (
		<div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition">
			<img src={image} alt={name} className="w-full object-cover" />
			<div className="p-5 space-y-2">
				<h3 className="text-xl font-bold text-indigo-600">{name}</h3>
				<p className="text-gray-600 text-sm">{description.slice(0, 80)}...</p>
				<div className="flex gap-4 justify-between items-center pt-2">
					<Link
						to={live}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all duration-300 w-fit"
					>
						Live Site <ExternalLink size={16} />
					</Link>
					<Link
						to={github}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all duration-300 w-fit"
					>
						Code <ExternalLink size={16} />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
