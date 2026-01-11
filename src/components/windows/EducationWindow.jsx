import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { translations } from '../../translations/translations'

const EducationWindow = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const education = [
    {
      title: 'BUT Informatique',
      institution: 'IUT Lorraine',
      period: t.inProgress,
      description: t.butInfo,
      icon: '🎓'
    },
    {
      title: 'Elements of AI',
      institution: 'University of Helsinki',
      period: t.obtained,
      description: t.aiCert,
      icon: '🤖'
    },
    {
      title: language === 'fr' ? 'Baccalauréat' : 'Baccalaureate',
      institution: language === 'fr' ? 'Spécialités : Mathématiques / Physique' : 'Specializations: Mathematics / Physics',
      period: t.graduated,
      description: t.baccalaureate,
      icon: '📚'
    }
  ]

  const certifications = [
    {
      name: t.toeicToefl,
      level: t.toeicToeflLevel,
      description: t.toeicToeflDesc
    }
  ]

  return (
    <div className="education-window p-6">
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="education-item border-2 border-gray-300 rounded-lg p-4 bg-gradient-to-br from-white to-gray-50 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="text-4xl">{edu.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-bold text-gray-800">{edu.title}</h3>
                  <span className="text-xs px-2 py-0.5 bg-blue-200 text-blue-800 rounded">{edu.period}</span>
                </div>
                <div className="text-sm font-semibold text-gray-600 mb-2">{edu.institution}</div>
                <div className="text-sm text-gray-700">{edu.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
        <div className="text-sm font-bold text-gray-800 mb-2">🌐 {t.linguisticCerts}</div>
        {certifications.map((cert, index) => (
          <div key={index} className="text-sm text-gray-700">
            <span className="font-semibold">{cert.name}:</span> {cert.level} - {cert.description}
          </div>
        ))}
      </div>
    </div>
  )
}

export default EducationWindow
