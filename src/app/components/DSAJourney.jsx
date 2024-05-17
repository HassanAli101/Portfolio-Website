"use client";
import React, { useRef } from "react";
import JourneyCard from "./DSAJourneyCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Problem 1 Two Sum",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target",
    learnings: "javascript has a new Map() class which has attributes .has() which returns a boolean of whether the map keys has that value o r not and .set() which takes 2 parameters as input, a key and a value and sets them. We can also use for in loops in javascript with the syntax: for (const index in nums) {}",
    methodology: "I made a hash map, firstly, I iterate through each number and check if target - that index exists in map, if it does, then that pair (current and value of pairTarget) is returned, and I set the map after this with nums[index] and index.",
    image: "/images/Journey/lc_js.jpg",
  },
  {
    id: 2,
    title: "Data Structures and Algorithms",
    description: "A look into how i practice DSA concepts and my learnings from them",
    learnings: "",
    methodology: "",
    image: "/images/Journey/lc_js.jpg",
  },
  {
    id: 3,
    title: "Artificial Intelligence",
    description: "A deep dive into my love for AI, which initiated this whole passion for CS in the first place",
    learnings: "",
    methodology: "",
    image: "/images/Journey/lc_js.jpg",
  },
];

const DSAJourney = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="Journey">
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
              learnings={project.learnings}
              methodology={project.methodology}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default DSAJourney;
