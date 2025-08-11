// src/pages/ProjectDetails.jsx
import { useParams, Link, useNavigate } from "react-router";
import { useEffect } from "react";
import { projects } from "../data/projects";

export default function ProjectDetails() {
	const { id } = useParams();
	const navigate = useNavigate();

	const project = projects.find((p) => p.id === id);

	useEffect(() => {
		if (project?.name) document.title = `${project.name} – Projects`;
	}, [project]);

	if (!project) {
		return (
			<div className="max-w-5xl mx-auto p-6">
				<p className="text-gray-300 mb-6">Project not found.</p>
				<button onClick={() => navigate(-1)} className="px-4 py-2 bg-white/10 rounded-lg border border-white/20">
					Go Back
				</button>
			</div>
		);
	}

	return (
		<section className="relative z-10 py-10 lg:py-16 px-6">
			<div className="max-w-5xl mx-auto">
				<div className="flex items-center justify-between mb-6">
					<h1 className="text-3xl md:text-4xl font-bold">{project.name}</h1>
					<Link to="/" className="text-cyan-400 hover:underline">
						← Back to Projects
					</Link>
				</div>

				<img src={project.image} alt={project.name} className="rounded-2xl mb-6 border border-white/10" />

				{/* Brief description */}
				<p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>

				{/* Main stack */}
				<div className="mb-6">
					<h2 className="text-xl font-semibold mb-3">Main Technology Stack</h2>
					<div className="flex flex-wrap gap-2">
						{(project.stack ?? project.tags)?.map((t) => (
							<span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm">
								{t}
							</span>
						))}
					</div>
				</div>

				{/* Links */}
				<div className="flex gap-3 mb-8">
					{project.live && (
						<a href={project.live} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-cyan-500/20">
							Live Project
						</a>
					)}
					{project.github && project.github !== "#" && (
						<a href={project.github} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-purple-500/20">
							GitHub (Client)
						</a>
					)}
				</div>

				{/* Challenges */}
				{project.challenges?.length > 0 && (
					<div className="mb-8">
						<h2 className="text-xl font-semibold mb-3">Challenges Faced</h2>
						<ul className="list-disc pl-6 space-y-2 text-gray-300">
							{project.challenges.map((c, i) => (
								<li key={i}>{c}</li>
							))}
						</ul>
					</div>
				)}

				{/* Improvements / Future plans */}
				{project.improvements?.length > 0 && (
					<div className="mb-2">
						<h2 className="text-xl font-semibold mb-3">Potential Improvements & Future Plans</h2>
						<ul className="list-disc pl-6 space-y-2 text-gray-300">
							{project.improvements.map((c, i) => (
								<li key={i}>{c}</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</section>
	);
}
