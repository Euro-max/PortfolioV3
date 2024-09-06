import React from 'react'
import { Social } from './Social'
import { motion } from 'framer-motion'
const Footer = () => {
  return (
   <div className='pb-[30px] pt-[12px] mt-[0px] bg-[#222222] text-white'>
    <div className='flex items-center justify-center gap-8'>
        {Social?.map((link,index)=>(
            <motion.a key={index} href={link.href} target="_blank" rel="noopener noreferrer" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.2,delay:index*0.5}}>
                {link.icon}
            </motion.a>
        ))}
    </div>
   </div>
  )
}

export default Footer
