import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <section className="bg-transparent  px-2">
        {/* <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"> */}
        <div className="grid max-w-4xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
        
          <div className="mr-auto place-self-center lg:col-span-7">
            
            <h1 className="max-w-2xl mb-4 text-4xl text-default-text text-center font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
             Hello  <br />I&apos;m<span className="text-default-text"> Vinit Patel</span>
            </h1>

            <p className="max-w-2xl mb-6 font-light text-default-text lg:mb-8 md:text-lg lg:text-xl ">
              I am a Full-Stack Developer with 3+ years of experience in Web Development. I enjoy building websites, REST APIs and Web apps.
              My Focus is <strong className="font-bold text-default-text">React (Next Js)  and Node Js</strong>. I am also familiar with other technologies like <span className="text-default-text font-bold">Express Js, MongoDB, mySQL</span> etc.
    
            </p>

            <Link
              href="#experience"
              className="inline-flex items-center justify-center px-5 py-3 text-base bg-blue-600 hover:bg-blue-800   font-xl  sm:mb-0 font-medium text-center text-default-text  rounded-lg focus:ring-4 focus:ring-gray-100 mx-2"
              >
              View Resume
            </Link> 
            
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-3 text-base bg-blue-600 hover:bg-blue-800   font-xl  sm:mb-0 font-medium text-center text-default-text  rounded-lg focus:ring-4 focus:ring-gray-100 mx-2"
            //   className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Hire Me 
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
            </Link>
             

             
          </div>
          
          {/* <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="mockup"
          /> */}
          <div className=" w-full   lg:mt-0 lg:col-span-5 lg:flex ">
          {/* <img className="w-80 h-80 mx-auto rounded-full " src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar"></img>           */}
          {/* <img className="w-80 h-80 mx-auto" src="https://png.pngtree.com/png-vector/20231108/ourmid/pngtree-programmer-it-developer-png-image_10439723.png" alt="Rounded avatar"></img>           */}
          <Image src="/hero-avaitor.png" priority className="w-80 h-80 mx-auto" alt="img354" height={320} width={320}/>
          </div>
        </div>
        
      </section>
    </div>
  );
};

export default Hero;
