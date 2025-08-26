import Image from "next/image";
import Window from "./components/Window";
import { Mail, LinkedInIcon, GitHubIcon} from "./ui/icons";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {
  const info = {
    name:"Brian Hoang",
    title:"Software Developer",
    email:"brianhoang29@hotmail.com",
    linkedIn:"https://www.linkedin.com/in/brianhoang29/",
    github:"https://github.com/Ambiivalent",
    picture:"https://github.com/ambiivalent.png"
  }

  const textData = {
    about:(
      <p className="">
      Software Developer. 
      <br></br>
      Passion in full stack development, machine learning, security and interest in low level development. 
      <br></br>
      Based in the Greater Toronto Area - Focused on building software that makes a difference.
      <br></br>
      Constantly looking for new avenues to explore my interests and to develop meaningful applications.
      </p>),
    experience:(
    <>
      <Accordion type="multiple" defaultValue={['item-1', 'item-2']}>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg ring-0">Web Developer</AccordionTrigger>
          <AccordionContent className="text-lg">
            Company: Malwa Welding [<a href="https://www.malwawelding.com" className="text-neutral-500 underline" referrerPolicy="no-referrer" target="blank">site</a>]<br></br>
            May 2025 - June 2025
            <br></br><br></br>
            •	Designed and developed a responsive website using React, Next.js and Tailwind CSS; deployed via Netlify with CI/CD workflows <br></br>
            •	Collaborated with the client to define scope, gather requirements, and refine features through iterative feedback<br></br>
            •	Built secure, scalable server-side logic with Next.js API routes, enforcing robust data handling and protection<br></br>
            •	Monitored web traffic patterns and implemented edge function logic to mitigate malicious activity and improve web performance<br></br>

          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg">IT Help Desk Support</AccordionTrigger>
          <AccordionContent className="text-lg">
            Company: Circle of Care <br></br>
            Summers: 2018, 2021, 2022
            <br></br><br></br>
            •	Identified software bugs in proprietary lockdown software and implemented solutions to enhance user experience <br></br>
            •	Developed interactive front-end features for internal web applications by integrating APIs and SQL databases to store, retrieve and display dynamic user data in jQuery <br></br>
            •	Collected usage patterns from SQL queries and analyzed user patterns to uncover security vulnerabilities and mitigate risk <br></br>
            •	Resolved support requests through Zendesk, delivering technical assistance for proprietary mobile and computer applications alongside creating documentation to streamline future troubleshooting <br></br>
            •	Supported 1,000+ employees and clients through virtual platforms using modern collaboration software and MDM <br></br>
            •	Led onboarding initiative of contemporary technologies by hosting software training sessions for staff <br></br>
          </AccordionContent>
        </AccordionItem>

      </Accordion>
    </>
    ),
    education:(
      <>
      <div className="flex justify-between">
        <div>
          <p>Bachelor of Science, Toronto Metropolitan University (Formerly Ryerson University)</p>
          <p>Major: Computer Science;<i> GPA: 3.80 (with Distinction)</i></p>
        </div>
      </div>
      </>
    ),
    projects:(
      <Accordion type="multiple" defaultValue={['item-1', 'item-2','item-3', 'item-4']}>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg ring-0">CHIP-8 Emulator</AccordionTrigger>
          <AccordionContent className="text-lg">
            <a href="https://github.com/Ambiivalent/chip8-emulator-python" className="text-neutral-500 underline">[GitHub]</a>
            <br></br><br></br>
            <div className="">
              <Image src="/projects/img1.png" width={256} height={256} alt="Project" className="float-right border-3 rounded-xl overflow-hidden p-4">
              </Image>
              <div>
                CHIP-8 Emulator created in Python using numpy for bit manipulation and pygame for graphics drawing. <br></br>
                Complete with 36 instructions handling arithmetic, control flow, bit manipulation, graphical rendering and bitwise logic to replicate the CHIP-8 CPU.<br></br>
                <br></br>
                It plays Pong!<br></br>
              </div>
            </div>

          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg">Python Video Metadata Tool</AccordionTrigger>
          <AccordionContent className="text-lg">
            <a href="https://github.com/Ambiivalent/reduce_video_size" className="text-neutral-500 underline">[GitHub]</a>
            <br></br><br></br>
            <div className="">
              <Image src="/projects/img2.png" width={256} height={256} alt="Project" className="float-right border-3 rounded-xl overflow-hidden p-4">
              </Image>
              <div>
                Python GUI tool to edit videos and handle file optimization using FFMPEG. Created using python as a wrapper for FFMPEG commands - specified by user configuration. 
                Allows for dynamic file format selection and multi-file + folder selection for faster compression/codec changes.
              </div>
            </div>

          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg">Health and Fitness Full Stack App</AccordionTrigger>
          <AccordionContent className="text-lg">
            <a href="https://github.com/Ambiivalent/cps714-health-fitness-project" className="text-neutral-500 underline">[GitHub]</a>
            <br></br><br></br>
            Full Stack Application for a prototype health and fitness tracker built for CPS714 Final Project using Vue.js, Flask and MySQL. <br></br>
            Followed Agile development methodology with a focus on weekly sprints, defined sprint goals, user story estimation and tracking weekly progression. 

          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-lg">Python Discord Bot</AccordionTrigger>
          <AccordionContent className="text-lg">
            <a href="https://github.com/Ambiivalent/KidFriendlyBot" className="text-neutral-500 underline">[GitHub]</a>
            <br></br><br></br>
            <div className="">
              
              <Image src="/projects/img3.png" width={256} height={256} alt="Project" className="float-right border-3 rounded-xl overflow-hidden p-4">
              </Image>
              <div>
                Discord bot developed in JavaScript featuring server moderation control, voice channel music player and interactive commands for users. <br></br>
                Leverages Puppeteer for web scraping related commands and opus codec for audio manipulation.<br></br>
                <br></br>
                Built for a private Discord server with commands specific to the server.
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

      </Accordion>

    ),
    contact:(
      <div className="">
        <p>
          Hi. Let&apos;s get in touch. <br></br>
          Mail: <a href={`mailto:${info.email}`} className="text-neutral-500 underline">[{info.email}]</a> <br></br>
          LinkedIn: <a href={info.linkedIn} target="blank" className="text-neutral-500 underline">[LinkedIn]</a> <br></br>
          GitHub: <a href={info.github} target="blank" className="text-neutral-500 underline">[GitHub]</a>
        </p>
        <br></br>
        <a href="resume.pdf" className="text-neutral-500 underline">[Resume]</a>
      </div>
    )
  }
  const headings = [
    'About',
    'Experience',
    'Education',
    'Projects',
    'Contact'
  ]


  return (
    <>
      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 w-9/10 place-self-center p-10 xl:w-7/10 2xl:w-6/10 place-items-start ">
        <aside className="static lg:sticky top-10 col-span-1 h-auto w-full place-items-center lg:place-items-start">
          {/* Profile */}
          <div className="">
            {/* Info */}
            <h1 className="font-bold text-4xl">{info.name}</h1>
            <h2 className="text-2xl">{info.title}</h2>
            <h3 className="italic text-lg text-neutral-500">{info.email}</h3>
            <div className="dark:border-neutral-400 border-2 rounded-xl mt-5 aspect-square w-[250px] h-[250px] overflow-hidden">
              <Image src={info.picture} width={512} height={512} alt="Picture of the Author"
                className="grayscale-60 object-cover "
                ></Image>
            </div>
          </div>
          <div className="pt-4">
            {/* Social Media */}
            <div className="flex gap-2 dark:invert">

              <a href={`mailto:${info.email}`} className="opacity-70 hover:opacity-90">
                <Mail />
              </a>
              <a href={info.linkedIn} target="blank" className="opacity-70 hover:opacity-90">
              <LinkedInIcon />
              </a>
              <a href={info.github} target="blank" className="opacity-70 hover:opacity-90">
              <GitHubIcon />
              </a>

            </div>
          </div>

          <div className="hidden lg:inline pt-5 pl-5">
            {/* Headings */}
            <div className="italic inline-block text-left pt-5">
              {
                headings.map((t) => (
                  <a href={`#${t.toLowerCase()}`} key={t}>
                    <h1 className="mb-1 transition-[font-size] duration-300 ease-in-out hover:text-xl clickable">{t}</h1>
                  </a>
                ))
              }
            </div>
          </div>

        </aside>

        {/* Only show these headings on mobile view */}
        <div className="lg:hidden self-center w-9/10 pt-5">
            {/* Headings */}
            <div className="italic text-center md:text-right md:justify-self-end">
              {
                headings.map((t) => (
                  <a href={`#${t.toLowerCase()}`} key={t}>
                    <h1 className="mb-1 transition-[font-size] duration-300 ease-in-out hover:text-xl clickable">{t}</h1>
                  </a>
                ))
              }
            </div>
        </div>

        <section className="flex flex-col gap-2 col-span-2 place-content-center lg:p-5">
          
          {/* Article Content */}
          {
            headings.map((t) => (
              <Window heading={t} key={t}>
                {textData[t.toLowerCase() as keyof typeof textData]}
              </Window>
            ))
          }

        </section>

      </div>


    </>
  );
}
