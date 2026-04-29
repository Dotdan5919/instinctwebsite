import fs from 'fs'
import path from 'path'

const PROJECTS_DIR = path.join(process.cwd(), 'images', 'project', 'PROJECTS')

export interface ProjectData {
  id: string
  folderName: string
  title: string
  images: string[]
}

/**
 * Get all projects from the PROJECTS folder
 */
export function getAllProjects(): ProjectData[] {
  try {
    const folders = fs.readdirSync(PROJECTS_DIR, { withFileTypes: true })
    
    return folders
      .filter(dirent => dirent.isDirectory())
      .map((dirent, index) => {
        const folderName = dirent.name
        const id = String(index + 1)
        
        // Get all image files from the folder
        const folderPath = path.join(PROJECTS_DIR, folderName)
        const images = fs
          .readdirSync(folderPath)
          .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
          .sort()
        
        return {
          id,
          folderName,
          title: folderName,
          images,
        }
      })
  } catch (error) {
    console.error('Error reading projects:', error)
    return []
  }
}

/**
 * Get a specific project by ID
 */
export function getProjectById(id: string): ProjectData | null {
  const projects = getAllProjects()
  return projects.find(p => p.id === id) || null
}

/**
 * Get images for a specific project
 */
export function getProjectImages(id: string): string[] {
  const project = getProjectById(id)
  if (!project) return []
  
  const folderPath = path.join(PROJECTS_DIR, project.folderName)
  return project.images.map(
    img => `/images/project/PROJECTS/${encodeURIComponent(project.folderName)}/${img}`
  )
}
