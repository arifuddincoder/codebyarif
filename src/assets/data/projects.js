import talkoraImg from "../projects/talkora-forum.jpg";
import cornerstoneImg from "../projects/cp.jpg";
import findnestImg from "../projects/findnest.jpg";
import educoreImg from "../projects/educore.jpg";
import subbloomImg from "../projects/subbloom.jpg";
import lifeLinkUSAImg from "../projects/lifelinkusa.jpg";
export const projects = [
	{
		id: "talkora",
		name: "Talkora",
		description:
			"A feature-rich discussion platform with real-time posts, comments, voting, membership tiers, and an admin dashboard for content moderation.",
		image: talkoraImg,
		live: "https://b11a12-talkora.web.app/",
		github: "https://github.com/arifuddincoder/talkora-forum-client",
		tags: ["React", "Firebase", "MongoDB", "Express"],
		category: "Full-Stack",
		featured: true,
		stack: ["React", "TypeScript", "Firebase Auth", "MongoDB", "Express", "TanStack Query", "Stripe"],
		challenges: [
			"Designing a MongoDB aggregation pipeline to sort posts by vote difference.",
			"Managing optimistic UI updates and cache invalidation for real-time interactions.",
			"Implementing secure role-based access (admin/member) with rate limiting.",
		],
		improvements: [
			"Migrate to Next.js for SSR and SEO improvement.",
			"Introduce queue-based email notifications (BullMQ/Cloud Tasks).",
			"Add advanced search with text index and tag boosting.",
		],
	},
	{
		id: "educore",
		name: "EduCore",
		description: "A modern course management system with Firebase Auth, dashboard, and seat management.",
		image: educoreImg,
		live: "https://b11a11-educore.web.app/",
		github: "https://github.com/arifuddincoder/educore_clientside",
		tags: ["React", "Firebase", "MongoDB", "Express"],
		category: "Full-Stack",
		featured: true,
		stack: ["React", "Firebase Auth", "MongoDB", "Express", "DaisyUI"],
		challenges: [
			"Maintaining seat availability consistency during concurrent enrollments.",
			"Enforcing a limit of maximum 3 concurrent course enrollments per user.",
		],
		improvements: [
			"Add instructor analytics dashboards with cohort metrics.",
			"Implement a waitlist flow with email reminders and priority rules.",
		],
	},
	{
		id: "findnest",
		name: "FindNest",
		description: "Roommate finder platform with filtering, listing, and a secure dashboard.",
		image: findnestImg,
		live: "https://b11a10-findnest.web.app/",
		github: "https://github.com/arifuddincoder/findnest-client",
		tags: ["React", "Node.js", "JWT", "MongoDB"],
		category: "Full-Stack",
		featured: true,
		stack: ["React", "Node.js", "JWT", "MongoDB", "Axios"],
		challenges: [
			"Optimizing geo/area-based filtering for fast queries.",
			"Separating dashboard permissions for different roles (rider/owner).",
		],
		improvements: [
			"Add a map view with clustering and saved search alerts.",
			"Introduce verification badges and trust signals.",
		],
	},
	{
		id: "cornerstone",
		name: "CornerStone Protection",
		description: "A professional security service website for alarm system installation and monitoring.",
		image: cornerstoneImg,
		live: "https://www.cornerstoneprotection.com/",
		github: "#",
		tags: ["HTML", "CSS", "JavaScript", "PHP", "WordPress"],
		category: "Website",
		featured: false,
		stack: ["WordPress", "PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
		challenges: [
			"Maintaining high performance with rich media content and forms.",
			"Ensuring reliable lead capture and routing to CRM/email.",
		],
		improvements: [
			"Add schema markup and further Core Web Vitals tuning.",
			"Integrate A/B testing for landing pages and CTAs.",
		],
	},
	{
		id: "subbloom",
		name: "SubBloom",
		description: "A professional flower subscription service website for curated bloom delivery and flexible plans.",
		image: subbloomImg,
		live: "https://b11a9-subbloom.web.app/",
		github: "https://github.com/arifuddincoder/react-subbloom",
		tags: ["React", "Firebase", "JavaScript", "Tailwind"],
		category: "Web App",
		featured: false,
		stack: ["React", "Firebase", "Tailwind CSS", "React Hook Form"],
		challenges: [
			"Handling subscription plan logic and pricing variations.",
			"Building a clean, conversion-focused checkout experience.",
		],
		improvements: [
			"Add coupon codes, gift subscriptions, and referral rewards.",
			"Introduce order tracking and delivery notifications.",
		],
	},
	{
		id: "lifelinkusa",
		name: "Life Link USA",
		description:
			"Provider of personal emergency response systems (PERS) with in‑home and on‑the‑go medical alerts, fall detection, and wearable LTE devices.",
		image: lifeLinkUSAImg,
		live: "https://www.lifelinkusa.com/",
		github: "",
		tags: ["PHP", "WordPress", "Woocommerce"],
		category: "Website",
		featured: false,
		stack: ["WordPress", "WooCommerce", "PHP", "MySQL", "JavaScript"],
		challenges: [
			"Configuring WooCommerce for accessible product pages and simplified checkout.",
			"Balancing performance with media-heavy content and trust elements.",
		],
		improvements: [
			"Add subscription analytics and churn insights.",
			"Enhance accessibility and multilingual support for broader reach.",
		],
	},
];
