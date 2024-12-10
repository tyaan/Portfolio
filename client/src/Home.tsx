import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { SiGithub } from "react-icons/si"
import { FaLinkedin } from "react-icons/fa";
import { ReactElement, useState } from 'react'

export default function Home() {
  
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const [workOpenIdx, setWorkOpenIdx] = useState<number | null>(null)


  return (
    <div className="min-h-screen flex flex-col md:flex-row">

      {/* IMAGE AND OVERVIEW */}
      <div className="md:w-1/3 m-10 p-5 bg-green-100 rounded-lg shadow-lg">
        <img className="rounded-full p-5" src="images/Tyaan Promo Photo.JPG" />
        <h1 className="text-center text-3xl p-5">
          Hi! I'm Tyaan.
        </h1>
        <p className="p-10">
          I'm a full stack web developer, data analyst and musician. 

          <br />
          <br />

          Welcome to my tech portfolio site! Check out some of my projects on the projects page. 
        </p>

        <div className="flex flex-row">
          <a className="flex-1 justify-center p-10" href="https://github.com/tyaan">
            <SiGithub size={"100%"}/>
          </a>
          <a className="flex-1 justify-center p-10" href="https://www.linkedin.com/in/tyaansingh/">
            <FaLinkedin size={"100%"}/>
          </a>
        </div>

      </div>

      {/* ABOUT, EDUCATION, WORK, SKILLS */}
      <div className="md:w-2/3 m-10 p-10 bg-green-100 rounded-lg shadow-lg">

        <div className="about">
          <h1 className="text-3xl">About</h1>
          <div className="p-5">
            <p className="p-1">
              I am a very analytical person with a brain wired for complex problem solving. 
              I love all things music, and have been a musician from a young age. 
            </p>
            <p className="p-1">
              I completed a BSc in Electronics Engineering in 2017, briefly worked as an electronics engineering assistant and then returned to my passion for music, working as a performing and recording instrumentalist, soundtrack writer, producer, and audio engineer. 
            </p>
            <p className="p-1">
              In 2023, I picked up some freelance data analyst work (mostly creating royalties reports for musicians). I developed some basic Python skills through this work and moved on to working as a data annotator for a US based company Data Annotation. This work involves rating and correcting AI chatbots on a range of data science and math topics including Python programming, which has really helped develop my coding skills. 
            </p>
            <p className="p-1">
              In August 2024, I studied full stack web development at Dev Academy Aotearoa. This course provided invaluable opportunities for group and pair coding work, with a focus on Javascript/Typescript and the React framework.
            </p>
          </div>
        </div>

        <div className="education">
          <h1 className="text-3xl">Education</h1>
          <ul className='p-1'>
          {education.map((item, idx) => (
            <li key={item.school + idx} className='rounded-lg border border-white m-2 p-1'>
              <span className="font-bold">{item.school}</span>
              <br />
              <span>{item.dates}</span>
              <br />
              <span>{item.details}</span>
            </li>
          ))}
          </ul>
        </div>

        <br />

        <div className="work">
          <h1 className="text-3xl">Work History</h1>
          {work_history.map((item, idx) => (
            <div 
              key={item.position + idx} 
              className="p-1 m-2 button rounded-lg border border-white"
              onClick={() => setWorkOpenIdx(workOpenIdx === idx ? null : idx)}
            >

              <div className="flex flex-row">
                <div className="flex-1">
                  <span className="font-bold">{item.position}</span>
                  <br />
                  {item.employer}
                  <br />
                  {item.dates}
                </div>
                <span>
                  <ChevronRightIcon className={`size-5 ${workOpenIdx === idx ? 'rotate-90' : ''}`}/>
                </span>
              </div>

              {
              workOpenIdx === idx && 
              <ul className="p-2">
                {item.tasks.map((task, i) => (
                  <li key={task + i}>
                    • {task}
                  </li>
                ))}
              </ul>
              }
            </div>
          ))}
        </div>

        <br />

        <div className="skills">
          <h1 className="text-3xl">Skills</h1>
          {skills.map((item, idx) => (
            <div 
              key={item.title + idx} 
              className="p-1 m-2 button rounded-lg border border-white"
              onClick={() => {
                setOpenIdx(openIdx === idx ? null : idx)
              }}
            >

              <div className="flex flex-row">
                <span className="flex-1 font-bold">
                  {item.title}
                </span>
                <span>
                  <ChevronRightIcon className={`size-5 ${openIdx === idx ? 'rotate-90' : ''}`}/>
                </span>
              </div>

              {
              openIdx === idx && 
              <p className="p-2">
                {item.details}
              </p>
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

interface Education {
  school: string
  dates: string
  details: string
}

const education: Education[] = [
  {
    school: "Dev Academy Aotearoa",
    dates: "Aug - Dec 2024",
    details: "Full Stack Web Development"
  },
  {
    school: "Victoria University of Wellington",
    dates: "2018", 
    details: "Graduate Diploma in Music Composition"
  },
  {
    school: "Victoria University of Wellington", 
    dates: "2015 - 2017",
    details: "Bachelor of Science in Electronics and Computer Systems Engineering"
  }
]

interface Skill {
  title: string,
  details: ReactElement
}

const skills: Skill[] = [
  {
    title: "Python",
    details: <>
    I've been using Python in my work at Data Annotation, where I rate and correct AI chatbots on data analysis and machine learning tasks. 
    I have also used Python to clean data for some freelance data reporting work. 
    Recently, I also started learning the Python Django framework for backend web development.
    </>
  },
  {
    title: "Javascript / Typescript",
    details: <>
    I learned JavaScript and TypeScript as part of my education at Dev Academy Aotearoa. 
    I have experience building full-stack websites with React, Node.js, and Express.js.
    </>
  },
  {
    title: "SQL", 
    details: <>
    I learned SQL as part of my education at Dev Academy Aotearoa. 
    I have experience using SQL queries to perform CRUD operations on databases such as SQLite and PostgreSQL. 
    I have also used the JavaScript Knex library to build SQL queries.
    </>
  },
  {
    title: "R", 
    details: <>
    I have used R for data cleaning, and generating graphs and reports for some freelance data reporting work.
    </>
  },
  {
    title: "Microsoft Excel", 
    details: <>
    I have used Excel to clean, organise and display data for some freelance data reporting work. 
    </>
  },
  {
    title: "Microsoft Power BI", 
    details: <>
    I have used Power BI to generate graphs and reports for some freelance data reporting work. 
    </>
  },
  {
    title: "Microsoft Azure", 
    details: <>
    I obtained the "Microsoft Certified: Azure Data Fundamentals" certificate in July 2024. 
    </>
  }

]

interface Work {
  position: string, 
  employer: string, 
  dates: string, 
  tasks: string[]
}

const work_history: Work[] = [
  {
    position: "Data Annotator", 
    employer: "Data Annotation", 
    dates: "March 2024 - Present", 
    tasks: [
      'Writing, rating and editing responses from AI assistants',
      'Topics include Python, Math, Statistics, Data Analysis and Machine Learning'
    ]
  }, 
  {
    position: "Data Reporting Analyst", 
    employer: "Self Employed", 
    dates: "July 2023 - Present", 
    tasks: [
      "Cleaning data", 
      "Visualising Data", 
      "Creating reports and dashboards"
    ]
  }, 
  {
    position: "Musician", 
    employer: "Self Employed", 
    dates: "2014 - Present", 
    tasks: [
      "Organising and performing shows", 
      "Musical director", 
      "Session musicain, recording and performing", 
      "Music producing for artists and for film", 
      "Audio engineering", 
      "Teaching"
    ]
  }, 
  {
    position: "Bicycle Assistant", 
    employer: "Donkey Republic Berlin", 
    dates: "March 2019 - September 2019", 
    tasks: [
      "Collecting and moving misplaced bikes"
    ]
  }, 
  {
    position: "Electronics Engineering Assistant", 
    employer: "Vanguard Electronics Wellington", 
    dates: "May 2017 - January 2018", 
    tasks: [
      "Design and analysis of analog and digital circuits", 
      "Soldering", 
      "Micro-controller programming"
    ]
  }
]