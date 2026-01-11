# Portfolio OS - Interface Windows XP/Vista

Portfolio interactif mimant un système d'exploitation Windows XP/Vista pour un étudiant en BUT Informatique.

## 🚀 Technologies utilisées

- **React** - Framework JavaScript
- **Tailwind CSS** - Framework CSS
- **Framer Motion** - Animations et drag & drop
- **Vite** - Build tool

## 📦 Installation

```bash
npm install
```

## 🏃 Démarrage

```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

## 🎨 Fonctionnalités

### Interface Desktop
- Fond d'écran style "Bliss" (XP)
- Icônes de bureau cliquables
- Barre des tâches avec bouton Démarrer
- Menu Démarrer avec toutes les sections

### Fenêtres
Toutes les fenêtres sont :
- **Déplaçables** (drag & drop)
- **Réductibles** (minimize)
- **Fermables** (close)

### Sections disponibles

1. **👤 Moi** - Informations de contact et liens LinkedIn/GitHub
2. **📝 About me** - Présentation dans un style "Bloc-notes"
3. **📁 Projets** - Liste des projets avec détails (style Explorateur Windows)
4. **⚙️ Compétences et Outils** - Skills organisées par catégories
5. **🎓 Education** - Formation et certifications
6. **✉️ Contact** - Formulaire de contact style boîte de dialogue

## 📝 Personnalisation

### Modifier les informations de contact
Éditez le fichier `src/components/windows/MoiWindow.jsx`

### Ajouter un CV PDF
Placez votre fichier `CV.pdf` dans le dossier `public/` et modifiez la fonction `handleDownloadCV` dans `src/components/Desktop.jsx`

### Personnaliser les projets
Éditez le tableau `projects` dans `src/components/windows/ProjetsWindow.jsx`

## 🎯 Structure du projet

```
src/
├── components/
│   ├── Desktop.jsx          # Composant principal
│   ├── Window.jsx           # Composant fenêtre réutilisable
│   ├── DesktopIcon.jsx      # Icône du bureau
│   ├── Taskbar.jsx          # Barre des tâches
│   └── windows/
│       ├── MoiWindow.jsx
│       ├── AboutWindow.jsx
│       ├── ProjetsWindow.jsx
│       ├── CompetencesWindow.jsx
│       ├── EducationWindow.jsx
│       └── ContactWindow.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## 🔨 Build

```bash
npm run build
```

## 📄 License

MIT

