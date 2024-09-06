import React from 'react'
import {SKILLS} from './Skill'
import { motion } from 'framer-motion'
const Skills = () => {
    const Var={
        hidden:{opacity:0,y:20},
        visible:{opacity:1,y:0,transition:{
            duration:1,
            staggerChildren:0.5
        }}
    }
    const IVar={
        hidden:{opacity:0,x:-20},
        visible:{opacity:1,x:0,transition:{
            duration:0.5
        }}
    }
  return (
    <section className='bg-[#222222] mt-[-80px]' id='Skills'>
    <div className='container mx-auto bg-[#222222] mt-[40px] text-white'>
    <h2 className='mb-12 pt-[80px] text-center text-4xl font-semibold text-white'>Skills</h2>
    <motion.div className='max-auto flex flex-col rounded-3xl px-4 py-2 lg:px-20 border border-stone-50/30' initial="hidden" whileInView="visible" variants={Var} >
    {SKILLS?.map((skill,index)=>(
        <motion.div variants={IVar}key={index} className={`py-6 flex items-center justify-between ${index!==SKILLS.length-1?"border-b vorder-stone-50/30":""}`}>
            <div className='flex items-center'>{skill.icon}</div>
            <h3 className='px-6 text-lg lg:text-2xl'>{skill.name}</h3>
            <div className='text-md font-semibold lg:text-xl'>
                <span>{skill.experience}</span>
                </div>
            </motion.div>
    ))}
    </motion.div>
      
    </div>
    </section>
  )
}

export default Skills
