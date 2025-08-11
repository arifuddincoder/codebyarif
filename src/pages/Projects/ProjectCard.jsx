// src/components/ProjectCard.jsx
import { Link } from "react-router";
import { ExternalLink, Github, Eye, Code } from "lucide-react";
import { useState } from "react";

export default function ProjectCard({ project, index }) {
	const [imageLoaded, setImageLoaded] = useState(false);

	return (
		<div
			className="group relative bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
			style={{ animationDelay: `${index * 0.1}s` }}
		>
			{/* Featured Badge */}
			{project.featured && (
				<div className="absolute top-4 left-4 z-20 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full">
					Featured
				</div>
			)}

			{/* Project Image */}
			<div className="relative h-48 overflow-hidden">
				<img
					src={project.image}
					alt={project.name}
					className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
						imageLoaded ? "opacity-100" : "opacity-0"
					}`}
					onLoad={() => setImageLoaded(true)}
				/>
				{!imageLoaded && (
					<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 animate-pulse"></div>
				)}

				{/* Overlay */}
				<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

				{/* Quick Action Buttons */}
				<div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
					{project.live && (
						<a
							href={project.live}
							target="_blank"
							rel="noopener noreferrer"
							className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-cyan-400/30 transition-colors duration-300"
						>
							<ExternalLink size={16} className="text-white" />
						</a>
					)}
					{project.github && project.github !== "#" && (
						<a
							href={project.github}
							target="_blank"
							rel="noopener noreferrer"
							className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-purple-400/30 transition-colors duration-300"
						>
							<Github size={16} className="text-white" />
						</a>
					)}
				</div>
			</div>

			{/* Project Content */}
			<div className="p-6 space-y-4">
				{/* Category */}
				<span className="inline-block px-3 py-1 bg-cyan-400/20 text-cyan-400 text-xs font-semibold rounded-full">
					{project.category}
				</span>

				{/* Title */}
				<h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
					{project.name}
				</h3>

				{/* Description */}
				<p className="text-gray-300 text-sm leading-relaxed line-clamp-3">{project.description}</p>

				{/* Tags */}
				<div className="flex flex-wrap gap-2">
					{project.tags.map((tag) => (
						<span key={tag} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-md border border-white/20">
							{tag}
						</span>
					))}
				</div>

				{/* Action Buttons */}
				<div className="flex gap-3 pt-2">
					{/* View More / Details */}
					<Link
						to={`/projects/${project.id}`}
						className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:scale-105"
					>
						<Eye size={16} />
						<span className="text-sm">View More</span>
					</Link>

					{/* GitHub Link */}
					{project.github && project.github !== "#" && (
						<a
							href={project.github}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center gap-2 px-4 py-2 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
						>
							<Code size={16} />
							<span className="text-sm">Code</span>
						</a>
					)}
				</div>
			</div>
		</div>
	);
}
