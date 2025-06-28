import React, { useState, useEffect } from "react";
import {
	ChevronDown,
	Download,
	Code,
	Database,
	Globe,
	Smartphone,
	Star,
	ArrowRight,
	Mail,
	Github,
	Linkedin,
	ExternalLink,
} from "lucide-react";
import { Link } from "react-router";
import arifImg from "../../assets/profile.jpg";

const skills = [
	"JavaScript",
	"React",
	"MongoDB",
	"Express",
	"Firebase",
	"HTML5",
	"CSS3",
	"Tailwind",
	"Bootstrap",
	"Git",
	"PHP",
	"MySQL",
	"Node.js",
	"Photoshop",
	"Postman",
	"Figma",
	"WordPress",
	"Figma",
];

const services = [
	{
		icon: Code,
		title: "Frontend Development",
		description: "Creating modern, responsive web interfaces using React, JavaScript, and cutting-edge CSS frameworks.",
		color: "from-blue-500 to-cyan-500",
	},
	{
		icon: Database,
		title: "Backend Development",
		description: "Building robust server-side applications with Node.js, Express, and database management systems.",
		color: "from-purple-500 to-pink-500",
	},
	{
		icon: Globe,
		title: "Full-Stack Solutions",
		description: "End-to-end web development combining frontend and backend technologies for complete solutions.",
		color: "from-green-500 to-teal-500",
	},
	{
		icon: Smartphone,
		title: "Mobile-First Design",
		description: "Responsive designs that work perfectly across all devices, from mobile to desktop.",
		color: "from-orange-500 to-red-500",
	},
];

