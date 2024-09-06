import React, { useState } from 'react'

import{addDoc, collection} from "firebase/firestore"

import { motion } from 'framer-motion'

import {db} from '../FireBase'
import Swal from 'sweetalert2'
const Contact = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const[message, setMessage] = useState();
   const dbRef=collection(db,"Portfolio")
   
    const add=async()=>{
        let form=true;
        let form1=true;
        if(!name ||!email ||!message){
            alert("Nein Something is missing");
            form=false;
            form1=false;

            
        }
        
       if(form1){
        if(name.length<3 || name.length>16){
            alert("Please Enter a Valid Name");
            form=false;
        }
       
        if(!email.includes("@g")){
            alert("Sorry The Email is not valid");
            form=false;
            
        }
        if(name.includes("_")||name.includes("$")||name.includes("@") ||name.includes(":") ||name.includes(";")  ||name.includes("/") ||name.includes("?") ||name.includes("%") ||name.includes("@")||name.includes(">") ||name.includes("<")  ||name.includes("-") ||name.includes("^")||name.includes("#") ||name.includes("(")||name.includes(")")||name.includes("+") ||name.includes("*")  ||name.includes("0")||name.includes("1")||name.includes("2")||name.includes("3")||name.includes("4")||name.includes("5")||name.includes("6")||name.includes("7")||name.includes("8")||name.includes("9")){
            alert('Please No Special Characters in Your Name');
            form=false;
        }
else{
if(form){
    const addData=await addDoc(dbRef,{Name:name,Email:email,Message:message})
    if(email){
    Swal.fire({
        icon: 'success',
        title: 'Added!',
        text: ` ${name} data has been Added.`,
        showConfirmButton: false,
        timer: 1500,
      });
}}
else{
   console.log('e');
}

    }}}
       
        
     
   

  return (
 
    <div className='bg-[#222222] mt-[-50px]' id='Contact'>
        <p className='text-white flex justify-center text-3xl font-bold mt-[50px] pt-[50px]'>Let's Connect 🌐</p>
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.8,delay:0.7}} className='max-w-lg mx-auto p-[30px]' >
      
    <div className='text-white'>
   
                <div className='mb-5 mt-[20px] mx-auto'>
                  <label className='block mb-2 text-lg font-medium text-white '>Name</label>
                   <input
                    required
                    type='text'
                    
                   value={name}
                   pattern='^[A-Za-z0-9]{3,16}$'
                    placeholder='Ahmed'
                    onChange={(e)=>setName(e.target.value)}
                    className='w-[90%] shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mx-auto'
                  />
                  
                 
                </div>
                <div  className='mb-5 mt-[20px] mx-auto'>
                  <label className='block mb-2 text-lg font-medium  text-white'>Email</label>
                   <input
                    required
                    type='email'
                   
                   value={email}
                    placeholder='ahmed2005stem@gmail.com'
                    onChange={(e)=>setEmail(e.target.value)}
                    className='w-[90%] shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mx-auto'
                  />
                  
                 
                </div>
                <div  className='mb-5 mt-[20px] mx-auto'>
                  <label className='block mb-2 text-lg font-medium text-white '>Message</label>
                   <textarea
                    required
                    type='text'
                   value={message}
                   onChange={(e)=>setMessage(e.target.value)}
                    placeholder='Write something ...'
                   
                    className='w-[90%] shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mx-auto'
                  />
                  
                 
                </div>
                
             <div className='flex justify-center'>
              <button  type="submit" onClick={add}className='text-white bg-blue-700 hover:bg-blue-800 flex justify-center focus:ring-4 focus:outline-none w-full focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 '>
                Send ➤
              </button>
              </div>
    </div>
    </motion.div>
    </div>
    
  )
}

export default Contact
