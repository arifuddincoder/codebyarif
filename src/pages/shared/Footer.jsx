import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-base-200 text-base-content px-6 md:px-20 py-10 border-t border-gray-300">
			<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
				<div className="text-center md:text-left">
					<h2 className="text-lg font-semibold">Md Arif Uddin</h2>
					<p className="text-sm">Full-Stack MERN Developer</p>
					<p className="text-xs text-gray-500">© {new Date().getFullYear()} All rights reserved.</p>
				</div>

				<div className="flex gap-5 text-xl">
					<a href="mailto:arifmbstu128551@gmail.com" className="hover:text-indigo-600 transition">
						<FaEnvelope />
					</a>
					<a href="https://github.com/arif128551" target="_blank" className="hover:text-indigo-600 transition">
						<FaGithub />
					</a>
					<a href="https://linkedin.com/in/arif128551" target="_blank" className="hover:text-indigo-600 transition">
						<FaLinkedin />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
