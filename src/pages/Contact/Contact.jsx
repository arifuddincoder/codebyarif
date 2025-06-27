import React from "react";
import { Link } from "react-router";
const Contact = () => {
	return (
		<div className="min-h-screen bg-white px-6 md:px-20 py-20 text-gray-800">
			<h2 className="text-4xl font-bold text-center text-indigo-600 mb-12">Contact Me</h2>

			<div className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-xl shadow space-y-6">
				<p className="text-lg">
					I’m currently open to freelance projects, collaborations, or any tech-related conversations. Feel free to
					reach out to me through the following ways:
				</p>

				<div className="space-y-4 text-base">
					<div>
						<span className="font-semibold">📧 Email: </span>
						<Link to="mailto:arifmbstu128551@gmail.com" className="text-indigo-600 hover:underline">
							arifmbstu128551@gmail.com
						</Link>
					</div>

					<div>
						<span className="font-semibold">📱 Phone: </span>
						<Link to="tel:+8801625446383" className="text-indigo-600 hover:underline">
							+8801625446383
						</Link>
					</div>

					<div>
						<span className="font-semibold">💬 WhatsApp: </span>
						<Link to="https://wa.me/8801625446383" className="text-indigo-600 hover:underline" target="_blank">
							Message on WhatsApp
						</Link>
					</div>
				</div>

				<div className="pt-6">
					<p className="text-gray-600 text-sm">
						Alternatively, you can connect with me on{" "}
						<Link
							to="https://www.linkedin.com/in/arif128551/"
							className="text-indigo-600 hover:underline"
							target="_blank"
						>
							LinkedIn
						</Link>{" "}
						or{" "}
						<Link to="https://github.com/arif128551" className="text-indigo-600 hover:underline" target="_blank">
							GitHub
						</Link>
						.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Contact;
