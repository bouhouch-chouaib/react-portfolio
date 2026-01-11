import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";

const CompetencesWindow = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const competences = {
    [t.languages]: ["React", "Python", "C", "TypeScript", "PHP", "SQL"],
    [t.tools]: ["Git", "Azure", "Docker", "Vite"],
    [t.networksOS]:
      language === "fr"
        ? ["Réseaux", "Systèmes d'exploitation", "Linux", "Windows"]
        : ["Networks", "Operating Systems", "Linux", "Windows"],
  };

  return (
    <div className="competences-window p-6">
      <div className="space-y-6">
        {Object.entries(competences).map(([category, items]) => (
          <div key={category} className="category-section">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-6 bg-xp-blue"></div>
              <h3 className="text-lg font-bold text-gray-800">{category}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="skill-badge px-4 py-2 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-default"
                >
                  <span className="text-sm font-semibold text-gray-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-gray-50 border-2 border-gray-300 rounded">
        <div className="text-xs text-gray-600 mb-2">{t.skillLevel}</div>
        <div className="text-sm text-gray-700">{t.skillDescription}</div>
      </div>
    </div>
  );
};

export default CompetencesWindow;
