
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { projects } from '../constants';

import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ProjectCard = ({
  index,
  name,
  description,
  image,
  tags,
  source_code_link,
}) => {
  return (
    <motion.div
      // variants={fadeIn('up', 'spring', index * 0.15, 0.6)}
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="w-full max-w-[360px] h-full"
    >
      <div className="bg-tertiary p-5 rounded-2xl w-full h-full flex flex-col transition-shadow duration-300 hover:shadow-xl hover:shadow-black/30">
        {/* Project image */}
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* GitHub link */}
          {/* <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${name} source code on GitHub`}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt=""
                className="w-1/2 h-1/2 object-contain"
              />
            </a>
          </div> */}
        </div>

        {/* Project details */}
        <div className="mt-5 flex-grow">
          <h3 className="text-white font-bold text-[24px]">
            {name}
          </h3>

          <p className="mt-2 text-secondary text-[14px] leading-6">
            {description}
          </p>
        </div>

        {/* Technology tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={tag.name}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  const [activeCategory, setActiveCategory] = useState('Computer Vision');

  // Automatically create buttons from the project categories.
  const categories = [
    'All',
    ...new Set(
      projects.map((project) => project.category)
        .filter(Boolean)
    ),
  ];

  // Show all projects or only projects in the selected category.
  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  console.log("Active category:", activeCategory);
  console.log("Total projects:", projects.length);
  console.log("Filtered projects:", filteredProjects.length);
  console.log(
    "Filtered names:",
    filteredProjects.map((project) => project.name)
  );

  return (
    <>
      {/* Section heading */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      {/* Introduction */}
      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Whenever I start{' '}
          <span className="text-blue-400">
            exploring a new problem
          </span>
          , I attempt to{' '}
          <span className="text-white">
            completely understand the problem and its limitations,
            then work{' '}
            <span className="text-orange-400">iteratively</span>{' '}
            towards a{' '}
            <span className="text-orange-400">
              complete solution
            </span>
            .
          </span>

          <br />
          Here are some things that I have built and explored
          outside of work.
        </motion.p>
      </div>

      {/* Category buttons */}
      <motion.div
        variants={fadeIn('', '', 0.15, 0.6)}
        className="mt-12 flex flex-wrap justify-center items-center gap-3"
      >
        {categories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={isActive}
              className={`
                rounded-full px-6 py-3
                text-sm sm:text-base font-medium
                border transition-all duration-300
                ${
                  isActive
                    ? 'bg-orange-400 text-gray-900 border-orange-400 shadow-lg shadow-orange-400/20'
                    : 'bg-transparent text-secondary border-secondary/40 hover:border-orange-400 hover:text-white'
                }
              `}
            >
              {category}
            </button>
          );
        })}
      </motion.div>

      {/* Centered project cards */}
      {/* <motion.div
        layout
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7 justify-items-center items-stretch"
      >
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.name}
            index={index}
            {...project}
          />
        ))}
      </motion.div> */}
      
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7 justify-items-center items-stretch">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.name}
            index={index}
            {...project}
          />
        ))}
      </div>

      
      {/* <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7 justify-items-center">
        {filteredProjects.map((project, index) => (
          <div
            key={`${project.name}-${index}`}
            className="w-full max-w-[360px] bg-red-900 p-5 rounded-2xl"
          >
            <h3 className="text-white text-xl font-bold">
              {project.name}
            </h3>
            <p className="text-white mt-2">
              Category: {project.category}
            </p>
            <p className="text-white mt-2">
              {project.description}
            </p>
          </div>
        ))}
      </div> */}

    </>
  );

  
};

export default SectionWrapper(Works, '');