import React, { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { translations } from '../../translations/translations'

const ContactWindow = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Ici, vous pourriez ajouter la logique pour envoyer l'email
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <div className="contact-window p-6">
      <div className="dialog-style max-w-md mx-auto">
        <div className="bg-gradient-to-r from-blue-50 to-gray-50 border-2 border-gray-400 rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">{t.sendMessage}</h2>
          
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-2">✅</div>
              <div className="text-green-600 font-semibold">{t.messageSent}</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">{t.name} :</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:border-blue-500 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">{t.email} :</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:border-blue-500 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">{t.subject} :</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:border-blue-500 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">{t.message} :</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:border-blue-500 focus:outline-none resize-none"
                ></textarea>
              </div>
              
              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors"
                >
                  {t.send}
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ name: '', email: '', subject: '', message: '' })}
                  className="px-6 py-2 bg-gray-400 text-white font-semibold rounded hover:bg-gray-500 transition-colors"
                >
                  {t.cancel}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default ContactWindow

