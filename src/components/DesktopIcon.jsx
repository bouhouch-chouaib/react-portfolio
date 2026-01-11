import React from 'react'

const DesktopIcon = ({ icon, label, onClick, position = { x: 20, y: 20 } }) => {
  return (
    <div
      onClick={onClick}
      onDoubleClick={onClick}
      className="desktop-icon flex flex-col items-center w-20 cursor-pointer select-none hover:bg-blue-500 hover:bg-opacity-20 rounded p-2 transition-colors"
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div className="text-5xl mb-1">{icon}</div>
      <span className="text-white text-xs text-center font-semibold drop-shadow-md" style={{ fontFamily: 'Tahoma, sans-serif' }}>
        {label}
      </span>
    </div>
  )
}

export default DesktopIcon

