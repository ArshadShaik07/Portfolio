function Projects() {
	const projectList = [
		{
			title: "TravelMate",
			desc: "A full-stack MERN application where users can book flights and hotels for holidays. Includes authentication, secure APIs, and real booking flows.",
			gitLink: "https://github.com/ArshadShaik07/Holiday-Booking-Site",
			liveLink: "https://holidaybookingsystem-frontend.onrender.com/",
			num: "01",
		},
		{
			title: "Notes App",
			desc: "A full-stack MERN notes app with full CRUD functionality, MongoDB storage, and a clean responsive UI.",
			gitLink: "https://github.com/ArshadShaik07/Notez0",
			liveLink: "https://notez0-1.onrender.com/",
			num: "02",
		},
		{
			title: "Food Recipe App",
			desc: "A React app to search for recipes, view details, and save your favorite dishes. Uses a public food API.",
			gitLink: "https://github.com/ArshadShaik07/food-recipe-app",
			liveLink: "https://food-recipe-app-shmi.onrender.com/",
			num: "03",
		},
		{
			title: "GitHub Profile Finder",
			desc: "A simple web app that fetches GitHub user data using the GitHub API and displays their profile details.",
			gitLink:
				"https://github.com/ArshadShaik07/Projects-using-React/tree/main/src/github-profile-finder",
			liveLink: "",
			num: "04",
		},
	];

	return (
		<section className="py-28 px-10 md:px-16 border-b border-[#0f1923]">
			<div className="max-w-2xl">
				<p className="text-[13px] tracking-[0.2em] uppercase text-slate-600 mb-3">
					02 — Work
				</p>
				<h2 className="font-sans font-extrabold text-slate-100 text-5xl md:text-6xl tracking-tight mb-4">
					My Projects
				</h2>
				<div className="w-8 h-px bg-[#1e2a3a] mb-2" />

				<div className="flex flex-col">
					{projectList.map((p, index) => (
						<div
							key={index}
							className="grid grid-cols-[40px_1fr] gap-6 py-8 border-b border-[#0f1923] group hover:-translate-y-1 transition-transform duration-200"
						>
							<span className="text-[14px] tracking-wider text-[#1e2a3a] pt-1">
								{p.num}
							</span>
							<div>
								<h3 className="font-sans font-bold text-slate-100 text-2xl mb-2 group-hover:text-white transition-colors duration-200">
									{p.title}
								</h3>
								<p className="text-[16px] leading-loose text-slate-500 font-light mb-5">
									{p.desc}
								</p>
								<div className="flex gap-5 items-center">
									<a
										href={p.gitLink}
										target="_blank"
										className="text-[14px] tracking-widest uppercase text-slate-600 hover:text-slate-200 no-underline transition-colors duration-200"
									>
										GitHub →
									</a>
									{p.liveLink && (
										<a
											href={p.liveLink}
											target="_blank"
											className="text-[11px] tracking-widest uppercase text-slate-600 hover:text-slate-200 no-underline transition-colors duration-200"
										>
											Live →
										</a>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Projects;
