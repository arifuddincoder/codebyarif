import React, { useState, useEffect } from "react";
import { ExternalLink, Github, Eye, Code, Filter, Search } from "lucide-react";
import ProjectCard from "./ProjectCard";
import cornerstoneImg from "../../assets/projects/cp.jpg";
import findnestImg from "../../assets/projects/findnest.jpg";
import educoreImg from "../../assets/projects/educore.jpg";
import subbloomImg from "../../assets/projects/subbloom.jpg";

const projects = [
	{
		id: "educore",
		name: "EduCore",
		description: "A modern course management system with Firebase Auth, dashboard, and seat management.",
		image: educoreImg,
		live: "https://b11a11-educore.web.app/",
		github: "https://github.com/arifuddincoder/educore_clientside",
		tags: ["React", "Firebase", "MongoDB", "Express"],
		category: "Full-Stack",
		featured: true,
	},
	{
		id: "findnest",
		name: "FindNest",
		description: "Roommate finder platform with filtering, listing, and secure dashboard.",
		image: findnestImg,
		live: "https://b11a10-findnest.web.app/",
		github: "https://github.com/arifuddincoder/findnest_client",
		tags: ["React", "Node.js", "JWT", "MongoDB"],
		category: "Web App",
		featured: true,
	},
	{
		id: "cornerstone",
		name: "CornerStone Protection",
		description: "A professional security service website for alarm system installation and monitoring.",
		image: cornerstoneImg,
		live: "https://www.cornerstoneprotection.com/",
		github: "#",
		tags: ["HTML", "CSS", "JavaScript", "PHP", "WordPress"],
		category: "Website",
		featured: false,
	},
	{
		id: "subbloom",
		name: "SubBloom",
		description: "A professional flower subscription service website for curated bloom delivery and flexible plans.",
		image: subbloomImg,
		live: "https://b11a9-subbloom.web.app/",
		github: "https://github.com/arifuddincoder/react-subbloom",
		tags: ["React", "Firebase", "JavaScript", "Tailwind"],
		category: "Website",
		featured: false,
	},
];

const categories = ["All", "Full-Stack", "Web App", "Website"];

// 	const [imageLoaded, setImageLoaded] = useState(false);

// 	return (
// 		<div
// 			className="group relative bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
// 			style={{ animationDelay: `${index * 0.1}s` }}
// 		>
// 			{/* Featured Badge */}
// 			{project.featured && (
// 				<div className="absolute top-4 left-4 z-20 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full">
// 					Featured
// 				</div>
// 			)}

// 			{/* Project Image */}
// 			<div className="relative h-48 overflow-hidden">
// 				<img
// 					src={project.image}
// 					alt={project.name}
// 					className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
// 						imageLoaded ? "opacity-100" : "opacity-0"
// 					}`}
// 					onLoad={() => setImageLoaded(true)}
// 				/>
// 				{!imageLoaded && (
// 					<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 animate-pulse"></div>
// 				)}

// 				{/* Overlay */}
// 				<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

// 				{/* Quick Action Buttons */}
// 				<div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
// 					<a
// 						href={project.live}
// 						target="_blank"
// 						rel="noopener noreferrer"
// 						className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-cyan-400/30 transition-colors duration-300"
// 					>
// 						<ExternalLink size={16} className="text-white" />
// 					</a>
// 					{project.github !== "#" && (
// 						<a
// 							href={project.github}
// 							target="_blank"
// 							rel="noopener noreferrer"
// 							className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-purple-400/30 transition-colors duration-300"
// 						>
// 							<Github size={16} className="text-white" />
// 						</a>
// 					)}
// 				</div>
// 			</div>

// 			{/* Project Content */}
// 			<div className="p-6 space-y-4">
// 				{/* Category */}
// 				<span className="inline-block px-3 py-1 bg-cyan-400/20 text-cyan-400 text-xs font-semibold rounded-full">
// 					{project.category}
// 				</span>

// 				{/* Title */}
// 				<h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
// 					{project.name}
// 				</h3>

// 				{/* Description */}
// 				<p className="text-gray-300 text-sm leading-relaxed line-clamp-3">{project.description}</p>

