import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";

const MoiWindow = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="moi-window p-6">
      <div className="text-center mb-6">
        <div className="text-6xl mb-4">👤</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {t.contactInfo}
        </h2>
      </div>

      <div className="space-y-4">
        <div className="contact-item p-3 bg-gray-50 rounded border border-gray-200">
          <div className="font-semibold text-gray-700 mb-1">{t.email}</div>
          <div className="text-gray-600">bouhouch.chouaib.57@gmail.com</div>
        </div>

        <div className="contact-item p-3 bg-gray-50 rounded border border-gray-200">
          <div className="font-semibold text-gray-700 mb-1">{t.phone}</div>
          <div className="text-gray-600">+33 7 49 03 41 11</div>
        </div>

        <div className="contact-item p-3 bg-gray-50 rounded border border-gray-200">
          <div className="font-semibold text-gray-700 mb-1">{t.location}</div>
          <div className="text-gray-600">Metz, France</div>
        </div>

        <div className="flex gap-4 mt-6 justify-center">
          <a
            href="https://www.linkedin.com/in/chouaib-bouhouch-b93330319/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors font-semibold flex items-center gap-2"
          >
            <span>💼</span>
            LinkedIn
          </a>
          <a
            href="https://github.com/bouhouch-chouaib"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link px-6 py-3 bg-gray-800 text-white rounded hover:bg-gray-900 transition-colors font-semibold flex items-center gap-2"
          >
            <span>🐙</span>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default MoiWindow;
