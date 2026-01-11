# Dossier Public

Ce dossier contient les fichiers statiques accessibles publiquement.

## Fichiers requis

### 1. Image de fond d'écran Bliss

**Nom du fichier :** `bliss.jpg` ou `bliss.png`

**Format recommandé :** JPG ou PNG, haute résolution (1920x1080 ou plus)

**Si vous utilisez PNG :** Modifiez le fichier `src/components/Desktop.jsx` et changez la classe `bliss-bg` en `bliss-bg-png`

### 2. CV en français

**Nom du fichier :** `bouhouch_chouaib_IT_CV.pdf`

Ce fichier sera téléchargé lorsque l'utilisateur clique sur "CV (FR)" ou utilise le menu Démarrer en français.

### 3. CV en anglais

**Nom du fichier :** `bouhouch_chouaib_IT_resume.pdf`

Ce fichier sera téléchargé lorsque l'utilisateur clique sur "CV (EN)" ou utilise le menu Démarrer en anglais.

## Alternative avec URL

Si vous préférez utiliser une URL en ligne (ex: depuis un CDN), modifiez `src/index.css` :

```css
.bliss-bg {
  background-image: url('URL_DE_VOTRE_IMAGE');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
```

## Télécharger l'image Bliss originale

Vous pouvez télécharger une version haute résolution de l'image Bliss de Windows XP depuis :
- Des sites de fonds d'écran (WallpapersCraft, etc.)
- Des archives de fonds d'écran Windows
