function Contact() {
	return (
		<section className="py-28 px-10 md:px-16 pb-40">
			<div className="max-w-2xl">
				<p className="text-[13px] tracking-[0.2em] uppercase text-slate-600 mb-3">
					05 — Contact
				</p>
				<h2 className="font-sans font-extrabold text-slate-100 text-5xl md:text-6xl tracking-tight mb-4">
					Get In Touch
				</h2>
				<div className="w-8 h-px bg-[#1e2a3a] mb-8" />

				<p className="text-[16px] leading-loose text-slate-500 font-light mb-12 max-w-md">
					Want to work together or just say hi? My inbox is always
					open.
				</p>

				<div className="flex flex-col gap-3">
					<a
						href="mailto:arshadshaik2007@gmail.com"
						className="inline-block w-fit px-6 py-2.5 text-[14px] tracking-widest uppercase text-slate-200 border border-[#1e2a3a] no-underline hover:bg-slate-200 hover:text-[#080c10] hover:border-slate-200 transition-all duration-200"
					>
						Say Hello
					</a>

					<div className="flex gap-6 mt-4">
						<a
							href="https://github.com/ArshadShaik07"
							target="_blank"
							className="text-[14px] tracking-widest uppercase text-slate-600 hover:text-slate-200 no-underline transition-colors duration-200"
						>
							GitHub →
						</a>
						<a
							href="https://www.linkedin.com/in/arshad-shaik-483668313/"
							target="_blank"
							className="text-[14px] tracking-widest uppercase text-slate-600 hover:text-slate-200 no-underline transition-colors duration-200"
						>
							LinkedIn →
						</a>
					</div>
				</div>

				<p className="mt-20 text-[14px] tracking-wider text-[#1e2a3a]">
					Designed & built by Arshad Shaik
				</p>
			</div>
		</section>
	);
}

export default Contact;
