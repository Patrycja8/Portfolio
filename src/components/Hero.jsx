import { motion } from "framer-motion";

import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative  w-full h-screen mx-auto`}>

      <div
        className={`absolute z-2 inset-0 top-[120px]  max-w-7xl mx-auto 
         flex  items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#FFA3FD]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#FFA3FD]'>Patrycja</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm computer science student <br className='sm:block hidden' />
            based in Warsaw Poland.
          </p>
        </div>
      </div>
     
    <ComputersCanvas className={`absolule z-1`} />


    

      <div className='absolute bg-transparent xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] bg-transparent h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;