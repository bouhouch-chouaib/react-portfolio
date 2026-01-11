import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";

const AboutWindow = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="about-window p-6">
      <div className="notepad-style bg-yellow-50 border-2 border-gray-300 p-4 min-h-[400px] max-h-[600px] overflow-y-auto">
        <div className="font-mono text-sm text-gray-800 leading-relaxed whitespace-pre-wrap">
          <div className="text-xs text-gray-500 mb-4">
            {language === "fr"
              ? "Bloc-notes - À propos de moi.txt"
              : "Notepad - About me.txt"}
          </div>
          <div className="font-serif text-sm leading-7">{t.aboutText}</div>
        </div>
      </div>
    </div>
  );
};

export default AboutWindow;
