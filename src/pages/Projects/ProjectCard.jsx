import React from "react";
import { Link } from "react-router";

const ProjectCard = ({ project }) => {
	const { id, name, description, image, live, github } = project;

	return (
		<div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition">
			<img src={image} alt={name} className="w-full h-48 object-cover" />
			<div className="p-5 space-y-2">
				<h3 className="text-xl font-bold text-indigo-600">{name}</h3>
				<p className="text-gray-600 text-sm">{description.slice(0, 80)}...</p>
				<div className="flex justify-between items-center pt-2">
					{/* <Link to={`/projects/${id}`} className="text-sm text-indigo-600 hover:underline font-medium">
						View Details →
					</Link> */}
					<Link href={live} target="_blank" className="text-sm text-green-600 hover:underline font-medium">
						Live Site
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
