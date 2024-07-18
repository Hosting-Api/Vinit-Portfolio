"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";

// Define the experience data
const experiences = [
  {
    id: 1,
    date: "May 2023 - Present",
    title: "Remote",
    subtitle: "Device Tester",
    company: "Nothing Technology Limited",
    description: "Working as a Trial User. Tested and Reported many Bugs in NOTHING Phone (2), Buds (cmf), Adapter(cmf)."
  },
  {
    id: 2,
    date: "May 2024 - June 2024",
    title: "Summer Internship (on site)",
    subtitle: "Full-Stack Developer (Next JS)",
    company: "ErrorX IT Solutions, Navsari",
    description: "Worked as a Summer intern as Full-Stack Developer with Next Js and developed Projects and APIs."
  },
  {
    id: 3,
    date: "June 2023",
    title: "Remote",
    subtitle: "Freelance Penetration Tester",
    company: "Web Bazaar (Banglore)",
    description: "Worked as a Penetration Tester and secured St. Martha's College Of Nursing Website, (A product of Web Bazaar) using my skills."
  },
  // Add more experience objects here as needed
];

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section ref={ref}>
      <div className="max-w-4xl mx-auto px-2 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
      <h1 className="text-default-text text-center py-3">Experience</h1>

        <div className="experience">
          <VerticalTimeline lineColor="#f1f3f5">
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.id}
                visible={inView}
                className="vertical-timeline-element--work"
                contentArrowStyle={{ borderRight: "7px solid rgb(255, 255, 255)" }}
                date={experience.date}
                iconStyle={{ background: "#2b3441", color: "#f1f3f5" }}
                icon={<FontAwesomeIcon icon={faBriefcase} />}
              >
                <h2 className="vertical-timeline-element-title" style={{ color: "#18222f" }}>
                  {experience.title}
                </h2>
                <h3 className="vertical-timeline-element-subtitle" style={{ color: "#18222f" }}>
                  {experience.subtitle}
                </h3>
                <h4 className="vertical-timeline-element-subtitle" style={{ color: "#18222f" }}>
                  {experience.company}
                </h4>
                <p style={{ color: "#18222f" }}>
                  {experience.description}
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Experience;
