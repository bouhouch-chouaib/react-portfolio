import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations/translations'

const Taskbar = ({ openWindows, onWindowClick, onStartMenuToggle, isStartMenuOpen, currentTime, onOpenWindow, onDownloadCV }) => {
  const { language, toggleLanguage } = useLanguage()
  const t = translations[language]
  
  const formatTime = (date) => {
    return date.toLocaleTimeString(language === 'fr' ? 'fr-FR' : 'en-US', { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <div className="taskbar fixed bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-gray-700 to-gray-600 border-t-2 border-gray-500 flex items-center px-2 z-[2000] shadow-lg">
      {/* Start Button */}
      <div className="relative">
        <button
          onClick={onStartMenuToggle}
          className={`start-button px-4 py-1.5 bg-gradient-to-r from-green-600 to-green-500 text-white font-bold text-sm rounded-sm border border-green-400 hover:from-green-500 hover:to-green-400 ${isStartMenuOpen ? 'shadow-inner' : 'shadow-md'}`}
          style={{ fontFamily: 'Tahoma, sans-serif' }}
        >
          {language === 'fr' ? 'Démarrer' : 'Start'}
        </button>

        {/* Start Menu */}
        {isStartMenuOpen && (
          <div className="start-menu absolute bottom-12 left-0 w-64 bg-white border-2 border-gray-400 shadow-2xl rounded-lg overflow-hidden z-[3000]">
            <div className="bg-gradient-to-r from-xp-blue to-xp-light-blue text-white p-3 font-bold" style={{ fontFamily: 'Segoe UI, Tahoma, sans-serif' }}>
              {t.startMenu}
            </div>
            <div className="py-2">
              <button
                onClick={() => { onOpenWindow('moi'); onStartMenuToggle(); }}
                className="w-full text-left px-4 py-2 hover:bg-blue-500 hover:text-white flex items-center gap-3"
              >
                <span className="text-2xl">👤</span>
                <span>{t.moi}</span>
              </button>
              <button
                onClick={() => { onOpenWindow('about'); onStartMenuToggle(); }}
                className="w-full text-left px-4 py-2 hover:bg-blue-500 hover:text-white flex items-center gap-3"
              >
                <span className="text-2xl">📝</span>
                <span>{t.about}</span>
              </button>
              <button
                onClick={() => { onOpenWindow('projets'); onStartMenuToggle(); }}
                className="w-full text-left px-4 py-2 hover:bg-blue-500 hover:text-white flex items-center gap-3"
              >
                <span className="text-2xl">📁</span>
                <span>{t.projets}</span>
              </button>
              <button
                onClick={() => { onOpenWindow('competences'); onStartMenuToggle(); }}
                className="w-full text-left px-4 py-2 hover:bg-blue-500 hover:text-white flex items-center gap-3"
              >
                <span className="text-2xl">⚙️</span>
                <span>{t.competences}</span>
              </button>
              <button
                onClick={() => { onOpenWindow('education'); onStartMenuToggle(); }}
                className="w-full text-left px-4 py-2 hover:bg-blue-500 hover:text-white flex items-center gap-3"
              >
                <span className="text-2xl">🎓</span>
                <span>{t.education}</span>
              </button>
              <button
                onClick={() => { onOpenWindow('contact'); onStartMenuToggle(); }}
                className="w-full text-left px-4 py-2 hover:bg-blue-500 hover:text-white flex items-center gap-3"
              >
                <span className="text-2xl">✉️</span>
                <span>{t.contact}</span>
              </button>
              <div className="border-t border-gray-300 my-1"></div>
              <button
                onClick={() => { onDownloadCV(); onStartMenuToggle(); }}
                className="w-full text-left px-4 py-2 hover:bg-blue-500 hover:text-white flex items-center gap-3"
              >
                <span className="text-2xl">📄</span>
                <span>{t.downloadCV}</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Taskbar Icons (Open Windows) */}
      <div className="flex-1 flex items-center gap-1 px-2">
        {openWindows.map((window) => (
          <button
            key={window.id}
            onClick={() => onWindowClick(window.id)}
            className={`taskbar-icon px-3 py-1.5 bg-gradient-to-r ${window.isMinimized ? 'from-gray-500 to-gray-400' : 'from-gray-600 to-gray-500'} text-white text-xs rounded-sm border border-gray-400 hover:from-gray-500 hover:to-gray-400`}
            style={{ fontFamily: 'Tahoma, sans-serif' }}
          >
            {window.icon} {window.title}
          </button>
        ))}
      </div>

      {/* Language Switch */}
      <button
        onClick={toggleLanguage}
        className="language-switch bg-gray-700 px-3 py-1.5 border border-gray-600 rounded-sm text-white text-xs font-semibold hover:bg-gray-600 transition-colors mr-1"
        style={{ fontFamily: 'Tahoma, sans-serif' }}
        title={language === 'fr' ? 'Switch to English' : 'Passer en français'}
      >
        {language === 'fr' ? '🇫🇷 FR' : '🇬🇧 EN'}
      </button>

      {/* System Tray (Time) */}
      <div className="system-tray bg-gray-700 px-3 py-1.5 border border-gray-600 rounded-sm text-white text-xs font-semibold" style={{ fontFamily: 'Tahoma, sans-serif' }}>
        {currentTime}
      </div>
    </div>
  )
}

export default Taskbar

