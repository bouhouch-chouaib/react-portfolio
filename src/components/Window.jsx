import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';

const Window = ({ id, title, icon, children, onClose, onMinimize, isMinimized, style = 'xp', zIndex = 100 }) => {
  const [isDragging, setIsDragging] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const windowRef = useRef(null);

  // Calculer la position centrée dynamiquement au montage
  useEffect(() => {
    if (windowRef.current) {
      const desktopWidth = window.innerWidth;
      const desktopHeight = window.innerHeight;
      const taskbarHeight = 40; // Hauteur de la barre des tâches

      const actualWindowWidth = windowRef.current.offsetWidth;
      const actualWindowHeight = windowRef.current.offsetHeight;

      // Centrer la fenêtre en se basant sur sa taille réelle
      const centerX = (desktopWidth - actualWindowWidth) / 2;
      const centerY = (desktopHeight - taskbarHeight - actualWindowHeight) / 2;
      
      x.set(Math.max(0, centerX)); // Empêche les positions négatives
      y.set(Math.max(0, centerY));
    }
  }, [x, y]);

  if (isMinimized) {
    return null;
  }

  return (
    <motion.div
      ref={windowRef} // Ajout de la ref pour mesurer l'élément
      drag
      dragMomentum={false}
      dragElastic={0}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      style={{
        position: 'fixed',
        x,
        y,
        zIndex: isDragging ? 1000 : zIndex,
      }}
      dragConstraints={{ 
        left: 0,
        top: 0,
        right: typeof window !== 'undefined' ? window.innerWidth - 400 : 0,
        bottom: typeof window !== 'undefined' ? window.innerHeight - 340 : 0
      }}
      className={`window-container ${style === 'vista' ? 'window-vista' : 'window-xp'} rounded-lg bg-white min-w-[400px] min-h-[300px] max-w-[90vw] max-h-[85vh] flex flex-col shadow-2xl`}
    >
      {/* Title Bar */}
      <div
        className="window-title-bar flex items-center justify-between bg-gradient-to-r from-xp-blue to-xp-light-blue text-white px-3 py-1.5 rounded-t-lg cursor-move select-none"
        style={{ fontFamily: 'Tahoma, sans-serif' }}
      >
        <div className="flex items-center gap-2">
          {icon && <span className="text-lg">{icon}</span>}
          <span className="font-semibold text-sm">{title}</span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={onMinimize}
            className="window-control-btn hover:bg-xp-dark-blue w-6 h-5 flex items-center justify-center text-xs font-bold rounded"
          >
            _
          </button>
          <button
            onClick={onClose}
            className="window-control-btn hover:bg-red-600 w-6 h-5 flex items-center justify-center text-xs font-bold rounded"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Window Content */}
      <div className="window-content flex-1 overflow-auto bg-white rounded-b-lg p-4" style={{ fontFamily: 'Segoe UI, Tahoma, sans-serif' }}>
        {children}
      </div>
    </motion.div>
  )
}

export default Window
