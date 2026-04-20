"use client"
import { motion } from "framer-motion"
import Preheader from "@/components/Preheader"
import Navbar from "@/components/Navbar"
import OtherHero from "@/components/OtherHero"
import Aboutus from "@/components/about_components/Aboutus"
import Whoweare from "@/components/about_components/Whoweare";
import OurValues from "@/components/about_components/OurValues";
import Mission from "@/components/about_components/Mission";
import Footersection from "@/components/FooterSection";
import OurPartners from "@/components/about_components/OurPartners";



export default function OurCompany() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
       <div className="absolute z-10 left-24 w-325 h-full border-l border-r border-white/20 pointer-events-none" />

<div className="absolute inset-0 z-5 bg-linear-to-r from-[#000000] via-[#0a0f1a]/75 to-[#6666664D]/10 pointer-events-none h-screen" />
      <div className={`flex w-screen overflow-hidden flex-col bg-[url('../images/about-hero.jpg')] bg-cover bg-no-repeat bg-center min-h-screen`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Preheader />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Navbar />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <OtherHero title="About Us" subtitle={<>MORE THAN CONSTRUCTION. <br /> A SYSTEM OF DELIVERY.</>} />
        </motion.div>
      </div>


<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.1 }}
  viewport={{ once: true }}
>
  <Aboutus />
</motion.div>

<motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  viewport={{ once: true }}
>
  <Whoweare/>
</motion.div>

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.1 }}
  viewport={{ once: true }}
>
  <OurValues />
</motion.div>

<motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.9, delay: 0.3 }}
  viewport={{ once: true }}
>
  <Mission/>
</motion.div>

<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7, delay: 0.2 }}
  viewport={{ once: true }}
>
  <OurPartners />
</motion.div>

  
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.1 }}
  viewport={{ once: true }}
>
  <Footersection />
</motion.div>
    

      
    </div>
  )
}