const projects = [
	{
		title: "EduCore Platform",
		category: "Course Management",
		description: "A comprehensive learning management system built with MERN stack",
		image: "bg-gradient-to-br from-blue-400 to-purple-600",
		tags: ["React", "Node.js", "MongoDB"],
		link: "https://b11a11-educore.web.app/",
	},
	{
		title: "E-Commerce Solution",
		category: "Web Application",
		description: "Full-featured online store with payment integration",
		image: "bg-gradient-to-br from-green-400 to-blue-600",
		tags: ["WordPress", "Woocommerce", "Stripe"],
		link: "https://www.lifelinkusa.com/",
	},
	{
		title: "FindNest",
		category: "Roommate Finder Web App",
		description:
			"A modern platform to discover and manage roommate listings with filtering, booking, and secure authentication.",
		image: "bg-gradient-to-br from-cyan-500 to-purple-600",
		tags: ["React", "Firebase", "MongoDB", "Tailwind"],
		link: "https://b11a10-findnest.web.app/",
	},
];
const socialLinks = [
	{ icon: Github, url: "https://github.com/arif128551" },
	{ icon: Linkedin, url: "https://www.linkedin.com/in/arif128551/" },
	{ icon: Mail, url: "mailto:xossarif@gmail.com" },
];
const Home = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [activeService, setActiveService] = useState(0);

	useEffect(() => {
		setIsVisible(true);
		const interval = setInterval(() => {
			setActiveService((prev) => (prev + 1) % services.length);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		document.title = "Md Arif Uddin | Full-Stack MERN Developer";
	}, []);

	return (
		<div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
			<div className="fixed inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
				<div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
			</div>

			<section className="min-h-[400px] py-20 lg:py-40  relative z-10">
				<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-4 items-center">
					<div
						className={`space-y-8 transition-all duration-1000 ${
							isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
						}`}
					>
						<div className="space-y-2">
							<p className="text-cyan-400 text-lg font-medium">Hi, I'm Md Arif Uddin</p>
							<h1 className="text-3xl md:text-7xl font-bold leading-tight">
								<span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
									Full-Stack
								</span>
								<br />
								<span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
									MERN Developer
								</span>
							</h1>
							<p className="text-xl text-gray-300 max-w-md leading-relaxed">
								I build scalable web applications and love experimenting with modern JavaScript tools and frameworks.
							</p>
						</div>

						<div className="flex flex-col md:flex-row gap-4 min-w-0">
							<a
								href="/mdarifuddin-resume.pdf"
								className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
								download
							>
								<span className="flex items-center gap-2">
									<Download size={20} />
									Download Resume
								</span>
								<div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur"></div>
							</a>
							<Link
								to="/projects"
								className="px-8 py-4 border-2 border-cyan-400/50 rounded-xl font-semibold hover:bg-cyan-400/10 transition-all duration-300 hover:border-cyan-400"
							>
								View Projects
							</Link>
						</div>

						<div className="flex gap-6">
							{socialLinks.map((item, index) => (
								<a
									key={index}
									href={item.url}
									target="_blank"
									rel="noopener noreferrer"
									className="p-3 border border-gray-600 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
								>
									<item.icon size={24} />
								</a>
							))}
						</div>
					</div>

					<div
						className={`relative transition-all duration-1000 delay-300 ${
							isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
						}`}
					>
						<div className="relative">
							<div className="w-80 h-80 mx-auto bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
								<div className="w-64 h-64 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center border-4 border-cyan-400/30">
									{/* <Code size={80} className="text-cyan-400" /> */}
									<img src={arifImg} alt="" className="rounded-full object-cover" />
								</div>
							</div>
							<div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
								<Star className="text-white" size={32} />
							</div>
							<div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-cyan-500 rounded-full animate-pulse"></div>
						</div>
					</div>
				</div>

				<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
					<ChevronDown className="text-cyan-400" size={32} />
				</div>
			</section>

			{/* About Section */}
			<section id="about" className="relative z-10 py-10 lg:py-20 px-6">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-bold lg:text-center mb-4 lg:mb-10 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
						About Me
					</h2>
					<div className="flex gap-12 items-stretch flex-col lg:flex-row">
						<div className="flex-1 space-y-6">
							<p className="text-lg text-gray-300 leading-relaxed">
								I'm <strong className="text-white">Md Arif Uddin</strong>, a passionate Full-Stack MERN Developer from
								🇧🇩 South Asia. Currently working on <strong className="text-cyan-400">EduCore</strong>, learning{" "}
								<strong className="text-purple-400">Next.js</strong>, and exploring{" "}
								<strong className="text-green-400">MongoDB Aggregation</strong>, advanced{" "}
								<strong className="text-orange-400">Firebase Auth</strong>, and performance optimization in React.
							</p>
							<div className="space-y-4">
								{[
									"🔭 Working on EduCore (Course Management System)",
									"🌱 Learning Next.js and SSR",
									"🚀 Exploring Firebase + MongoDB aggregation",
									"💡 Always eager to learn new things",
								].map((item, index) => (
									<div
										key={index}
										className="flex items-center gap-3 p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
									>
										<span className="text-lg">{item}</span>
									</div>
								))}
							</div>
						</div>

						<div className="w-full flex-1 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center py-4">
							<div className="text-center space-y-4">
								<div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full mx-auto flex items-center justify-center">
									<Globe size={40} className="text-white" />
								</div>
								<h3 className="text-2xl font-bold">5+ Years</h3>
								<p className="text-gray-300">Development Experience</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className="relative z-10 py-10 lg:py-20 px-6">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-bold text-center mb-5 lg:mb-10 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
						What I Provide
					</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						{services.map((service, index) => {
							const Icon = service.icon;
							return (
								<div
									key={index}
									className={`p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl group cursor-pointer ${
										activeService === index ? "border-cyan-400/50 shadow-xl" : ""
									}`}
									onMouseEnter={() => setActiveService(index)}
								>
									<div
										className={`w-10 h-10 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
									>
										<Icon className="text-white" size={20} />
									</div>
									<h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
										{service.title}
									</h3>
									<p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Skills Section */}
			<section id="skills" className="relative z-10 py-10 lg:py-20 px-6">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-bold text-center mb-8 lg:mb-10 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
						Skills & Technologies
					</h2>
					<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
						{skills.map((skill, index) => (
							<div
								key={skill}
								className="p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:bg-white/10 text-center group"
								style={{ animationDelay: `${index * 0.1}s` }}
							>
								<span className="font-semibold text-sm group-hover:text-cyan-400 transition-colors duration-300">
									{skill}
								</span>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Featured Projects */}
			<section id="projects" className="relative z-10 py-10 lg:py-20 px-6">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-3xl md:text-5xl font-bold text-center mb-8 lg:mb-10 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
						Featured Projects
					</h2>
					<div className="space-y-8">
						{projects.map((project, index) => (
							<div
								key={index}
								className="group relative overflow-hidden rounded-3xl backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:scale-[1.02]"
							>
								<div className="grid md:grid-cols-2 gap-0">
									<div className="p-8 flex flex-col justify-center space-y-6">
										<div className="space-y-2">
											<p className="text-cyan-400 font-medium">{project.category}</p>
											<h3 className="text-3xl font-bold group-hover:text-cyan-400 transition-colors duration-300">
												{project.title}
											</h3>
											<p className="text-gray-300 leading-relaxed">{project.description}</p>
										</div>
										<div className="flex flex-wrap gap-2">
											{project.tags.map((tag) => (
												<span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20">
													{tag}
												</span>
											))}
										</div>
										<Link
											to={project.link}
											target="_blank"
											className="flex items-center gap-2 text-cyan-400 font-semibold hover:gap-4 transition-all duration-300 w-fit"
										>
											Live Site <ExternalLink size={16} />
										</Link>
									</div>
									<div
										className={`h-64 md:h-auto ${project.image} flex items-center justify-center relative overflow-hidden`}
									>
										<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
										<div className="relative z-10 w-48 h-48 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center border border-white/20">
											<Code size={48} className="text-white/70" />
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Education & Experience */}
			<section className="relative z-10 py-10 lg:py-20 px-6">
				<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
					<div className="space-y-8">
						<h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
							Education
						</h2>
						<div className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
							<div className="flex items-start gap-4">
								<div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center mt-1">
									<span className="text-2xl">🎓</span>
								</div>
								<div>
									<h3 className="text-xl font-bold text-white mb-2">B.Sc (Hons) in Physics</h3>
									<p className="text-gray-300">Mawlana Bhashani Science and Technology University, Tangail</p>
								</div>
							</div>
						</div>
					</div>

					<div className="space-y-8">
						<h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
							Experience
						</h2>
						<div className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
							<div className="flex items-start gap-4">
								<div className="w-12 h-12 bg-gradient-to-br from-green-400 to-cyan-500 rounded-xl flex items-center justify-center mt-1">
									<span className="text-2xl">💼</span>
								</div>
								<div>
									<h3 className="text-xl font-bold text-white mb-2">Web Developer at CornerStone Protection</h3>
									<p className="text-gray-300">2015 - Present</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="relative z-10 py-10 lg:py-20 px-6">
				<div className="max-w-4xl mx-auto text-center">
					<div className="p-12 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 rounded-3xl backdrop-blur-sm border border-white/10">
						<h2 className="text-3xl md:text-4xl/snug font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
							Have a project idea to collaborate with?
						</h2>
						<p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
							Let's bring your vision to life with cutting-edge web technologies and innovative solutions.
						</p>
						<Link to="mailto:xossarif@gmail.com">
							<button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
								<span className="flex items-center gap-2">
									<Mail size={20} />
									Contact Me
									<ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
								</span>
								<div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur"></div>
							</button>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
