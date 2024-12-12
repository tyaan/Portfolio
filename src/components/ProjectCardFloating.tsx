import { Project } from "../../models/Project"
import { XMarkIcon } from '@heroicons/react/24/solid'
import { SiGithub } from "react-icons/si"



export default function ProjectCardFloating({ project, onClose }: { project: Project, onClose: () => void}) {
  return (
    <div className="project-card-floating">
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2 max-h-11/12 flex flex-col">

          <div className="justify-items-end w-full">
            <XMarkIcon className="w-16 cursor-pointer text-gray-500 hover:text-gray-800" onClick={onClose}/>
          </div>

          <div className="flex flex-col md:flex-row">
            <img className="h-52 rounded-lg" src={project.imgURL} />
            <div className="p-4 m-4">
              <span className="text-3xl font-bold">{project.title}</span>
              <br />
              <br />
              <p className="text-lg font-bold">
                {project.overview}
              </p>
              <br />
              <p className="text-md text-red-400 font-bold">
                {`${project.tech.join(", ")}`}
              </p>
            </div>
          </div>

          <div className="p-4 m-4">
            <p>
              {project.details}
            </p>
          </div>

          <a href={project.siteURL} target="_blank" rel="noopener noreferrer" className="text-3xl">
            <div className="p-4 m-4 button border border-white text-center bg-green-100 rounded-lg">
              Visit Deployed Site
            </div>
          </a>

          <a href={project.githubURL} target="_blank" rel="noopener noreferrer" className="text-3xl">
            <div className="p-4 m-4 button border border-white text-center bg-gray-200 rounded-lg">
              Chekout the Project Github
            </div>
          </a>

        </div>
      </div>
    </div>
  )
}
