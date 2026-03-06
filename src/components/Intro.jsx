function Intro() {
	return (
		<section className="min-h-screen flex items-center px-10 md:px-16 border-b border-[#0f1923]">
			<div className="max-w-2xl animate-[fadeUp_0.7s_ease_both]">
				<style>{`
					@keyframes fadeUp {
						from { opacity: 0; transform: translateY(20px); }
						to   { opacity: 1; transform: translateY(0); }
					}
				`}</style>

				<p className="text-[14px] tracking-[0.2em] uppercase text-slate-600 mb-6">
					— Full Stack Developer
				</p>

				<h1 className="font-sans font-extrabold text-slate-100 leading-none tracking-tight mb-6 text-7xl md:text-9xl">
					Arshad
					<br />
					Shaik
				</h1>

				<div className="w-8 h-px bg-[#1e2a3a] mb-6" />

				<p className="text-[16px] leading-relaxed text-slate-500 font-light mb-10 max-w-md">
					I build clean, functional web applications using the MERN
					stack. I enjoy designing simple user experiences, creating
					backend systems, and turning ideas into working products.
				</p>

				<div className="flex items-center gap-6 flex-wrap">
					<a
						href="https://drive.google.com/file/d/1nEmrPkoqAVwNr8MMl8xq2rb5UBZTkkK9/edit"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block px-6 py-2.5 text-[14px] tracking-widest uppercase text-slate-200 border border-[#1e2a3a] no-underline hover:bg-slate-200 hover:text-[#080c10] hover:border-slate-200 transition-all duration-200"
					>
						View Resume
					</a>
					<a
						href="#contact"
						className="text-[11px] tracking-widest uppercase text-slate-600 hover:text-slate-200 no-underline transition-colors duration-200"
					>
						Get in touch →
					</a>
				</div>
			</div>
		</section>
	);
}

export default Intro;
