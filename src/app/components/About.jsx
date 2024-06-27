import React from "react";
import Skills from "./Skills";
import Image from "next/image";


const About = () => {
  return (
    <div>
      <div className="bg-transparent  grid max-w-4xl text-center px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
      <div className=" w-full   lg:mt-0 lg:col-span-5 lg:flex ">
          {/* <img className="w-80 h-80 mx-auto rounded-full " src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar"></img>           */}
          {/* <img className="w-80 h-80 mx-auto rounded-full" src={'https://cdn-icons-png.flaticon.com/512/21/21104.png'} alt="Rounded avatar"  />         */}
          <Image src="/user.JPG" className="w-80 h-80 mx-auto rounded-full" height={320} width={320} alt="img433"/>
          {/* <Image src="/Home.png" className="w-80 h-80 mx-auto" height={320} width={320} alt="img433"/> */}
  
          </div>
        <div className="  lg:col-span-7">
            
          <p className="text-center text-xl ">
            I&apos;m Vinit Patel, a Full Stack Web Developer from Gujarat,
            India. I specialize in crafting seamless digital experiences. I&apos;m a
            {/* self taught developer and I'm currently learning Rust. Problem */}
            self taught developer and I&apos;m currently working with Next js (React). Problem
            solving, learning new technologies and building cool stuff is what I
            love to do. Currently, exploring the facinating world of Cybersecurity.
          </p>
        </div>
      </div>
      <Skills />
    </div>
  );
};

export default About;
