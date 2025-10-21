export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  image: string
  video?: string
  github?: string
  demo?: string
  featured: boolean
}

export interface Skill {
  name: string
  icon: string
  category: 'frontend' | 'backend' | 'database' | 'tools'
  level: number
}

export interface Experience {
  title: string
  company: string
  period: string
  description: string[]
  current?: boolean
}

export interface Social {
  name: string
  url: string
  icon: string
}
