import React from "react";
import Link from "next/link";
import Image from "next/image";

const projects = [
 
  {
    id: 1,
    title: "Bug Management Portal",
    description: "It is an Internal Application for an Organization where their R&D Team can work on Bugs in their Product.",
    imageUrl: "/project/bug-portal.png",
    projectUrl: "https://bug-portal.vercel.app/"
  },
  {
    id: 2,
    title: "RRC Website",
    description: "A website for a Rehab Center.",
    imageUrl: "/project/rrc.png",
    projectUrl: "https://rrc-website.netlify.app/"   
  },
  {
    id: 3,
    title: "Project Three",
    description: "This is a description for Project Three.",
    imageUrl: "/Home.png",
    projectUrl: "#"
  },
  {
    id: 4,
    title: "Project Four",
    description: "This is a description for Project Four.",
    imageUrl: "/Contact.png",
    projectUrl: "#"
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div>
      <section className="bg-transparent px-2">
        <div className="grid max-w-4xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
          <div className="text-center mb-8">
            <h1 className="text-4xl text-default-text font-extrabold py-1">My Projects</h1>
            <h3 className="text-default-text">Here are some of my works.</h3>
          </div>
          <div className="grid gap-8 lg:grid-cols-2 ">
            {projects.map((project) => (
              <div key={project.id} className="bg-transparent  p-6 rounded-lg hover:border shadow-md">
                <Image 
                  src={project.imageUrl} 
                  alt={project.title} 
                  height={200} 
                  width={300} 
                  className="rounded-md border mb-4 mx-auto"
                />
                <h2 className="text-2xl font-bold text-default-text mb-2">{project.title}</h2>
                <p className="text-default-text mb-4">{project.description}</p>
                <Link className="inline-flex items-center justify-center px-5 py-3 text-base bg-blue-600 hover:bg-blue-800 font-xl text-default-text rounded-lg focus:ring-4 focus:ring-gray-100" href={project.projectUrl}>
                  {/* <Link href="" className="inline-flex items-center justify-center px-5 py-3 text-base bg-blue-600 hover:bg-blue-800 font-xl text-default-text rounded-lg focus:ring-4 focus:ring-gray-100"> */}
                    View Project
                    <svg
                      className="w-5 h-5 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  {/* </Link href=""> */}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
