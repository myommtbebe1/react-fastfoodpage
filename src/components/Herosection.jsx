import { motion } from "framer-motion"
import { fadeIn, textVariant } from "../ultils/motion";
import burgerandfrenchfries from '../assets/burgerandfrenchfries.png';


const Herosection = () => {
  return (
    <section className='container mx-auto flex flex-col md:flex-row pt-44 pb-6 sm:px-6 lg:px-6' id="home">
       {/* left */}
        <div className="w-full md:w-1/2 space-y-8">
        {/* star badge */}
           <motion.div
            variants={fadeIn("down",0.2)}
                   initial="hidden"
                   whileInView="show"
                   viewport={{once:true}}
            >
               <div className="flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group">
                  <span className="text-red-600 group-hover:text-amber-300 group-hover:scale-110 transition-transform">★</span> 
                  <span>Delicious food for every mood</span>
               </div>
           </motion.div>
        {/* heading */}
         <motion.h1 variants={textVariant(0.3)} initial="hidden"  whileInView="show"  viewport={{once:true}}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="relative inline-block">The</span> 
                <br />
                <span className=" text-red-600/60 ">Sunday Bite </span>
           </motion.h1>
           <motion.button variants={textVariant(0.3)} initial="hidden"  whileInView="show"  viewport={{once:true}}  className="md:block bg-red-800 text-white px-6 py-2.5 rounded-full hover:bg-slate-950 text-sm font-medium transition-all hover:shadw-lg">
                    <a href="#newsletter"> Order Here</a>
            </motion.button >

        </div>

        {/* right */}
        <motion.div variants={fadeIn("left",0.2)}
                   initial="hidden"
                   whileInView="show"
                   viewport={{once:true}} className="w-full md:w-2/3 m-8 md:mt-0 pl-0 md:pl-8">
            <div className='relative '>
            <div className="absolute -z-10 w-full h-full bg-gradient-to-r from-red-200/40 to-amber-200/40 blur-[60px] rounded-full transform scale-110"></div>
                <img src={burgerandfrenchfries} alt="" className='rounded-lg relative z-10 hover:scale-[1.05] transition-transform duration-300 w-full h-auto'/>
            </div>
        </motion.div>
        
    </section>
  )
}

export default Herosection;