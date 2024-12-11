import { Project } from "../../models/Project"

export default function ProjectCard({ project }: { project: Project}) {
  return (
    <div className="project-card">
      <div className="m-4 p-4 rounded-lg shadow-lg bg-white flex flex-col sm:flex-row button border border-white hover:bg-green-100">
        <img className="h-52 rounded-lg" src={project.imgURL} />
        <div className="p-4 m-4 text-right w-full">
          <span className="text-3xl font-bold">{project.title}</span>
          <br />
          <br />
          <p className="text-lg font-bold">
            {project.overview}
          </p>
        </div>
      </div>
    </div>
  )
}
