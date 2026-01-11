import React, { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations/translations'
import Window from './Window'
import DesktopIcon from './DesktopIcon'
import Taskbar from './Taskbar'
import MoiWindow from './windows/MoiWindow'
import AboutWindow from './windows/AboutWindow'
import ProjetsWindow from './windows/ProjetsWindow'
import CompetencesWindow from './windows/CompetencesWindow'
import EducationWindow from './windows/EducationWindow'
import ContactWindow from './windows/ContactWindow'

const Desktop = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const [windows, setWindows] = useState([])
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false)
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString(language === 'fr' ? 'fr-FR' : 'en-US', { hour: '2-digit', minute: '2-digit' }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [language])

  const windowConfigs = {
    moi: { title: t.moi, icon: '👤', component: <MoiWindow />, style: 'xp' },
    about: { title: t.about, icon: '📝', component: <AboutWindow />, style: 'xp' },
    projets: { title: t.projets, icon: '📁', component: <ProjetsWindow />, style: 'vista' },
    competences: { title: t.competences, icon: '⚙️', component: <CompetencesWindow />, style: 'xp' },
    education: { title: t.education, icon: '🎓', component: <EducationWindow />, style: 'xp' },
    contact: { title: t.contact, icon: '✉️', component: <ContactWindow />, style: 'vista' }
  }

  const openWindow = (windowId) => {
    if (!windowConfigs[windowId]) return

    // Check if window already exists
    const existingWindow = windows.find(w => w.id === windowId)
    if (existingWindow) {
      // If minimized, restore it
      if (existingWindow.isMinimized) {
        setWindows(windows.map(w => 
          w.id === windowId ? { ...w, isMinimized: false } : w
        ))
      }
      return
    }

    // Create new window
    const newWindow = {
      id: windowId,
      title: windowConfigs[windowId].title,
      icon: windowConfigs[windowId].icon,
      isMinimized: false,
      style: windowConfigs[windowId].style
    }
    setWindows([...windows, newWindow])
  }

  const closeWindow = (windowId) => {
    setWindows(windows.filter(w => w.id !== windowId))
  }

  const minimizeWindow = (windowId) => {
    setWindows(windows.map(w => 
      w.id === windowId ? { ...w, isMinimized: !w.isMinimized } : w
    ))
  }

  const restoreWindow = (windowId) => {
    setWindows(windows.map(w => 
      w.id === windowId ? { ...w, isMinimized: false } : w
    ))
  }

  const handleStartMenuToggle = () => {
    setIsStartMenuOpen(!isStartMenuOpen)
  }

  const handleDownloadCV = (cvType = null) => {
    // Determine which CV to download based on language or explicit type
    const cvLang = cvType || language
    const cvFileName = cvLang === 'fr' ? 'bouhouch_chouaib_IT_CV.pdf' : 'bouhouch_chouaib_IT_resume.pdf'
    const cvDisplayName = cvLang === 'fr' ? 'CV_Chouaib_Bouhouch_FR.pdf' : 'CV_Chouaib_Bouhouch_EN.pdf'
    
    // Try to download CV from public folder
    const link = document.createElement('a')
    link.href = `/${cvFileName}`
    link.download = cvDisplayName
    link.target = '_blank'
    
    // Check if file exists, if not show alert
    fetch(`/${cvFileName}`, { method: 'HEAD' })
      .then(response => {
        if (response.ok) {
          link.click()
        } else {
          alert(language === 'fr' 
            ? `CV non trouvé. Placez votre fichier ${cvFileName} dans le dossier public/ pour activer cette fonctionnalité.`
            : `CV not found. Place your ${cvFileName} file in the public/ folder to enable this feature.`)
        }
      })
      .catch(() => {
        alert(language === 'fr' 
          ? `CV non trouvé. Placez votre fichier ${cvFileName} dans le dossier public/ pour activer cette fonctionnalité.`
          : `CV not found. Place your ${cvFileName} file in the public/ folder to enable this feature.`)
      })
  }

  // Calculer la position en haut à droite pour les CV
  const getRightPosition = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth - 100 // 100px depuis la droite
    }
    return 1800 // Fallback pour SSR
  }

  const desktopIcons = [
    { id: 'moi', icon: '👤', label: t.moi, position: { x: 20, y: 20 } },
    { id: 'about', icon: '📝', label: t.about, position: { x: 20, y: 120 } },
    { id: 'projets', icon: '📁', label: t.projets, position: { x: 20, y: 220 } },
    { id: 'competences', icon: '⚙️', label: t.competences, position: { x: 20, y: 320 } },
    { id: 'education', icon: '🎓', label: t.education, position: { x: 20, y: 420 } },
    { id: 'contact', icon: '✉️', label: t.contact, position: { x: 20, y: 520 } },
    { id: 'cv-fr', icon: '📄', label: 'CV (FR)', position: { x: getRightPosition(), y: 20 }, action: () => handleDownloadCV('fr'), isCV: true },
    { id: 'cv-en', icon: '📄', label: 'CV (EN)', position: { x: getRightPosition(), y: 120 }, action: () => handleDownloadCV('en'), isCV: true }
  ]

  return (
    <div className="desktop relative w-screen h-screen overflow-hidden bliss-bg">
      {/* Desktop Icons */}
      <div className="desktop-icons-container">
        {desktopIcons.map(icon => (
          <DesktopIcon
            key={icon.id}
            icon={icon.icon}
            label={icon.label}
            position={icon.position}
            onClick={() => icon.isCV ? icon.action() : openWindow(icon.id)}
          />
        ))}
      </div>

      {/* Windows */}
      {windows.map((window, index) => {
        const config = windowConfigs[window.id]
        if (!config) return null

        return (
          <Window
            key={window.id}
            id={window.id}
            title={window.title}
            icon={window.icon}
            onClose={() => closeWindow(window.id)}
            onMinimize={() => minimizeWindow(window.id)}
            isMinimized={window.isMinimized}
            style={window.style}
            zIndex={100 + index}
          >
            {config.component}
          </Window>
        )
      })}

      {/* Taskbar */}
      <Taskbar
        openWindows={windows}
        onWindowClick={restoreWindow}
        onStartMenuToggle={handleStartMenuToggle}
        isStartMenuOpen={isStartMenuOpen}
        currentTime={currentTime}
        onOpenWindow={openWindow}
        onDownloadCV={handleDownloadCV}
      />

      {/* Click outside to close start menu */}
      {isStartMenuOpen && (
        <div
          className="fixed inset-0 z-[2500]"
          onClick={handleStartMenuToggle}
        />
      )}
    </div>
  )
}

export default Desktop

