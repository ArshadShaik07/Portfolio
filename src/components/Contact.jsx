function Contact() {
	return (
		<section className="w-full py-14 px-6 flex justify-center font-mono">
			<div className="max-w-3xl w-full p-8 rounded-xl text-center flex border-2 gap-1 border-[#1982c4] flex-col items-center">
				<h2 className="text-4xl text-[#f5990f]  font-semibold mb-6">
					Contact
				</h2>

				<p className="text-gray-300 mb-2 text-lg">
					Want to work together or just say hi?
				</p>
				<div>
					<a
						href="mailto:arshadshaik2007@gmail.com"
						className="inline-block px-6 py-3 rounded-md text-lg font-medium transition hover:text-[#bebebe] hover:underline"
					>
						Email Me
					</a>

					<div className="flex justify-center gap-6 ">
						<a
							href="https://github.com/ArshadShaik07"
							target="_blank"
							className="flex flex-col  items-center hover:opacity-80 transition"
						>
							<img
								src="https://img.icons8.com/?size=100&id=16318&format=png&color=f5b95f"
								className="w-8 mb-1"
							/>
						</a>

						<a
							href="https://www.linkedin.com/in/arshad-shaik-483668313/"
							target="_blank"
							className="flex flex-col items-center hover:opacity-80 transition"
						>
							<img
								src="https://img.icons8.com/?size=100&id=13930&format=png&color=f5b95f"
								className="w-8 mb-1"
							/>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
