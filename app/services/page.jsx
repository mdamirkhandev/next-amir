"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
const services = [
  {
    num: "01",
    title: "Web Development",
    text: "Expertise in web development, designing responsive and interactive websites using cutting-edge technologies and frameworks.",
  },
  {
    num: "02",
    title: "Theme Development",
    text: "Experienced in WordPress theme development, crafting custom, visually appealing themes tailored to unique client needs.",
  },
  {
    num: "03",
    title: "Plugin Development",
    text: "Proficient in WordPress plugin development, creating custom plugins to extend functionality and enhance website performance.",
  },
  {
    num: "04",
    title: "Software Development",
    text: "Skilled in software development, building robust applications with efficient code and scalable architecture for diverse needs.",
  },
  {
    num: "05",
    title: "Game Development",
    text: "Experienced in game development, designing engaging, interactive games with compelling mechanics and immersive graphics.",
  },
  {
    num: "06",
    title: "Mobile App Development",
    text: "Expertise in mobile app development, creating intuitive, high-performance applications for seamless user experiences on all devices.",
  },
];
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.4,
              delay: 2.4,
              ease: "easeIn",
            },
          }}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {services.map((item, index) => {
            return (
              <div
                className="flex-1 flex flex-col justify-center gap-6 group"
                key={index}
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover group-hover:cursor-pointer transition-all duration-500">
                    {item.num}
                  </div>
                  <Link
                    href={`/services/${item.num}`}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent  transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-3xl text-primary" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {item.title}
                </h2>
                <p className="text-white/60">{item.text}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
