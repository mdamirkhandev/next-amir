"use client";
import { useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import WorkSliderBtns from "@/components/WorkSliderBtns";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const projects = [
  {
    num: "01",
    category: "Wordpress",
    title: "Plumbing Portfolio",
    href: "#",
    github: "#",
    image: "/assets/work/thumb1.png",
    description: "Multi Page Plumbing Portfolio with all necesary details",
    stack: [
      { name: "Wordpress" },
      { name: "Elementor" },
      { name: "Astra Theme" },
    ],
  },
  {
    num: "02",
    category: "Laravel",
    title: "Job Portal",
    href: "#",
    github: "#",
    image: "/assets/work/thumb2.png",
    description: "Full functional dynamic Job Portal",
    stack: [{ name: "Laravel" }, { name: "Next.js" }, { name: "Node.js" }],
  },
  {
    num: "03",
    category: "Laravel",
    title: "E-commerce",
    href: "#",
    github: "#",
    image: "/assets/work/thumb3.png",
    description: "Complete functional ready to use e-commerce web application",
    stack: [{ name: "React" }, { name: "Next.js" }, { name: "Node.js" }],
  },
];

const Works = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li className="text-xl text-accent" key={index}>
                      {item.name}
                      {index === project.stack.length - 1 ? null : ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex gap-4">
                <Link href={project.href}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="bg-white/5 w-[70px] h-[70px] rounded-full
                        flex justify-center items-center group"
                      >
                        <BsArrowUpRight className="text-3xl group-hover:text-accent transition-all duration-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="capitalize"> Live Link</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="bg-white/5 w-[70px] h-[70px] rounded-full
                        flex justify-center items-center group"
                      >
                        <BsGithub className="text-3xl group-hover:text-accent transition-all duration-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="capitalize"> Github Link</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              // navigation
              // pagination={{ clickable: true }}
              // onSwiper={(swiper) => console.log(swiper)}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {/* <Image
                  src={project.image}
                  alt="project image"
                  className="w-full h-full object-cover"
                /> */}
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          alt={project.title}
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slide buttons */}
              {/* <WorkSliderBtns /> */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px]  w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Works;
