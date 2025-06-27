import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
	const navLinks = (
		<>
			<li>
				<NavLink to="/" className={({ isActive }) => (isActive ? "text-indigo-600 font-semibold" : "")}>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink to="/projects" className={({ isActive }) => (isActive ? "text-indigo-600 font-semibold" : "")}>
					Projects
				</NavLink>
			</li>
			<li>
				<NavLink to="/contact" className={({ isActive }) => (isActive ? "text-indigo-600 font-semibold" : "")}>
					Contact
				</NavLink>
			</li>
		</>
	);

	return (
		<div className="navbar bg-white shadow-md px-4 md:px-8 sticky top-0 z-50">
			<div className="navbar-start">
				<NavLink to="/" className="text-2xl font-bold text-indigo-600 tracking-wide">
					Md Arif Uddin
				</NavLink>
			</div>

			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1 gap-2">{navLinks}</ul>
			</div>

			<div className="navbar-end">
				<a href="/resume.pdf" download className="btn btn-sm bg-indigo-600 text-white hover:bg-indigo-700 rounded-full">
					Download Resume
				</a>
				<div className="dropdown dropdown-end lg:hidden ml-2">
					<label tabIndex={0} className="btn btn-sm btn-ghost">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-white rounded-box w-52 space-y-2"
					>
						{navLinks}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
