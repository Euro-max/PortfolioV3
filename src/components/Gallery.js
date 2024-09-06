import React from 'react'
import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import { Navigation, Pagination,Scrollbar, A11y } from 'swiper/modules';
import far from './G13.jpeg';
import G11 from './G11.jpeg'
import G12 from './G12.jpeg'
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Gq from './Gq.jpeg'
import Past from './Past.jpeg'

const Gallery = () => {
  return (
    <section className='bg-[#222222] mt-[-60px]' >
       
    <div className='bg-[#222222] w-full'>
    <h2 className='mb-12 pt-[120px] text-center text-4xl font-semibold text-white'>Gallery</h2>
        <Swiper slidesPerView={1}  modules={[Navigation, Pagination,Scrollbar, A11y]} navigation={{clickable:true}}  pagination={{ clickable: true }}
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')} 
       scrollbar={{ draggable: true }}>
            
            <SwiperSlide><div className='relative'>
                <img src={far} className='w-full h-[600px] object-cover rounded-lg'/>
                <div className='absolute top-1/2 left-[15%]  '><p className='p-1 bg-transparent text-white text-3xl whitespace-pre-line'>The last stand at Stem October in 2023 with my first ever teammates</p></div>
                </div></SwiperSlide>
            <SwiperSlide><div className='relative'>
                <img src={G11} className='w-full h-[600px] object-cover rounded-lg'/>
    
    <div className='absolute top-1/2 left-[5%]  '><p className='p-1 bg-transparent text-white text-3xl whitespace-pre-line'>My Water filtration Capstone Project in January 2022 with my intime and companion Mahmoud Essam</p></div>
                </div></SwiperSlide>
            <SwiperSlide><div className='relative'>
                <img src={G12} className='w-full h-[600px] object-cover rounded-lg'/>
    
    <div className='absolute top-1/2 left-[5%]  '><p className='p-1 bg-transparent text-white text-3xl whitespace-pre-line'>My final Capstone Project at Stem October in January 2023</p></div>
                </div></SwiperSlide>

                <SwiperSlide><div className='relative'>
                <img src={Gq} className='w-full h-[600px] object-cover rounded-lg'/>
    
    <div className='absolute top-1/2 left-[5%]  '><p className='p-1 bg-transparent text-white text-3xl whitespace-pre-line'>My cheap yet effective paper conversion project out of straw in May 2022</p></div>
                </div></SwiperSlide>
                
                <SwiperSlide><div className='relative'>
                <img src={Past} className='w-full h-[600px] object-cover rounded-lg'/>
    
    <div className='absolute top-1/2 left-[5%]  '><p className='p-1 bg-transparent text-white text-3xl whitespace-pre-line'>Me in the old days of 2017 with my TBFFs Mostafa Ibrahim and Mahmoud Mohammed</p></div>
                </div></SwiperSlide>
        </Swiper>
      
    </div>
    </section>
  )
}

export default Gallery
