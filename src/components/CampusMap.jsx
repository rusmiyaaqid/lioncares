import { useState, useEffect } from 'react'
import { MapPin, Users } from 'lucide-react'
import { clubs } from '../data/clubs'

// Isometric Pixel Art Female Student Sprite Component
function PixelSprite({ direction }) {
  const sprites = {
    down: (
      <svg width="128" height="128" viewBox="0 0 20 24" style={{ imageRendering: 'pixelated' }}>
        {/* Hair - top-down view with volume */}
        <rect x="7" y="2" width="6" height="2" fill="#3d2817" />
        <rect x="6" y="3" width="8" height="3" fill="#3d2817" />
        <rect x="5" y="5" width="10" height="2" fill="#3d2817" />
        
        {/* Head/Face - lighter at top */}
        <rect x="8" y="4" width="4" height="3" fill="#f5d0a9" />
        
        {/* Eyes - small dots */}
        <rect x="8" y="5" width="1" height="1" fill="#000" />
        <rect x="11" y="5" width="1" height="1" fill="#000" />
        
        {/* Shoulders/Body - Columbia blue */}
        <rect x="6" y="7" width="8" height="2" fill="#75aadb" />
        <rect x="5" y="9" width="10" height="3" fill="#75aadb" />
        
        {/* White collar detail */}
        <rect x="8" y="7" width="4" height="1" fill="#e8f4f8" />
        
        {/* Arms visible */}
        <rect x="4" y="9" width="2" height="2" fill="#f5d0a9" />
        <rect x="14" y="9" width="2" height="2" fill="#f5d0a9" />
        
        {/* Skirt - navy with shading */}
        <rect x="6" y="12" width="8" height="3" fill="#1a365d" />
        <rect x="7" y="12" width="2" height="3" fill="#2c5282" />
        <rect x="11" y="12" width="2" height="3" fill="#2c5282" />
        
        {/* Legs - shorter, top-down view */}
        <rect x="7" y="15" width="2" height="3" fill="#f5d0a9" />
        <rect x="11" y="15" width="2" height="3" fill="#f5d0a9" />
        
        {/* Shoes */}
        <rect x="7" y="18" width="2" height="2" fill="#1a1a1a" />
        <rect x="11" y="18" width="2" height="2" fill="#1a1a1a" />
      </svg>
    ),
    up: (
      <svg width="128" height="128" viewBox="0 0 20 24" style={{ imageRendering: 'pixelated' }}>
        {/* Hair - back of head, fuller */}
        <rect x="6" y="2" width="8" height="4" fill="#3d2817" />
        <rect x="5" y="4" width="10" height="3" fill="#3d2817" />
        
        {/* Head - smaller from back */}
        <rect x="8" y="5" width="4" height="2" fill="#f5d0a9" />
        
        {/* Shoulders/Body */}
        <rect x="6" y="7" width="8" height="2" fill="#75aadb" />
        <rect x="5" y="9" width="10" height="3" fill="#75aadb" />
        
        {/* Arms */}
        <rect x="4" y="9" width="2" height="2" fill="#f5d0a9" />
        <rect x="14" y="9" width="2" height="2" fill="#f5d0a9" />
        
        {/* Skirt */}
        <rect x="6" y="12" width="8" height="3" fill="#1a365d" />
        <rect x="7" y="12" width="2" height="3" fill="#2c5282" />
        <rect x="11" y="12" width="2" height="3" fill="#2c5282" />
        
        {/* Legs */}
        <rect x="7" y="15" width="2" height="3" fill="#f5d0a9" />
        <rect x="11" y="15" width="2" height="3" fill="#f5d0a9" />
        
        {/* Shoes */}
        <rect x="7" y="18" width="2" height="2" fill="#1a1a1a" />
        <rect x="11" y="18" width="2" height="2" fill="#1a1a1a" />
      </svg>
    ),
    left: (
      <svg width="128" height="128" viewBox="0 0 20 24" style={{ imageRendering: 'pixelated' }}>
        {/* Hair - side profile with flow */}
        <rect x="8" y="2" width="6" height="2" fill="#3d2817" />
        <rect x="7" y="3" width="7" height="3" fill="#3d2817" />
        <rect x="6" y="5" width="6" height="2" fill="#3d2817" />
        
        {/* Head */}
        <rect x="9" y="4" width="4" height="3" fill="#f5d0a9" />
        
        {/* Eye */}
        <rect x="9" y="5" width="1" height="1" fill="#000" />
        
        {/* Body - angled */}
        <rect x="7" y="7" width="7" height="2" fill="#75aadb" />
        <rect x="6" y="9" width="8" height="3" fill="#75aadb" />
        
        {/* Collar */}
        <rect x="10" y="7" width="3" height="1" fill="#e8f4f8" />
        
        {/* Visible arm */}
        <rect x="5" y="9" width="2" height="2" fill="#f5d0a9" />
        
        {/* Skirt */}
        <rect x="7" y="12" width="7" height="3" fill="#1a365d" />
        <rect x="8" y="12" width="2" height="3" fill="#2c5282" />
        
        {/* Legs */}
        <rect x="8" y="15" width="2" height="3" fill="#f5d0a9" />
        <rect x="11" y="15" width="2" height="3" fill="#f5d0a9" />
        
        {/* Shoes */}
        <rect x="8" y="18" width="2" height="2" fill="#1a1a1a" />
        <rect x="11" y="18" width="2" height="2" fill="#1a1a1a" />
      </svg>
    ),
    right: (
      <svg width="128" height="128" viewBox="0 0 20 24" style={{ imageRendering: 'pixelated' }}>
        {/* Hair - side profile with flow */}
        <rect x="6" y="2" width="6" height="2" fill="#3d2817" />
        <rect x="6" y="3" width="7" height="3" fill="#3d2817" />
        <rect x="8" y="5" width="6" height="2" fill="#3d2817" />
        
        {/* Head */}
        <rect x="7" y="4" width="4" height="3" fill="#f5d0a9" />
        
        {/* Eye */}
        <rect x="10" y="5" width="1" height="1" fill="#000" />
        
        {/* Body - angled */}
        <rect x="6" y="7" width="7" height="2" fill="#75aadb" />
        <rect x="6" y="9" width="8" height="3" fill="#75aadb" />
        
        {/* Collar */}
        <rect x="7" y="7" width="3" height="1" fill="#e8f4f8" />
        
        {/* Visible arm */}
        <rect x="13" y="9" width="2" height="2" fill="#f5d0a9" />
        
        {/* Skirt */}
        <rect x="6" y="12" width="7" height="3" fill="#1a365d" />
        <rect x="10" y="12" width="2" height="3" fill="#2c5282" />
        
        {/* Legs */}
        <rect x="7" y="15" width="2" height="3" fill="#f5d0a9" />
        <rect x="10" y="15" width="2" height="3" fill="#f5d0a9" />
        
        {/* Shoes */}
        <rect x="7" y="18" width="2" height="2" fill="#1a1a1a" />
        <rect x="10" y="18" width="2" height="2" fill="#1a1a1a" />
      </svg>
    )
  }

  return (
    <div style={{ 
      width: '128px', 
      height: '128px',
      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
    }}>
      {sprites[direction]}
    </div>
  )
}