// 				{/* Tags */}
// 				<div className="flex flex-wrap gap-2">
// 					{project.tags.map((tag) => (
// 						<span key={tag} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-md border border-white/20">
// 							{tag}
// 						</span>
// 					))}
// 				</div>

// 				{/* Action Buttons */}
// 				<div className="flex gap-3 pt-2">
// 					<a
// 						href={project.live}
// 						target="_blank"
// 						rel="noopener noreferrer"
// 						className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:scale-105"
// 					>
// 						<Eye size={16} />
// 						<span className="text-sm">Live Demo</span>
// 					</a>
// 					{project.github !== "#" && (
// 						<a
// 							href={project.github}
// 							target="_blank"
// 							rel="noopener noreferrer"
// 							className="flex items-center justify-center gap-2 px-4 py-2 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
// 						>
// 							<Code size={16} />
// 							<span className="text-sm">Code</span>
// 						</a>
// 					)}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

const Projects = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [activeCategory, setActiveCategory] = useState("All");
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const filteredProjects = projects.filter((project) => {
		const matchesCategory = activeCategory === "All" || project.category === activeCategory;
		const matchesSearch =
			project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
			project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
		return matchesCategory && matchesSearch;
	});
	useEffect(() => {
		document.title = "Projects | Md Arif Uddin - MERN Stack Developer";
	}, []);

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
			{/* Animated Background Elements */}
			<div className="fixed inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
				<div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
			</div>

			<div className="relative z-10 px-6 md:px-20  pt-30 pb-20">
				{/* Header Section */}
				<div
					className={`text-center mb-16 transition-all duration-1000 ${
						isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
					}`}
				>
					<h2 className="text-3xl lg:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
						My Projects
					</h2>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
						Explore my portfolio of web applications, showcasing modern technologies and innovative solutions
					</p>
				</div>

				{/* Filter Section */}
				<div
					className={`max-w-7xl mx-auto mb-12 transition-all duration-1000 delay-300 ${
						isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
					}`}
				>
					<div className="flex flex-col lg:flex-row gap-6 items-center justify-between flex-wrap">
						<div className="flex items-center gap-2 flex-wrap">
							<Filter className="text-cyan-400 hidden md:inline-block" size={20} />
							<div className="flex gap-2 flex-wrap justify-center sm:justify-normal">
								{categories.map((category) => (
									<button
										key={category}
										onClick={() => setActiveCategory(category)}
										className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
											activeCategory === category
												? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
												: "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
										}`}
									>
										{category}
									</button>
								))}
							</div>
						</div>

						<div className="relative">
							<Search
								className="hidden md:inline-block md:absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
								size={20}
							/>
							<input
								type="text"
								placeholder="Search projects..."
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className="pl-10 pr-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:bg-white/20 transition-all duration-300"
							/>
						</div>
					</div>
				</div>

				{/* Projects Grid */}
				<div
					className={`max-w-7xl mx-auto transition-all duration-1000 delay-500 ${
						isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
					}`}
				>
					{filteredProjects.length > 0 ? (
						<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
							{filteredProjects.map((project, index) => (
								<ProjectCard key={project.id} project={project} index={index} />
							))}
						</div>
					) : (
						<div className="text-center py-20">
							<div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full flex items-center justify-center">
								<Search className="text-cyan-400" size={32} />
							</div>
							<h3 className="text-2xl font-bold text-white mb-2">No projects found</h3>
							<p className="text-gray-400">Try adjusting your search terms or filters</p>
						</div>
					)}
				</div>

				{/* Stats Section */}
				<div
					className={`max-w-7xl mx-auto mt-20 transition-all duration-1000 delay-700 ${
						isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
					}`}
				>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
						{[
							{ label: "Total Projects", value: "500+" },
							{ label: "Technologies", value: "15+" },
							{ label: "Featured", value: "3" },
							{ label: "Years Experience", value: "10+" },
						].map((stat, index) => (
							<div
								key={index}
								className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
							>
								<div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
									{stat.value}
								</div>
								<div className="text-gray-300 text-sm">{stat.label}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
