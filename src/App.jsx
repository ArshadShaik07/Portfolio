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

	useEffect(() => {
		setLoading(true);
		setTimeout(() => setLoading(false), 500);
	}, []);

	if (loading) {
		return (
			<div className="w-full h-screen flex justify-center items-center font-mono text-[#f5b95f] bg-[#1e3a63] text-2xl overflow-hidden">
				Loading...
			</div>
		);
	}

	return (
		<div className="w-full min-h-screen flex text-amber-50 font-mono scroll-smooth bg-[]">
			<nav className="hidden md:flex shadow-[inset_-8px_0_8px_-4px_rgba(0,0,0,0.4)] border-r-[#376b56] fixed left-0 top-0 h-full w-40 flex-col justify-center items-start pl-3 pr-0 bg-[#1e3a63]">
				<a
					href="#aboutme"
					className="w-full py-1 pl-1  mb-2 rounded-l-2xl text-lg transition hover:underline text-[#f5b95f]"
				>
					About
				</a>

				<a
					href="#projects"
					className="w-full py-1 pl-1 p-r-0 mb-2 rounded-l-2xl text-lg transition hover:underline text-[#f5b95f]"
				>
					Projects
				</a>

				<a
					href="#experience"
					className="w-full py-1 pl-1 p-r-0 mb-2 rounded-l-2xl text-lg transition hover:underline text-[#f5b95f]"
				>
					Experience
				</a>

				<a
					href="#contact"
					className="w-full py-1 pl-1 p-r-0 mb-2 rounded-l-2xl text-lg transition hover:underline text-[#f5b95f]"
				>
					Contact
				</a>
			</nav>

			{/* ===== Mobile Top Bar (visible on small screens) ===== */}
			<header className="md:hidden fixed top-0 left-0 right-0 z-50">
				<div
					className="flex items-center justify-between px-4 py-3"
					style={{
						backgroundColor: "#14233b",
						borderBottom: "1px solid #376b56",
					}}
				>
					<div
						className="text-lg font-semibold"
						style={{ color: "#f5b95f" }}
					>
						Shaik Arshad
					</div>

					<button
						onClick={() => setMobileMenuOpen((s) => !s)}
						className="p-2 rounded-md transition"
						aria-label="Toggle menu"
						style={{ color: "#f5b95f" }}
					>
						{/* simple hamburger / X */}
						{mobileMenuOpen ? (
							<svg
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
							>
								<path d="M18 6L6 18" />
								<path d="M6 6l12 12" />
							</svg>
						) : (
							<svg
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
							>
								<path d="M3 6h18" />
								<path d="M3 12h18" />
								<path d="M3 18h18" />
							</svg>
						)}
					</button>
				</div>

				{/* Slide-down mobile menu */}
				<div
					className={`overflow-hidden transition-[max-height] duration-250`}
					style={{
						maxHeight: mobileMenuOpen ? 220 : 0,
						backgroundColor: "#14233b",
						borderBottom: "1px solid #376b56",
					}}
				>
					<div className="flex flex-col px-4 pb-3">
						<a
							href="#aboutme"
							onClick={() => setMobileMenuOpen(false)}
							className="py-2 text-lg rounded-md hover:bg-[#1e3a63] text-[#f5b95f]"
						>
							About
						</a>
						<a
							href="#projects"
							onClick={() => setMobileMenuOpen(false)}
							className="py-2 text-lg rounded-md hover:bg-[#1e3a63] text-[#f5b95f]"
						>
							Projects
						</a>
						<a
							href="#experience"
							onClick={() => setMobileMenuOpen(false)}
							className="py-2 text-lg rounded-md hover:bg-[#1e3a63] text-[#f5b95f]"
						>
							Experience
						</a>
						<a
							href="#contact"
							onClick={() => setMobileMenuOpen(false)}
							className="py-2 text-lg rounded-md hover:bg-[#1e3a63] text-[#f5b95f] "
						>
							Contact
						</a>
					</div>
				</div>
			</header>

			{/* ===== Main Content =====
          - add left margin on md and up (md:ml-40)
          - add top margin on mobile to avoid overlapping the top bar (mt-16)
      */}
			<main className="flex flex-col flex-1 md:ml-40 mt-16 md:mt-0 py-10 items-center gap-20">
				<div className="w-full">
					<Intro />
				</div>

				<div id="aboutme" className="w-full">
					<AboutMe />
				</div>

				<div id="projects" className="w-full">
					<Projects />
				</div>

				<div id="other-projects" className="w-full">
					<OtherProjects />
				</div>

				<div id="experience" className="w-full">
					<Experience />
				</div>

				<div id="contact" className="w-full">
					<Contact />
				</div>
			</main>
		</div>
	);
}

export default App;
