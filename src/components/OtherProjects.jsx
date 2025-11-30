function OtherProjects() {
	const otherProjects = [
		{
			title: "Weather App",
			desc: "Check the weather of any city using a public API.",
			gitLink: "https://github.com/ArshadShaik07/Weather-App",
		},
		{
			title: "Tic-Tac-Toe Game",
			desc: "A simple tic-tac-toe game built with React.",
			gitLink:
				"https://github.com/ArshadShaik07/Projects-using-React/tree/main/src/tic-tac-toe",
		},
		{
			title: "Rock Paper Scissors",
			desc: "My first website built using HTML, CSS, and JavaScript.",
			gitLink:
				"https://github.com/ArshadShaik07/FirstWebsite-RockPaperScissors",
		},
	];

	return (
		<section className="w-full py-14 px-6 flex flex-col items-center font-mono">
			<div className="flex flex-col items-start">
				<h2 className="text-4xl font-semibold mb-10">Other Projects</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
					{otherProjects.map((p, index) => (
						<div
							key={index}
							className="p-5 rounded-xl flex flex-col justify-between w-64 h-46 transition duration-200 hover:scale-[1.05] border-2 border-[#1982c4]"
						>
							<div>
								<p
									className="text-xl font-semibold mb-1"
									style={{ color: "#f5b95f" }}
								>
									{p.title}
								</p>
								<p className="text-gray-300 text-sm line-clamp-3">
									{p.desc}
								</p>
							</div>

							<a
								href={p.gitLink}
								target="_blank"
								className="text-sm mt-3 underline hover:text-[#f5990f]"
								style={{ color: "#f5b95f" }}
							>
								GitHub →
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default OtherProjects;
