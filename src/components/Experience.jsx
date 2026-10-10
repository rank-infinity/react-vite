import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

import "./Experience.css";


const ExperienceCard = ({ experience }) => {
  return (
    <div className="experience-row">

      {/* =========================
          DATE
      ========================== */}
      <div className="experience-date">
        {experience.date}
      </div>


      {/* =========================
          TIMELINE ICON
      ========================== */}
      <div
        className="experience-icon"
        style={{
          background: experience.iconBg,
        }}
      >
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      </div>


      {/* =========================
          MEDIA
      ========================== */}
      <div className="experience-media">

        {experience.media?.map((item, index) => (
          <div
            key={`experience-media-${index}`}
            className="experience-media-item"
          >

            {/* VIDEO */}
            {item.type === "video" && (
              <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                <iframe
                  src={item.src}
                  title={`${experience.title} video ${index + 1}`}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              </div>
            )}

            {/* YOUTUBE VIDEO */}
            {item.type === "youtube" && (
              <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                <iframe
                  src={`https://www.youtube.com/embed/${item.videoId}?start=${item.start}&end=${item.end}&rel=0`}
                  title={`${experience.title} YouTube video ${index + 1}`}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            )}

            {/* IMAGE */}
            {item.type === "image" && (
              <img
                src={item.src}
                alt={`${experience.title} ${index + 1}`}
                className="w-full rounded-xl object-cover"
              />
            )}

            {/* CAPTION */}
            {item.caption && (
              <p className="mt-2 text-center text-secondary text-[13px] leading-relaxed">
                {item.caption}
              </p>
            )}

          </div>

          
        ))}

      </div>


      {/* =========================
          EXPERIENCE CARD
      ========================== */}
      <div className="experience-card">

        <div>
          <h3 className="text-white text-[24px] font-bold">
            {experience.title}
          </h3>

          <p
            className="text-secondary text-[16px] font-semibold"
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
        </div>

        


        {/* EXPERIENCE POINTS */}
        <ul className="mt-5 list-disc ml-5 space-y-2">

          
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {typeof point === "string" ? (
              point
            ) : (
              <>
                {point.text}

                {point.links?.map((link, linkIndex) => (
                  <React.Fragment key={linkIndex}>
                    {" "}
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#915EFF] underline hover:text-white transition-colors"
                    >
                      {link.text}
                    </a>
                    {linkIndex < point.links.length - 1 ? ", " : ""}
                  </React.Fragment>
                ))}
              </>
            )}
          </li>
        ))}

        </ul>

        {/* TEAM PHOTOS */}
        {experience.teamPhotos?.length > 0 && (
          <div className="mt-6">
            <h4 className="text-white text-[16px] font-semibold mb-3">
              Moments
            </h4>

            <div className="grid grid-cols-1 gap-1">
              {experience.teamPhotos.map((photo, index) => (
                <figure key={`team-photo-${index}`} className="min-w-0">
                  <img
                    src={photo.src}
                    alt={photo.caption || `Team photo ${index + 1}`}
                    className="w-full aspect-[4/3] object-cover rounded-lg"
                  />

                  {photo.caption && (
                    <figcaption className="mt-2 text-secondary text-[12px] leading-relaxed">
                      {photo.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>
        )}

      </div>

    </div>
  );
};



const Experience = () => {
  return (
    <>

      {/* =========================
          SECTION TITLE
      ========================== */}
      <motion.div variants={textVariant()}>

        <p className={styles.sectionSubText}>
          What I have done so far
        </p>

        <h2 className={styles.sectionHeadText}>
          Work Experience.
        </h2>

      </motion.div>


      {/* =========================
          TIMELINE
      ========================== */}
      <div className="mt-20">

        <div className="experience-timeline">

          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}

        </div>

      </div>

    </>
  );
};


export default SectionWrapper(Experience, "work");