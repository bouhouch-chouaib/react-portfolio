import React from 'react'
import Desktop from './components/Desktop'
import { LanguageProvider } from './contexts/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Desktop />
      </div>
    </LanguageProvider>
  )
}

export default App

