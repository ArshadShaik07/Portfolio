function Experience() {
	return (
		<section className="py-28 px-10 md:px-16 border-b border-[#0f1923]">
			<div className="max-w-2xl">
				<p className="text-[13px] tracking-[0.2em] uppercase text-slate-600 mb-3">
					04 — Experience
				</p>
				<h2 className="font-sans font-extrabold text-slate-100 text-5xl md:text-6xl tracking-tight mb-4">
					Experience
				</h2>
				<div className="w-8 h-px bg-[#1e2a3a] mb-8" />

				<div className="border border-[#0f1923] p-10 flex flex-col gap-4">
					<h3 className="font-sans font-bold text-slate-100 text-2xl">
						No Experience Yet
					</h3>
					<div className="w-6 h-px bg-[#1e2a3a]" />
					<p className="text-[16px] leading-loose text-slate-500 font-light">
						Still looking for internships and actively building
						real-world experience through personal projects.
					</p>
					<a
						href="#contact"
						className="text-[14px] tracking-widest uppercase text-slate-600 hover:text-slate-200 no-underline transition-colors duration-200 w-fit"
					>
						Open to opportunities →
					</a>
				</div>
			</div>
		</section>
	);
}

export default Experience;
