import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { data } from './data'

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Analog', 'Digital', 'AI & Web Development'];

  const filteredProjects = data.filter(item => {
    if (activeCategory === 'All') return true;
    if (item.title === 'Future Project') return true;
    return item.category === activeCategory;
  });

  return (
    <section className='min-h-screen text-black pt-[50px] bg-[#222222] mt-[-16px]' id='Projects'>
      <motion.p 
        className='text-4xl flex justify-center font-bold mb-[30px] text-white' 
        initial={{opacity:0, y:-20}} 
        whileInView={{opacity:1, y:0}} 
        transition={{duration:0.8}}
      >
        Projects
      </motion.p>

      <div className='flex flex-wrap justify-center gap-3 mb-[40px] px-4'>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeCategory === category
                ? 'bg-[#e85d04] text-white'
                : 'bg-white text-black hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-3 bg-[#222222] px-4'>
        <AnimatePresence>
          {filteredProjects.map((item) => (
            <motion.div 
              key={item.id}
              layout
              className='group relative overflow-hidden rounded-3xl'
              initial={{opacity:0, scale:0.9}}
              whileInView={{opacity:1, scale:1}}
              animate={{opacity:1, scale:1}}
              exit={{opacity:0, scale:0.9}}
              transition={{duration:0.5}}
              whileHover={{scale:1.05}}
            >
              {item.image}
              <div className='absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-md transition-opacity duration-500 group-hover:opacity-100'> 
                <p className='pl-3 dark:text-[#fff] mt-[35px]'>{item.title}</p>
                <p className='pl-3 dark:text-[#fff] text-center px-2'>{item.description}</p>
                <motion.a 
                  className='bg-[#e85d04] flex justify-center mt-[50px] px-4 py-4 rounded-full cursor-pointer' 
                  initial={{scale:0}}
                  animate={{scale:1}}
                  whileHover={{scale:1.2}}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  whileTap={{scale:0.9}}
                  transition={{type:'spring', stiffness:400, damping:17}}
                >
                  Check it Out
                </motion.a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects
