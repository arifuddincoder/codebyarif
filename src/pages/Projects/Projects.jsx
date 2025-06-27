import ProjectCard from "./ProjectCard";
import cornerstoneImg from "../../assets/projects/cp.jpg";
import findnestImg from "../../assets/projects/findnest.jpg";
import educoreImg from "../../assets/projects/educore.jpg";
const projects = [
	{
		id: "educore",
		name: "EduCore",
		description: "A modern course management system with Firebase Auth, dashboard, and seat management.",
		image: educoreImg,
		live: "https://b11a11-educore.web.app/",
		github: "https://github.com/arif128551/educore_clientside",
	},
	{
		id: "findnest",
		name: "FindNest",
		description: "Roommate finder platform with filtering, listing, and secure dashboard.",
		image: findnestImg,
		live: "https://b11a10-findnest.web.app/",
		github: "https://github.com/arif128551/findnest_client",
	},
	{
		id: "cornerstone",
		name: "CornerStone Protection",
		description: "A professional security service website for alarm system installation and monitoring.",
		image: cornerstoneImg,
		live: "https://www.cornerstoneprotection.com/",
		github: "#",
	},
];

const Projects = () => {
	return (
		<div className="min-h-screen px-6 md:px-20 py-20 bg-gray-50">
			<h2 className="text-4xl font-bold text-center text-indigo-600 mb-12">My Projects</h2>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
				{projects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</div>
	);
};

export default Projects;
