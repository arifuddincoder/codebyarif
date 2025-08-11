import React, { useState, useEffect } from "react";
import { ExternalLink, Github, Eye, Code, Filter, Search } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projects } from "../../assets/data/projects";

const categories = ["All", "Full-Stack", "Web App", "Website"];

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
