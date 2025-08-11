// src/pages/ProjectDetails.jsx
import { useParams, Link, useNavigate } from "react-router";
import { useEffect } from "react";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { projects } from "../../assets/data/projects";

export default function ProjectDetails() {
	const { id } = useParams();
	const navigate = useNavigate();

	const project = projects.find((p) => p.id === id);

	useEffect(() => {
		if (project?.name) document.title = `${project.name} – Projects`;
	}, [project]);

	if (!project) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
				<div className="relative z-10 max-w-5xl mx-auto p-6">
					<p className="text-gray-300 mb-6">Project not found.</p>
					<button
						onClick={() => navigate(-1)}
						className="px-4 py-2 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition"
					>
						Go Back
					</button>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
			{/* Animated Background Elements */}
			<div className="fixed inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
				<div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
			</div>

			<div className="relative z-10 px-6 md:px-20 pt-24 pb-20 max-w-5xl mx-auto">
				{/* Header */}
				<div className="text-center mb-10">
					<h1 className="text-3xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
						{project.name}
					</h1>
					<p className="text-gray-300 max-w-3xl mx-auto">{project.description}</p>

					<div className="mt-6 flex flex-wrap justify-center gap-3">
						<Link
							to="/projects"
							className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition"
						>
							<ArrowLeft size={16} />
							<span>Back to Projects</span>
						</Link>

						{project.live && (
							<a
								href={project.live}
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition"
							>
								<ExternalLink size={16} />
								<span>Live Project</span>
							</a>
						)}
						{project.github && project.github !== "#" && (
							<a
								href={project.github}
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition"
							>
								<Github size={16} />
								<span>GitHub (Client)</span>
							</a>
						)}
					</div>
				</div>

				{/* Image */}
				<div className="relative mb-10">
					<img
						src={project.image}
						alt={project.name}
						className="w-full rounded-2xl border border-white/10 shadow-2xl"
					/>
					{project.category && (
						<span className="absolute top-4 left-4 px-3 py-1 bg-cyan-400/20 text-cyan-300 text-xs font-semibold rounded-full border border-cyan-300/30">
							{project.category}
						</span>
					)}
				</div>

				{/* Main Technology Stack */}
				<div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
					<h2 className="text-xl font-semibold mb-4">Main Technology Stack</h2>
					<div className="flex flex-wrap gap-2">
						{(project.stack ?? project.tags)?.map((t) => (
							<span key={t} className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm text-gray-200">
								{t}
							</span>
						))}
					</div>
				</div>

				{/* Challenges Faced */}
				{project.challenges?.length > 0 && (
					<div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
						<h2 className="text-xl font-semibold mb-4">Challenges Faced</h2>
						<ul className="list-disc pl-6 space-y-2 text-gray-300">
							{project.challenges.map((c, i) => (
								<li key={i}>{c}</li>
							))}
						</ul>
					</div>
				)}

				{/* Potential Improvements */}
				{project.improvements?.length > 0 && (
					<div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
						<h2 className="text-xl font-semibold mb-4">Potential Improvements & Future Plans</h2>
						<ul className="list-disc pl-6 space-y-2 text-gray-300">
							{project.improvements.map((c, i) => (
								<li key={i}>{c}</li>
							))}
						</ul>
					</div>
				)}

				{/* Tags */}
				{project.tags?.length > 0 && (
					<div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
						<h2 className="text-xl font-semibold mb-4">Tags</h2>
						<div className="flex flex-wrap gap-2">
							{project.tags.map((tag) => (
								<span
									key={tag}
									className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-md border border-white/20"
								>
									{tag}
								</span>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
