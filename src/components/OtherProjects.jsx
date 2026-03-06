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
		<section className="py-28 px-10 md:px-16 border-b border-[#0f1923] ">
			<div className="max-w-2xl">
				<p className="text-[13px] tracking-[0.2em] uppercase text-slate-600 mb-3">
					03 — Other
				</p>
				<h2 className="font-sans font-extrabold text-slate-100 text-4xl md:text-5xl tracking-tight mb-4">
					Other Projects
				</h2>
				<div className="w-8 h-px bg-[#1e2a3a] mb-8" />

				<div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#0f1923]">
					{otherProjects.map((p, index) => (
						<div
							key={index}
							className="bg-[#080c10] p-7 flex flex-col justify-between min-h-[180px] hover:-translate-y-1 hover:bg-[#0d1420] transition-all duration-200 group"
						>
							<div>
								<h3 className="font-sans font-bold text-slate-100 text-xl mb-3 group-hover:text-white transition-colors">
									{p.title}
								</h3>
								<p className="text-[14px] leading-relaxed text-slate-500 font-light">
									{p.desc}
								</p>
							</div>
							<a
								href={p.gitLink}
								target="_blank"
								className="mt-5 text-[10px] tracking-widest uppercase text-slate-600 hover:text-slate-200 no-underline transition-colors duration-200"
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
