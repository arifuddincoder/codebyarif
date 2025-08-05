import React from "react";
import { Github, Linkedin, Mail, Heart, ArrowUp, Pin, ChevronLeft, ChevronRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
			{/* Animated Background Elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
			</div>

			{/* Main Footer Content */}
			<div className="relative z-10 px-6 md:px-20 py-16">
				<div className="max-w-6xl mx-auto">
					{/* Top Section */}
					<div className="grid md:grid-cols-3 gap-12 mb-12">
						{/* Brand Section */}
						<div className="space-y-4">
							<Link
								to="/"
								className="text-2xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent tracking-wide hover:scale-105 transition-transform duration-300 flex items-center gap-0 -ml-4"
							>
								<ChevronLeft size={45} className="text-cyan-400" />
								<span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
									CodeByArif /
								</span>

								<ChevronRight size={45} className="text-purple-400" />
							</Link>
							<p className="text-lg text-gray-300">Full-Stack Developer</p>
							<p className="text-gray-400 leading-relaxed">
								Passionate about creating innovative web solutions and bringing ideas to life through clean, efficient
								code.
							</p>
						</div>

						{/* Quick Links */}
						<div className="space-y-4">
							<h3 className="text-xl font-semibold text-cyan-400 mb-4">Quick Links</h3>
							<div className="space-y-3">
								{[
									{ name: "Home", href: "/" },
									{ name: "Projects", href: "/projects" },
									{ name: "Contact", href: "/contact" },
								].map((link) => (
									<Link
										key={link.name}
										to={link.href}
										className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 transform"
									>
										{link.name}
									</Link>
								))}
							</div>
						</div>

						{/* Contact Info */}
						<div className="space-y-4">
							<h3 className="text-xl font-semibold text-cyan-400 mb-4">Let's Connect</h3>
							<div className="space-y-3">
								<Link
									to="https://wa.me/8801625446383"
									target="_blank"
									className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
								>
									<div className="p-2 bg-white/10 rounded-lg group-hover:bg-cyan-400/20 transition-colors duration-300">
										<FaWhatsapp size={16} />
									</div>
									<span className="text-sm">+8801625446383</span>
								</Link>
								<Link
									to="mailto:arifuddincoder@gmail.com"
									className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
								>
									<div className="p-2 bg-white/10 rounded-lg group-hover:bg-cyan-400/20 transition-colors duration-300">
										<Mail size={16} />
									</div>
									<span className="text-sm">arifuddincoder@gmail.com</span>
								</Link>
								<div className="flex items-center gap-3 text-gray-300">
									<div className="p-2 bg-white/10 rounded-lg">
										<span className="text-sm">
											<Pin size={16} />
										</span>
									</div>
									<span className="text-sm">Tangail, Bangladesh</span>
								</div>
							</div>
						</div>
					</div>

					{/* Social Media & Bottom Section */}
					<div className="border-t border-white/10 pt-8">
						<div className="flex flex-col md:flex-row justify-between items-center gap-6">
							{/* Social Links */}
							<div className="flex items-center gap-4">
								<span className="text-gray-400 text-sm mr-2">Follow me:</span>
								{[
									{ icon: Mail, href: "mailto:arifuddincoder@gmail.com", label: "Email" },
									{ icon: Github, href: "https://github.com/arifuddincoder", label: "GitHub" },
									{ icon: Linkedin, href: "https://linkedin.com/in/arifuddincoder", label: "LinkedIn" },
								].map((social, index) => {
									const Icon = social.icon;
									return (
										<a
											key={index}
											href={social.href}
											target={social.href.startsWith("http") ? "_blank" : undefined}
											rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
											className="group relative p-3 bg-white/10 rounded-xl hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 transition-all duration-300 hover:scale-110 hover:shadow-lg"
											aria-label={social.label}
										>
											<Icon size={20} className="text-gray-300 group-hover:text-white transition-colors duration-300" />
											<div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
										</a>
									);
								})}
							</div>

							{/* Back to Top Button */}
							<button
								onClick={scrollToTop}
								className="group flex items-center gap-2 px-4 py-2 bg-white/10 rounded-xl hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 transition-all duration-300 hover:scale-105"
							>
								<span className="text-sm text-gray-300 group-hover:text-white">Back to Top</span>
								<ArrowUp
									size={16}
									className="text-gray-300 group-hover:text-white group-hover:-translate-y-1 transition-all duration-300"
								/>
							</button>
						</div>
					</div>

					{/* Copyright */}
					<div className="mt-8 pt-8 border-t border-white/10 text-center">
						<p className="text-gray-400 text-sm flex items-center justify-center gap-2 flex-col sm:flex-row">
							© {new Date().getFullYear()} Md Arif Uddin. Made with
							<Heart size={14} className="text-red-400 animate-pulse" />
							All rights reserved.
						</p>
					</div>
				</div>
			</div>

			{/* Decorative Elements */}
			<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500"></div>
		</footer>
	);
};

export default Footer;
