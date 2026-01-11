import React, { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { translations } from '../../translations/translations'

const ProjetsWindow = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      name: t.projects.searchEngine.name,
      type: t.projectType.application,
      description: t.projects.searchEngine.description,
      technologies: t.projects.searchEngine.technologies,
      icon: '🔍'
    },
    {
      id: 2,
      name: t.projects.parking.name,
      type: t.projectType.webApp,
      description: t.projects.parking.description,
      technologies: t.projects.parking.technologies,
      icon: '🚗'
    },
    {
      id: 3,
      name: t.projects.gameC.name,
      type: t.projectType.game,
      description: t.projects.gameC.description,
      technologies: t.projects.gameC.technologies,
      icon: '🎮'
    },
    {
      id: 4,
      name: t.projects.zooDB.name,
      type: t.projectType.database,
      description: t.projects.zooDB.description,
      technologies: t.projects.zooDB.technologies,
      icon: '🦁'
    },
    {
      id: 5,
      name: t.projects.aerospace.name,
      type: t.projectType.website,
      description: t.projects.aerospace.description,
      technologies: t.projects.aerospace.technologies,
      icon: '🚀'
    },
    {
      id: 6,
      name: t.projects.drone.name,
      type: t.projectType.application,
      description: t.projects.drone.description,
      technologies: t.projects.drone.technologies,
      icon: '🚁'
    }
  ]

  return (
    <div className="projets-window p-4">
      <div className="explorer-style flex h-full">
        {/* Sidebar */}
        <div className="w-48 bg-gray-100 border-r border-gray-300 p-2">
          <div className="text-xs font-semibold text-gray-700 mb-2">{t.favorites}</div>
          <div className="space-y-1">
            <div className="px-2 py-1 hover:bg-blue-500 hover:text-white rounded cursor-pointer text-xs">
              📁 {t.myProjects}
            </div>
          </div>
          <div className="text-xs font-semibold text-gray-700 mb-2 mt-4">{t.folder}</div>
          <div className="space-y-1">
            <div className="px-2 py-1 hover:bg-blue-500 hover:text-white rounded cursor-pointer text-xs">
              📂 {t.projectsFolder}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 overflow-auto">
          <div className="mb-4">
            <div className="text-xs text-gray-600 mb-2">📂 {t.projectsFolder}</div>
            <div className="border-t border-gray-300"></div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`project-item p-3 border-2 rounded cursor-pointer transition-all ${
                  selectedProject?.id === project.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{project.icon}</span>
                  <div>
                    <div className="font-semibold text-sm text-gray-800">{project.name}</div>
                    <div className="text-xs text-gray-500">{project.type}</div>
                  </div>
                </div>
                {selectedProject?.id === project.id && (
                  <div className="mt-2 text-xs text-gray-600">
                    <div className="mb-2">{project.description}</div>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-blue-200 text-blue-800 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjetsWindow
