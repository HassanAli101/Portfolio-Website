"use client";
import React, { useState, useRef } from "react";
import JourneyCard from "./JourneyCard";
import JourneyTag from "./JourneyTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Web Development",
    description: "A look into how i started liking Web Development",
    image: "/images/projects/1.png",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Data Structures and Algorithms",
    description: "A look into how i practice DSA concepts and my learnings from them",
    image: "/images/projects/2.png",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Artificial Intelligence",
    description: "A deep dive into my love for AI, which initiated this whole passion for CS in the first place",
    image: "/images/projects/3.png",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="Journey">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Journey
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <JourneyCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
