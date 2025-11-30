function Projects() {
	const projectList = [
		{
			title: "TravelMate",
			desc: "A full-stack MERN application where users can book flights and hotels for holidays. Includes authentication, secure APIs, and real booking flows.",
			gitLink: "https://github.com/ArshadShaik07/Holiday-Booking-Site",
			liveLink: "https://holidaybookingsystem-frontend.onrender.com/",
		},
		{
			title: "Notes App",
			desc: "A full-stack MERN notes app with full CRUD functionality, MongoDB storage, and a clean responsive UI.",
			gitLink: "https://github.com/ArshadShaik07/Notez0",
			liveLink: "https://notez0-1.onrender.com/",
		},
		{
			title: "Food Recipe App",
			desc: "A React app to search for recipes, view details, and save your favorite dishes. Uses a public food API.",
			gitLink: "https://github.com/ArshadShaik07/food-recipe-app",
			liveLink: "https://food-recipe-app-shmi.onrender.com/",
		},
		{
			title: "GitHub Profile Finder",
			desc: "A simple web app that fetches GitHub user data using the GitHub API and displays their profile details.",
			gitLink:
				"https://github.com/ArshadShaik07/Projects-using-React/tree/main/src/github-profile-finder",
			liveLink: "",
		},
	];

	return (
		<section className="w-full py-14 px-6 flex flex-col items-center font-mono">
			<div className="flex flex-col items-start">
				<h2 className="text-5xl font-semibold mb-8 text-[#f5990f]">
					My Projects
				</h2>

				<div className="flex flex-col flex-wrap gap-6 max-w-3xl">
					{projectList.map((p, index) => (
						<div
							key={index}
							className="p-5 rounded-xl border hover:scale-102 transition duration-250 hover:bg-[#77133b] "
						>
							<p className="text-2xl font-semibold mb-1 text-[#f5b95f]">
								{p.title}
							</p>
							<p className="text-gray-300 text-md">{p.desc}</p>
							<div className="flex gap-x-3 items-center">
								<a
									href={p.gitLink}
									target="_blank"
									className="flex items-center gap-2 w-fit px-3 py-2 rounded-md border hover:bg-[#1e3a63] transition"
								>
									<img
										src="https://img.icons8.com/?size=100&id=16318&format=png&color=f5b95f"
										className="w-6"
									/>
									GitHub
								</a>
								{p.liveLink.length > 0 && (
									<a
										className="hover:underline"
										href={p.liveLink}
										target="_blank"
									>
										live link
									</a>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Projects;
