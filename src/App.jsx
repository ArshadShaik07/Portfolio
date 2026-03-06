import { useState, useEffect } from "react";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import OtherProjects from "./components/OtherProjects";
import AboutMe from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

function App() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const [activeSection, setActiveSection] = useState("");

	useEffect(() => {
		setLoading(true);
		setTimeout(() => setLoading(false), 800);
	}, []);

	useEffect(() => {
		if (loading) return;
		const sections = ["aboutme", "projects", "experience", "contact"];
		const observers = sections.map((id) => {
			const el = document.getElementById(id);
			if (!el) return null;
			const obs = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) setActiveSection(id);
				},
				{ threshold: 0.4 },
			);
			obs.observe(el);
			return obs;
		});
		return () => observers.forEach((o) => o && o.disconnect());
	}, [loading]);

	if (loading) {
		return (
			<div className="w-full h-screen flex justify-center items-center bg-[#080c10]">
				<div className="w-8 h-8 border border-slate-800 border-t-slate-300 rounded-full animate-spin" />
			</div>
		);
	}

	const navLinks = [
		{ href: "#aboutme", label: "About", id: "aboutme" },
		{ href: "#projects", label: "Projects", id: "projects" },
		{ href: "#experience", label: "Experience", id: "experience" },
		{ href: "#contact", label: "Contact", id: "contact" },
	];

	return (
		<div className="w-full min-h-screen bg-[#080c10] text-slate-300 font-mono scroll-smooth">
			{/* Desktop Sidebar */}
			<nav className="hidden md:flex fixed left-0 top-0 h-full w-48 flex-col justify-between py-12 pl-10 border-r border-[#0f1923] bg-[#080c10] z-50">
				<div>
					<p className="text-[10px] tracking-widest uppercase text-slate-600 mb-1">
						Portfolio
					</p>
					<p className="text-sm font-bold text-slate-100 mb-12 font-sans">
						Arshad Shaik
					</p>
					<div className="flex flex-col gap-5 pl-4">
						{navLinks.map((link) => (
							<a
								key={link.id}
								href={link.href}
								className={`relative text-[11px] tracking-widest uppercase no-underline transition-colors duration-200
									before:content-[''] before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2
									before:w-1.5 before:h-1.5 before:rounded-full before:bg-slate-200 before:transition-opacity before:duration-200
									${
										activeSection === link.id
											? "text-slate-200 before:opacity-100"
											: "text-slate-500 hover:text-slate-200 before:opacity-0"
									}`}
							>
								{link.label}
							</a>
						))}
					</div>
				</div>
				<div className="flex gap-4">
					<a
						href="https://github.com/ArshadShaik07"
						target="_blank"
						className="text-[11px] tracking-widest uppercase text-slate-600 hover:text-slate-200 no-underline transition-colors duration-200"
					>
						GH
					</a>
					<a
						href="https://www.linkedin.com/in/arshad-shaik-483668313/"
						target="_blank"
						className="text-[11px] tracking-widest uppercase text-slate-600 hover:text-slate-200 no-underline transition-colors duration-200"
					>
						LI
					</a>
				</div>
			</nav>

			{/* Mobile Header */}
			<header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[#080c10] border-b border-[#0f1923]">
				<div className="flex items-center justify-between px-6 py-4">
					<p className="text-sm font-bold text-slate-100 font-sans">
						Arshad Shaik
					</p>
					<button
						onClick={() => setMobileMenuOpen((s) => !s)}
						className="text-slate-500 hover:text-slate-200 transition-colors bg-transparent border-none cursor-pointer"
					>
						{mobileMenuOpen ? (
							<svg
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="1.5"
							>
								<path d="M18 6L6 18" />
								<path d="M6 6l12 12" />
							</svg>
						) : (
							<svg
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="1.5"
							>
								<path d="M3 6h18" />
								<path d="M3 12h18" />
								<path d="M3 18h18" />
							</svg>
						)}
					</button>
				</div>
				<div
					className={`overflow-hidden transition-all duration-300 ${mobileMenuOpen ? "max-h-56" : "max-h-0"} border-t border-[#0f1923]`}
				>
					<div className="flex flex-col px-6 py-4 gap-4">
						{navLinks.map((link) => (
							<a
								key={link.id}
								href={link.href}
								onClick={() => setMobileMenuOpen(false)}
								className="text-[11px] tracking-widest uppercase text-slate-500 hover:text-slate-200 no-underline transition-colors"
							>
								{link.label}
							</a>
						))}
					</div>
				</div>
			</header>

			{/* Main Content */}
			<main className="flex flex-col md:ml-48 mt-16 md:mt-0">
				<Intro />
				<div id="aboutme">
					<AboutMe />
				</div>
				<div id="projects">
					<Projects />
				</div>
				<div id="other-projects">
					<OtherProjects />
				</div>
				<div id="experience">
					<Experience />
				</div>
				<div id="contact">
					<Contact />
				</div>
			</main>
		</div>
	);
}

export default App;
