function AboutMe() {
	const skills = [
		"JavaScript",
		"React",
		"Tailwind CSS",
		"REST APIs",
		"Node.js",
		"Express.js",
		"MongoDB",
	];

	return (
		<section className="py-28 px-10 md:px-16 border-b border-[#0f1923]">
			<div className="max-w-2xl">
				<p className="text-[13px] tracking-[0.2em] uppercase text-slate-600 mb-3">
					01 — About
				</p>
				<h2 className="font-sans font-extrabold text-slate-100 text-5xl md:text-6xl tracking-tight mb-4">
					About Me
				</h2>
				<div className="w-8 h-px bg-[#1e2a3a] mb-8" />

				<p className="text-[16px] leading-loose text-slate-500 font-light mb-5">
					I'm{" "}
					<span className="text-slate-200 font-medium">Arshad</span>,
					a MERN stack developer who enjoys building clean and
					easy-to-use web applications. I like writing code, whether
					it's on the frontend or the backend.
				</p>
				<p className="text-[16px] leading-loose text-slate-500 font-light">
					Right now, I'm improving my MERN skills and preparing to
					apply for internships. I enjoy learning new things, working
					on projects, and constantly getting better at development.
				</p>

				<div className="flex flex-wrap gap-2 mt-10">
					{skills.map((tech) => (
						<span
							key={tech}
							className="px-3 py-1 text-[13px] tracking-widest uppercase border border-[#1e2a3a] text-slate-600"
						>
							{tech}
						</span>
					))}
				</div>
			</div>
		</section>
	);
}

export default AboutMe;
