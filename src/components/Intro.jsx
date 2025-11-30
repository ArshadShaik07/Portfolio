function Intro() {
	return (
		<section className="w-full py-12 px-6 flex justify-center font-mono">
			<div className="max-w-3xl p-6 flex flex-col items-start">
				<p className="font-medium font-mono text-[#f5b95f]">
					Hi , my name is{" "}
				</p>
				<h1 className="text-6xl font-bold mb-3 text-[#dbdbdb]">
					Arshad Shaik
				</h1>

				<h2
					className="text-2xl font-medium mb-6"
					style={{ color: "#f5b95f" }} // soft yellow
				>
					MERN Stack Developer
				</h2>

				<p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
					I build clean, functional web applications using the MERN
					stack. I enjoy designing simple user experiences, creating
					backend systems, and turning ideas into working products.
				</p>
				<a
					href="https://drive.google.com/file/d/1nEmrPkoqAVwNr8MMl8xq2rb5UBZTkkK9/edit"
					target="_blank"
					rel="noopener noreferrer"
					className="text-[#f5b95f] border-2 border-[#f5b95f] p-3 hover:shadow-[#f5b95f]  hover:-translate-1 shadow-md hover:text-[#f5a733] transition duration-150"
				>
					View Resume
				</a>
			</div>
		</section>
	);
}

export default Intro;
