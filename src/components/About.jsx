function AboutMe() {
	return (
		<section className="w-full py-12 px-6 font-mono flex justify-center ">
			<div className="max-w-3xl p-6 text-lg">
				<h2 className="text-5xl font-semibold mb-3 text-[#d8d8d8] font-sans">
					About Me
				</h2>

				<p className="text-gray-400 font-extralight">
					I'm <span style={{ color: "#f5b95f" }}> Arshad</span>, a
					MERN stack developer who enjoys building clean and
					easy-to-use web applications. I like writing code , whether
					it's on the frontend or the backend.
				</p>
				<br />
				<p className="text-gray-400 font-light">
					Right now, I'm improving my MERN skills and preparing to
					apply for internships. I enjoy learning new things, working
					on projects, and constantly getting better at development.
				</p>
			</div>
		</section>
	);
}

export default AboutMe;
