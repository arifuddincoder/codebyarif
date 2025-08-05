import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { Mail, Phone, MessageCircle, Linkedin, Github, MapPin, Clock, Send, CalendarClock } from "lucide-react";
import ContactCard from "./ContactCard";
import SocialCard from "./SocialCard";

const Contact = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const contactMethods = [
		{
			icon: Mail,
			title: "Email",
			value: "arifuddincoder@gmail.com",
			link: "mailto:arifuddincoder@gmail.com",
			linkText: "Email Me",
			delay: 200,
		},
		{
			icon: Phone,
			title: "Phone",
			value: "+8801625446383",
			link: "tel:+8801625446383",
			linkText: "Call Now",
			delay: 400,
		},
		{
			icon: MessageCircle,
			title: "WhatsApp",
			value: "+8801625446383",
			link: "https://wa.me/8801625446383",
			linkText: "WhatsApp",
			delay: 600,
		},
		{
			icon: MapPin,
			title: "Location",
			value: "Tangail, Dhaka Division, Bangladesh",
			delay: 800,
		},
		{
			icon: Clock,
			title: "Availability",
			value: "Open for freelance projects and collaborations",
			delay: 1000,
		},
		{
			icon: CalendarClock,
			title: "Best Time to Reach",
			value: "10:00 AM – 11:00 PM (GMT+6)",
			delay: 1200,
		},
	];

	const socialLinks = [
		{
			icon: Linkedin,
			platform: "LinkedIn",
			username: "@arifuddincoder",
			link: "https://www.linkedin.com/in/arifuddincoder/",
			color: "blue-600",
			delay: 1200,
		},
		{
			icon: Github,
			platform: "GitHub",
			username: "@arifuddincoder",
			link: "https://github.com/arifuddincoder",
			color: "gray-700",
			delay: 1400,
		},
	];
	useEffect(() => {
		document.title = "Contact | Md Arif Uddin - Full-Stack Developer";
	}, []);
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
			<div className="fixed inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
				<div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
			</div>

			<div className="relative z-10 px-6 md:px-20  pt-30 pb-20">
				<div
					className={`text-center mb-16 transition-all duration-1000 ${
						isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
					}`}
				>
					<h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
						Get In Touch
					</h2>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
						I'm currently open to freelance projects, collaborations, or any tech-related conversations. Let's build
						something amazing together!
					</p>
				</div>

				{/* Contact Methods Grid */}
				<div className="max-w-6xl mx-auto mb-16">
					<div
						className={`mb-12 transition-all duration-1000 delay-300 ${
							isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
						}`}
					>
						<h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
							Contact Methods
						</h3>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{contactMethods.map((method, index) => (
							<ContactCard key={index} {...method} />
						))}
					</div>
				</div>

				{/* Social Links */}
				<div className="max-w-6xl mx-auto">
					<div
						className={`mb-12 transition-all duration-1000 delay-500 ${
							isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
						}`}
					>
						<h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
							Connect With Me
						</h3>
					</div>

					<div className="grid md:grid-cols-2 gap-6 mb-16">
						{socialLinks.map((social, index) => (
							<SocialCard key={index} {...social} />
						))}
					</div>
				</div>

				{/* CTA Section */}
				<div
					className={`max-w-6xl mx-auto text-center transition-all duration-1000 delay-700 ${
						isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
					}`}
				>
					<div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
						<h3 className="text-2xl font-bold text-white mb-4">Ready to Start a Project?</h3>
						<p className="text-gray-300 mb-6">
							Whether you have a clear vision or just an idea, I'm here to help bring your digital dreams to life.
						</p>
						<Link
							to="mailto:arifuddincoder@gmail.com"
							className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-2xl hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
						>
							<Mail size={20} />
							Let's Talk Business
						</Link>
					</div>
				</div>

				{/* Stats Section */}
				<div
					className={`max-w-6xl mx-auto mt-20 transition-all duration-1000 delay-900 ${
						isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
					}`}
				>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
						{[
							{ label: "Response Time", value: "< 24h" },
							{ label: "Projects Completed", value: "500+" },
							{ label: "Happy Clients", value: "50+" },
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

export default Contact;
