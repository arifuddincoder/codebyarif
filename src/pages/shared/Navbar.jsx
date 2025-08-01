import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { ChevronLeft, ChevronRight, Download, Menu, X } from "lucide-react";

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navLinks = (
		<>
			<li>
				<NavLink
					to="/"
					className={({ isActive }) =>
						`relative px-4 py-2 rounded-lg transition-all duration-300 hover:text-cyan-400 ${
							isActive ? "text-cyan-400 font-semibold bg-cyan-400/10" : "text-gray-300 hover:bg-white/10"
						}`
					}
					onClick={() => setIsMobileMenuOpen(false)}
				>
					Home
					<span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/projects"
					className={({ isActive }) =>
						`relative px-4 py-2 rounded-lg transition-all duration-300 hover:text-cyan-400 ${
							isActive ? "text-cyan-400 font-semibold bg-cyan-400/10" : "text-gray-300 hover:bg-white/10"
						}`
					}
					onClick={() => setIsMobileMenuOpen(false)}
				>
					Projects
					<span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/contact"
					className={({ isActive }) =>
						`relative px-4 py-2 rounded-lg transition-all duration-300 hover:text-cyan-400 ${
							isActive ? "text-cyan-400 font-semibold bg-cyan-400/10" : "text-gray-300 hover:bg-white/10"
						}`
					}
					onClick={() => setIsMobileMenuOpen(false)}
				>
					Contact
					<span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
				</NavLink>
			</li>
		</>
	);

	return (
		<>
			{/* Navbar */}
			<nav
				className={`fixed top-0 w-full z-50 transition-all duration-500 ${
					isScrolled ? "bg-slate-900/30 backdrop-blur-lg border-b border-white/10 shadow-lg" : "bg-transparent"
				}`}
			>
				<div className="max-w-7xl mx-auto px-4">
					<div className="flex items-center justify-between h-16 md:h-20">
						{/* Logo */}
						<div className="navbar-start">
							<NavLink
								to="/"
								className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent tracking-wide hover:scale-105 transition-transform duration-300 flex items-center -ml-2"
							>
								<ChevronLeft size={45} className="text-cyan-400" />
								<span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text mr-1">
									CodeByArif
								</span>
								<div className="flex items-center gap-0">
									/
									<ChevronRight size={45} className="text-purple-400" />
								</div>
							</NavLink>
						</div>

						{/* Desktop Navigation */}
						<div className="navbar-center hidden lg:flex">
							<ul className="flex items-center space-x-2">{navLinks}</ul>
						</div>

						{/* Right Side */}
						<div className="navbar-end flex items-center space-x-4">
							{/* Download Resume Button */}
							<a
								href="/Md-Arif-Uddin-Resume.pdf"
								download
								className="group relative px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 hidden lg:flex items-center space-x-2"
							>
								<Download size={16} />
								<span>Resume</span>
								<div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur"></div>
							</a>

							{/* Mobile Menu Button */}
							<button
								onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
								className="lg:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
							>
								{isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
							</button>
						</div>
					</div>
				</div>
			</nav>

			{/* Mobile Menu Overlay */}
			<div
				className={`fixed inset-0 z-9999 lg:hidden transition-all duration-300 ${
					isMobileMenuOpen
						? "bg-black/50 backdrop-blur-sm opacity-100 pointer-events-auto"
						: "opacity-0 pointer-events-none"
				}`}
			>
				{/* Mobile Menu */}
				<div
					className={`fixed top-0 right-0 h-full w-80 max-w-full bg-slate-900/95 backdrop-blur-lg border-l border-white/10 shadow-2xl transition-transform duration-300 z-999999 ${
						isMobileMenuOpen ? "translate-x-0 " : "translate-x-full"
					}`}
				>
					<div className="flex flex-col h-full">
						{/* Mobile Menu Header */}
						<div className="flex items-center justify-between p-6 border-b border-white/10">
							<span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
								Menu
							</span>
							<button
								onClick={() => setIsMobileMenuOpen(false)}
								className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors duration-300"
							>
								<X size={20} />
							</button>
						</div>

						{/* Mobile Navigation Links */}
						<div className="flex-1 px-6 py-8">
							<ul className="space-y-4">{navLinks}</ul>
						</div>

						{/* Mobile Resume Button */}
						<div className="p-6 border-t border-white/10">
							<a
								href="/resume.pdf"
								download
								className="group relative w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								<Download size={16} />
								<span>Download Resume</span>
								<div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur"></div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
