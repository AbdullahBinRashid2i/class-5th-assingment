// pages/page.tsx
import { FC } from 'react'

const Portfolio: FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header Section */}
      <header className="bg-blue-800 text-white py-6">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold">ABR (Abdullah Bin Rashid)</h1>
          <nav className="space-x-6">
            <a href="#about" className="hover:text-gray-300">About</a>
            <a href="#skills" className="hover:text-gray-300">Skills</a>
            <a href="#projects" className="hover:text-gray-300">Projects</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
          </nav>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-4xl font-semibold mb-4 text-blue-500">About Me</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            I am a passionate web developer with expertise in building modern, responsive web applications using
            technologies like Next.js, TypeScript, TailwindCSS, and more.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-800">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-4xl font-semibold mb-8 text-blue-500">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-gray-600">
              <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
              <p className="text-gray-400">Building modern, responsive websites using Next.js, React, and TailwindCSS.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-gray-600">
              <h3 className="text-2xl font-semibold mb-4">UI/UX Design</h3>
              <p className="text-gray-400">Designing user-friendly interfaces with Figma, Adobe XD, and user-centered design principles.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-gray-600">
              <h3 className="text-2xl font-semibold mb-4">API Development</h3>
              <p className="text-gray-400">Building RESTful APIs with Node.js, Express, and MongoDB to power applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-4xl font-semibold mb-8 text-blue-500">My Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-gray-600">
              <h3 className="text-2xl font-semibold mb-4">Project 1</h3>
              <p className="text-gray-400">A short description of your project. Talk about the technologies used and its purpose.</p>
              <button className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400">
                View Project
              </button>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-gray-600">
              <h3 className="text-2xl font-semibold mb-4">Project 2</h3>
              <p className="text-gray-400">A short description of your project. Talk about the technologies used and its purpose.</p>
              <button className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400">
                View Project
              </button>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-gray-600">
              <h3 className="text-2xl font-semibold mb-4">Project 3</h3>
              <p className="text-gray-400">A short description of your project. Talk about the technologies used and its purpose.</p>
              <button className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400">
                View Project
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-4xl font-semibold mb-8 text-blue-500">Contact Me</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
            Feel free to reach out to me for collaboration or any questions!
          </p>
          <br/>
          <h1 className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
            abdullahbinrashid0@gmail.com
          </h1>
          <button className="mt-4 py-2 px-6 bg-green-600 text-white rounded-lg hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-400">
            Contact
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white text-center py-4">
        <p>&copy; 2024 ABR (Abdullah Bin Rashid). All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Portfolio;
