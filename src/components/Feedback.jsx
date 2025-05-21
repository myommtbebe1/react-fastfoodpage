import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "../App.css";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
const testimonials = [
  {
    id: 1,
    name: "Robin Ayala Doe", 
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    text: "From the moment I landed on the website to the time my food arrived, everything was smooth and professional. The design is clean, the ordering process is fast, and the food arrived hot and delicious. It’s refreshing to find a fast-food place that actually cares about quality and service",
  },
  {
    id: 2,
    name: "John De marli",
    image: "https://randomuser.me/api/portraits/women/90.jpg", 
    text: "Ordering from here has become a weekly treat for my family. The menu has great variety, the ingredients taste fresh, and even the fried items aren’t overly greasy. My kids love the cheesy fries and crispy chicken. Highly recommend for anyone who wants comfort food done right.",
  },
  {
    id: 3,
    name: "Rowhan Smith",
    image: "https://randomuser.me/api/portraits/men/90.jpg",
    text: "I’ve tried a lot of fast food places, but this one stands out. The burger was fresh, juicy, and perfectly cooked. I loved the crunchy fries and the attention to detail in the packaging. The staff was friendly, and my order arrived exactly on time. I’ll definitely be ordering again!",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "What really impressed me was the consistency. I’ve ordered three times so far, and each time the food has been just as good — crispy fries, warm burgers, and great sauces. Their packaging is eco-friendly too, which shows they think about the little things.",
  },
  {
    id: 5,
    name: "Michael Chen",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "I wasn’t expecting much when I placed my first order, but wow — I was blown away. The burger tasted like it was made fresh off the grill, and the fries were golden and crispy. Even the little things, like napkins and sauce portions, were perfect. It is now my go-to comfort food place.",
  },
  {
    id: 6,
    name: "Emma Wilson",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    text: "Their customer service really impressed me. I had a question about my order, and they replied almost instantly with a helpful answer. You don’t get that kind of support with most fast-food chains. Plus, the food quality is just top-tier. Highly recommend giving them a try.",
  },

];




const Feedback = () => {
  return (
    <section className='py-16 px-4 max-w-7xl mx-auto' id="feedback">
       <div className="text-center mb-12">
         <h2 className='text-3xl font-bold md:text-4xl mb-4'>From Our Community</h2>
       </div>

       {/* feedback */}
       <div>
         {/* swipecards */} 
         <Swiper
        navigation={
          {
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }
        }
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
         
          },
          768: {
            slidesPerView: 2,
       
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Navigation]}
        className="testimonials-swiper md:mb-12"
      >
        {
          testimonials.map((testimonial,index) => (
            <SwiperSlide key={index} className='h-full md:py-12 py-4'>
              <div className='text-center bg-white padding-4 rounded-lg shadow-md h-full flex flex-col'>
                 <div className='w-24 h-24 mx-auto mb-4'>
                    <img src={testimonial.image} alt="" className='w-full h-full object-cover rounded-full'/>
                 </div>
                 <div className='flex justify-center mb-2'>
                   {
                    [...Array(5)].map((_,startIndex) => (
                      <span className='text-yellow-400'>
                        ★
                      </span>
                    ))
                   }
                 </div>
                 <h3 className='text-xl font-semibold mb-3'>
                  {testimonial.name}
                 </h3>
                 <p className='text-gray-600'>
                  {testimonial.text}
                 </p>
              </div>
            </SwiperSlide>
          ))
        }
       
       

      </Swiper>

         {/* nav button */}
         <div className='flex justify-center gap-4 md:mt-8 mt-4'>
         <button className='swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-red-800 hover:text-white transition-all duration-200 cursor-pointer'>
             <BsChevronLeft className='size-6'/>
           </button>
           <button className='swiper-button-next-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-red-800 hover:text-white transition-all duration-200 cursor-pointer'>
             <BsChevronRight className='size-6'/>
           </button>
         </div>
       </div>
    </section>
  )
}



export default Feedback