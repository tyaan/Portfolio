import { useState } from "react"
import { Project } from "../models/Project.tsx"
import ProjectCard from "./components/ProjectCard.tsx"
import ProjectCardFloating from "./components/ProjectCardFloating.tsx"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const handleClose = () => {
    setSelectedProject(null)
  }

  console.log(selectedProject)

  return (
    <div className="projects">
      <div className="flex flex-col">
        {projects.map((project, idx) => (
          <div key={project.title + idx} onClick={() => setSelectedProject((idx))}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      {selectedProject != null && 
        <ProjectCardFloating project={projects[selectedProject]} onClose={handleClose}/>
      }
    </div>
  )
}


const projects: Project[] = [
  {
    title: "Pokemon list app", 
    overview: "Static site that pulls pokemon info from the Poke API", 
    details: <>
      This app was one of the first I built as a part of my study at Dev Academy Aotearoa. 
      <br />
      It is a simple static site that pulls information on all pokemon from the publicly available poke API, and displays info on each one. 
    </>,
    siteURL: "http://tyaan-roa24-pokemonlist.devacademy.nz/pokemon/beedrill",
    imgURL: "https://pluspng.com/img-png/pokemon-logo-png-pokemon-logo-on-gradient-1600.png"
  }
]