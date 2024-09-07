"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaLaravel,
  FaNodeJs,
  FaPhp,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
const about = {
  title: "About Me",
  desc: "Experienced full-stack web developer adept at crafting dynamic applications, integrating technologies, and optimizing performance for exceptional user experiences.",
  info: [
    {
      title: "Name",
      desc: "Amir Khan",
    },
    {
      title: "Nationality",
      desc: "Indian",
    },
    {
      title: "Phone",
      desc: "+91 886-600-8738",
    },
    {
      title: "Experience",
      desc: "3+ Years",
    },
    {
      title: "Email",
      desc: "mdamirkhan.dev@gmail.com",
    },
    {
      title: "Freelance",
      desc: "Not Available",
    },
    {
      title: "Skype",
      desc: "amirkhan_ind",
    },

    {
      title: "Languages",
      desc: "English,Hindi,Bengali",
    },
  ],
};
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  desc: "3+ years of experience in Laravel, WordPress, and React.js, specializing in building robust web applications and dynamic user interfaces.",
  items: [
    {
      company: "Manee Diam C.o, Ltd.",
      position: "Data Analysis & Web Devloper",
      duration: "2017-2020",
    },
    {
      company: "Freelancing",
      position: "Full-Stack Developer",
      duration: "2020-2022",
    },
    {
      company: "Adbrains Technologies",
      position: "Full-Stack Developer",
      duration: "2022-Present",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  desc: "Diploma and B.Tech in Computer Science and Engineering, equipping me with in-depth knowledge in software development, algorithms, and cutting-edge technologies.",
  items: [
    {
      institution: "GIST",
      degree: "Diploma in Computer Science & Engineering",
      duration: "2007-2010",
    },
    {
      institution: "TICT",
      degree: "B.tech in Computer Science & Engineering",
      duration: "2010-2014",
    },
  ],
};
const skills = {
  title: "My Skills",
  desc: "Proficient in Laravel, WordPress, React.js, and Next.js. Experienced with PHP, Tailwind CSS, JavaScript, HTML, and CSS, creating dynamic and responsive web applications.",
  skillList: [
    {
      icon: <FaWordpress />,
      name: "wordpress",
    },
    {
      icon: <FaLaravel />,
      name: "laravel",
    },
    {
      icon: <FaPhp />,
      name: "php",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind css",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
  ],
};
const Resume = () => {
  return (
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
      className="min-h-[80vh] flex justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.desc}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                        flex flex-col justify-center items-center lg:items-start
                        gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.desc}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                        flex flex-col justify-center items-center lg:items-start
                        gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.desc}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((item, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger
                              className="bg-[#232329] w-full h-[150px] rounded-xl
                        flex justify-center items-center group"
                            >
                              <div className="text-6xl group-hover:text-accent transition-all duration-500">
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.desc}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.title}</span>
                        <span className="text-md">{item.desc}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