function CampusMap() {
  const [playerDirection, setPlayerDirection] = useState('down')
  const [selectedClub, setSelectedClub] = useState(null)
  const [playerPosition, setPlayerPosition] = useState({ 
    x: 2430,
    y:1650 
  })
  const [cameraPosition, setCameraPosition] = useState({ x: 500, y: 300 })

  useEffect(() => {
    const keys = {}
    
    const handleKeyDown = (e) => {
      // Only prevent default for movement keys
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'w', 'a', 's', 'd', 'W', 'A', 'S', 'D'].includes(e.key)) {
        e.preventDefault()
        keys[e.key] = true
      }
    }
    
    const handleKeyUp = (e) => {
      keys[e.key] = false
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    const gameLoop = setInterval(() => {
      setPlayerPosition(prev => {
        let dx = 0
        let dy = 0
        const speed = 5

        // Calculate movement direction
        if (keys['ArrowLeft'] || keys['a'] || keys['A']) {
          dx -= 1
        }
        if (keys['ArrowRight'] || keys['d'] || keys['D']) {
          dx += 1
        }
        if (keys['ArrowUp'] || keys['w'] || keys['W']) {
          dy -= 1
        }
        if (keys['ArrowDown'] || keys['s'] || keys['S']) {
          dy += 1
        }

        // Normalize diagonal movement (so you don't move faster diagonally)
        if (dx !== 0 && dy !== 0) {
          dx *= 0.707  // 1/√2 ≈ 0.707
          dy *= 0.707
        }

        // Update direction for sprite (prioritize last key pressed)
        if (dx < 0) setPlayerDirection('left')
        else if (dx > 0) setPlayerDirection('right')
        else if (dy < 0) setPlayerDirection('up')
        else if (dy > 0) setPlayerDirection('down')

        const newX = prev.x + dx * speed
        const newY = prev.y + dy * speed

        // Update camera to follow player
        setCameraPosition({
          x: newX - window.innerWidth / 2,
          y: newY - window.innerHeight / 2
        })

        return { x: newX, y: newY }
      })
    }, 16) // ~60 FPS

    return () => {
      clearInterval(gameLoop)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Controls display */}
      <div className="absolute top-4 right-4 bg-amber-50 px-4 py-2 rounded-lg border-4 border-amber-900 z-50 shadow-lg">
        <p className="text-sm font-bold text-amber-900">WASD or ↑↓←→ to Move</p>
      </div>

      {/* Online players counter */}
      <div className="absolute top-4 left-4 bg-amber-50 px-4 py-3 rounded-lg shadow-lg z-50 border-4 border-amber-900">
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-green-600" />
          <span className="font-bold text-green-600">7 online</span>
        </div>
      </div>

      {/* Game world */}
      <div 
        style={{
          position: 'absolute',
          width: '200vw',
          height: '200vh',
          transform: `translate(${-cameraPosition.x}px, ${-cameraPosition.y}px)`,
          transition: 'transform 0.05s linear',
          willChange: 'transform'
        }}
      >
        {/* Map background */}
        <img 
          src="/pixel_1_columbia.png" 
          alt="Columbia Campus"
          className="w-full h-full object-cover"
          style={{
            transform: 'scale(1.5)',
            imageRendering: 'pixelated'
          }}
        />
        
        {/* Club markers */}
        {clubs.map(club => (
          <button
            key={club.id}
            onClick={() => setSelectedClub(club)}
            style={{ 
              position: 'absolute',
              left: `${club.x}%`, 
              top: `${club.y}%`,
              transform: 'translate(-50%, -100%)',
              zIndex: 20
            }}
            className="hover:scale-125 transition-transform cursor-pointer"
            aria-label={`View ${club.name}`}
          >
            <MapPin className="w-10 h-10 text-red-600 fill-red-600 drop-shadow-lg" 
              style={{ imageRendering: 'pixelated' }} 
            />
            <div className="bg-amber-50 px-2 py-1 rounded border-2 border-amber-900 text-xs font-bold shadow-md mt-1 whitespace-nowrap">
              {club.name}
            </div>
            {club.volunteersNeeded > 0 && (
              <div 
                style={{ 
                  position: 'absolute', 
                  top: '-8px', 
                  right: '-8px' 
                }} 
                className="bg-red-600 text-white text-xs px-2 py-1 rounded-full border-2 border-white shadow-lg font-bold"
              >
                {club.volunteersNeeded}
              </div>
            )}
          </button>
        ))}

        {/* Player character */}
        <div 
          style={{
            position: 'absolute',
            left: `${playerPosition.x}px`,
            top: `${playerPosition.y}px`,
            transform: 'translate(-50%, -50%)',
            zIndex: 30
          }}
        >
          <PixelSprite direction={playerDirection} />
        </div>
      </div>

      {/* Club detail modal */}
      {selectedClub && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedClub(null)}
        >
          <div 
            className="bg-amber-50 p-8 rounded-lg border-8 border-amber-900 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-2 text-amber-900">{selectedClub.name}</h2>
            <p className="text-sm text-amber-700 mb-4">📍 {selectedClub.location}</p>
            <p className="mb-6 text-amber-900">{selectedClub.description}</p>
            
            {selectedClub.volunteersNeeded > 0 && (
              <div className="bg-red-100 border-2 border-red-600 rounded p-3 mb-4">
                <p className="font-bold text-red-700">
                  Need {selectedClub.volunteersNeeded} volunteer{selectedClub.volunteersNeeded !== 1 ? 's' : ''}!
                </p>
              </div>
            )}
            
            <button 
              onClick={() => setSelectedClub(null)}
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 font-bold shadow-lg border-4 border-blue-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CampusMap