import React from "react";
import profile from "../../assets/profile.jpg";

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
];

const Home = () => {
	return (
		<div className="text-gray-800">
			<section className="min-h-[90vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-20 bg-gradient-to-br from-[#4f46e5] via-[#7c3aed] to-[#ec4899] text-white">
				<div className="max-w-xl space-y-6 py-12">
					<h1 className="text-4xl md:text-6xl font-bold leading-tight">Hi, I'm Md Arif Uddin</h1>
					<h2 className="text-2xl font-medium text-white/90">Full-Stack MERN Developer</h2>
					<p className="text-white/80 text-lg">
						I build scalable web applications and love experimenting with modern JavaScript tools and frameworks.
					</p>
					<a
						href="/resume.pdf"
						download
						className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
					>
						Download Resume
					</a>
				</div>
				<div className="py-12">
					<div className="w-64 h-64 rounded-full overflow-hidden border-8 border-white shadow-lg">
						<img src={profile} alt="Md Arif Uddin" className="w-full h-full object-cover" />
					</div>
				</div>
			</section>

			<section className="py-20 bg-white px-6 md:px-20">
				<h2 className="text-4xl font-bold text-center text-indigo-600 mb-12">About Me</h2>
				<div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
					<p className="text-lg leading-relaxed">
						I'm <strong>Md Arif Uddin</strong>, a passionate Full-Stack MERN Developer from 🇧🇩 South Asia. Currently
						working on <strong>EduCore</strong>, learning <strong>Next.js</strong>, and exploring{" "}
						<strong>MongoDB Aggregation</strong>, advanced <strong>Firebase Auth</strong>, and performance optimization
						in React.
					</p>
					<ul className="space-y-4 text-base">
						<li>🔭 Working on EduCore (Course Management System)</li>
						<li>🌱 Learning Next.js and SSR</li>
						<li>🚀 Exploring Firebase + MongoDB aggregation</li>
						<li>💡 Always eager to learn new things</li>
					</ul>
				</div>
			</section>

			<section className="py-20 bg-gray-100 px-6 md:px-20">
				<h2 className="text-4xl font-bold text-center text-indigo-600 mb-12">Skills</h2>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
					{skills.map((skill) => (
						<div
							key={skill}
							className="bg-white text-center px-4 py-3 rounded-lg shadow hover:shadow-md hover:scale-105 transition text-sm font-medium"
						>
							{skill}
						</div>
					))}
				</div>
			</section>

			<section className="py-16 px-6 md:px-20 bg-white">
				<h2 className="text-3xl font-bold text-indigo-600 mb-6">Education</h2>
				<div className="bg-gray-100 p-6 rounded-lg shadow max-w-3xl mx-auto">
					<p className="text-lg font-medium">🎓 B.Sc (Hons) in Physics</p>
					<p className="text-gray-700">Mawlana Bhashani Science and Technology University, Tangail</p>
				</div>
			</section>

			<section className="py-16 px-6 md:px-20 bg-gray-100">
				<h2 className="text-3xl font-bold text-indigo-600 mb-6">Experience</h2>
				<div className="bg-white p-6 rounded-lg shadow max-w-3xl mx-auto">
					<p className="text-lg font-medium">💼 Web Developer at CornerStone Protection</p>
					<p className="text-gray-700">2015 - Present</p>
				</div>
			</section>
		</div>
	);
};

export default Home;
