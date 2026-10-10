import React from 'react'
import Tilt from 'react-parallax-tilt'
import {motion} from 'framer-motion'

import {styles} from '../styles'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img 
            src={icon} 
            alt={title} 
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}
// SAVE POINT
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Who am I?</h2>
      </motion.div>
    
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      > 
      The question that is the most <span className= "text-orange-600">intriguing🤔</span> to me in robotics is - <span className="text-white font-medium">how do you use limited sensors and basic concepts to create autonomous systems that work robustly in dynamic environments? </span>
      {/* <br />I have been answering <span className= "text-orange-600">different versions of this question</span>, starting from <span className= "text-white">tele-operated mobile and autonomous robots I built </span>during my undergrad, to my latest endevour- <span className= "text-green-400">my master's thesis</span> about <span className= "text-white">Vision based Motion Planning of a Soft Robot Arm.</span> Specifically, Can generative models be used as samplers for the given use case? 
      <br />More about this - here. */}
        </motion.p>

        <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      > 
      During my interaction with robotics, I have <span className="text-blue-400">focused on robot software but have also</span> <span className="text-white">designed small PCBs📟, debugged electronic faults🚨 <span className="text-secondary"> I ran into while coding (using lovely oscilloscopes!!), and brainstormed and </span>built mechanisms 🛠️.</span>
       
       <br /><br /><br/><span className="text-red-300 ">But what <span className="text-red-500 font-bold">fires🔥</span> me up the most is  - </span><span className="bold text-orange-600 font-bold">extracting information from senor data. </span>
       <br />I have <span className="text-blue-400">extensively worked with <span className="text-orange-400 ">camera systems 📸</span> </span>utilizing <span className="text-white ">classical <span className="text-secondary ">and</span> learning based methodologies</span> for problems such as 3D Reconstruction, Sensor Fusion (VIO) etc. 
        </motion.p>

        <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <span className="text-blue-400">Apart from perception</span>, I have built<span className="text-orange-400 "> data collection and manipulation pipelines⚙️</span> that operate a soft robot arm, utilizing <span className="text-white ">track keypoints on it</span> to collect position data, <span className="text-white ">process it</span> and <span className="text-white ">create datasets</span> for training as part of my <a href = "" className= "no-underline hover:underline text-red-300 font-normal">master's thesis</a>🔗.
        <br/> Inorder to train the models, I <span className="text-blue-400">designed and built</span> <span className="text-orange-400">automated ML pipelines🔀</span> for <span className="text-white ">training🏃🏽‍♂️ </span>(because we run training 😄)<span className="text-white ">, evaluating📈, and comparing📊</span> generative models across different architectures and hyperparameters.
        {/* <br/> <span className=" text-[14px]">I have also dabbled inembedded programming, creating a distributed PID control system for tele-operated mobile robots.</span> */}


      </motion.p>

        <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      > 
      <br/><span className="text-red-300 font-bold">🔥Currently🔥</span>, <span className="text-white">I am working on <span className=" text-orange-400 font-semibold">3D point clouds</span> and  <span className="text-orange-400 font-semibold">Lidar-Camera SLAM</span> to build <span className="text-green-400"> multi-sensor localization and mapping pipelines</span> from <span className="text-red-300 ">scratch🚀</span>.
      <br /> </span>Apart from <span className  = "italic">and while doing this</span>, I will be enjoying myself in the outdoors🌞, with great food🍔🍗 and boardgames🎲🧩.
        </motion.p>
      
      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </> 
  )
}

export default SectionWrapper(About, "about")
