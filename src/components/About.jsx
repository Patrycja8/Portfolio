
import React from 'react';
import { Tilt } from 'react-tilt';

import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full  '>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
  
  
 

const About = () => {
  return (
    <>
   
    <motion.div variants={textVariant()} className="bg-transparent pad-1">
    
      <p className={styles.sectionSubText}
      >Introductions</p>
      <p className={styles.sectionHeadText}>
        Overview
      </p>
    </motion.div>
    <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className=' bg-transparent text-secondary text-[17px]  leading-[30px] pad-1 flex flex-col'
      >
        Hello! My name is Patrycja Kołosowska. I am a student of computer science. I have experience with various programming 
        languages, including Python and JavaScript. I am still relatively new to software 
        development, but I am eager to learn more and improve my skills in these languages. 
        Currently, 
        I am working on expanding my knowledge and building projects to gain practical experience.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");