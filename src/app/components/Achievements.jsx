'use client';
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const certifications = [
  {
    id: 1,
    title: "Internship Certificate",
    description: "This is a description for Certification.",
    imageUrl: "/certs/img23472.jpg",
    largeImageUrl: "/certs/img23472.jpg",
    certificationUrl: "https://example.com/certification4"
  },
  {
    id: 2,
    title: "CISCO Certification",
    description: "This is a description for Certification.",
    imageUrl: "/certs/img23707.png",
    largeImageUrl: "/certs/img23707.png",
    certificationUrl: ""
  },
  
  {
    id: 3,
    title: "Appreciaation Letter",
    description: "This is a description for Certification.",
    imageUrl: "/certs/img23652.png",
    largeImageUrl: "/certs/img23652.png",
    certificationUrl: "https://example.com/certification3"
  },
  {
    id: 4,
    title: "Microsoft Certification",
    description: "This is a description for Certification.",
    imageUrl: "/certs/img23912.png",
    largeImageUrl: "/certs/img23912.png",
    certificationUrl: "https://example.com/certification2"
  },
  
  // Add more certifications as needed
];

const Achievements = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupImage, setPopupImage] = useState(null);
  const [popupTitle, setPopupTitle] = useState("");

  const openPopup = (imageUrl, title) => {
    setPopupImage(imageUrl);
    setPopupTitle(title);
    setShowPopup(true);
    // Disable body scrolling when the popup is open
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupImage(null);
    setPopupTitle("");
    // Enable body scrolling when the popup is closed
    document.body.style.overflow = "auto";
  };

  return (
    <div>
      <section className="bg-transparent px-2">
        <div className="grid max-w-4xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
          <div className="text-center mb-8">
            <h1 className="text-4xl text-default-text font-extrabold">Achievements</h1>
            <p className="text-default-text">Here are some of my Certifications and Achievements.</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {certifications.map((certification) => (
              <div key={certification.id} className="bg-page hover:border p-6 rounded-lg shadow-md relative">
                <Image
                  src={certification.imageUrl}
                  alt={certification.title}
                  height={200}
                  width={300}
                  className="rounded-md border mb-4 mx-auto h-52 w-full object-cover"
                />
                <h2 className="text-2xl font-bold text-default-text mb-2">{certification.title}</h2>
                <p className="text-default-text mb-4">{certification.description}</p>
                <button
                  onClick={() => openPopup(certification.largeImageUrl, certification.title)}
                  className="inline-flex items-center justify-center px-5 py-3 text-base bg-blue-600 hover:bg-blue-800 font-xl text-default-text rounded-lg focus:ring-4 focus:ring-gray-100"
                >
                  View Certification
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
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popup */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center  bg-gray-800 z-10 bg-opacity-75">
          {/* <div className="relative bg-white rounded-lg overflow-hidden shadow-xl max-w-3xl p-4"> */}
          <div className="relative bg-white rounded-lg overflow-hidden  shadow-md max-w-xl  p-4">
            <button
              className="absolute top-2 right-2 text-nav hover:text-gray-500"
              onClick={closePopup}
            >
              <svg
                className="w-6 h-6 font-extrabold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="overflow-auto max-w-full max-h-[80vh] ">
              <Image
                src={popupImage}
                alt={popupTitle}
                width={800}
                height={600}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Achievements;
