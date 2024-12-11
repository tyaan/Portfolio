import { ReactElement } from "react"

export interface Project {
  imgURL?: string
  title: string
  overview: string
  details: ReactElement
  siteURL: string
  githubURL: string
}