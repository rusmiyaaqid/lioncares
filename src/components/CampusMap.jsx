import { useState, useEffect } from 'react'
import { MapPin, Users } from 'lucide-react'
import { clubs } from '../data/clubs'
import { npcs } from '../data/npcs'  // If you made a new file
import { playNPCSpeech } from '../utils/speech'  // ADD THIS LINE
import { testSpeech } from '../test-speech'
import { generateWhimsicalIntro } from "../utils/featherlessIntro"




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
  const [showWelcome, setShowWelcome] = useState(true)  // ← ADD THIS LINE
  const [selectedNPC, setSelectedNPC] = useState(null)
  const [isSpeaking, setIsSpeaking] = useState(false)  // ADD THIS LINE
  const [introText, setIntroText] = useState("")
  const [introLoading, setIntroLoading] = useState(false)
  


  const [xp, setXp] = useState(0)



  const [playerPosition, setPlayerPosition] = useState({ 
    x: 2430,
    y:1650 
  })
  const [cameraPosition, setCameraPosition] = useState({ x: 500, y: 300 })
  const handleNPCClick = async (npc) => {
    setSelectedNPC(npc)
    setIsSpeaking(true)
    
    try {
      await playNPCSpeech(npc.message, npc.voiceId)
    } finally {
      setIsSpeaking(false)
    }
  }

  
useEffect(() => {
  if (!showWelcome) return

  setIntroLoading(true)

  generateWhimsicalIntro()
    .then((text) => setIntroText(text))
    .catch((e) => {
      console.error("Intro gen failed:", e)
      setIntroText("You step onto campus with a quiet feeling that today matters. Someone out there needs you—and you’re ready.")
    })
    .finally(() => setIntroLoading(false))
}, [showWelcome])





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
       {showWelcome && (
        <div className="lightbox">
          <div className="iframeContainer" style={{ maxWidth: '600px', padding: '20px', background: '#fff' }}>
            <button 
              onClick={() => setShowWelcome(false)}
              style={{
                position: 'relative',
                left: '240px',
                color: 'red',
                border: 'none',
                cursor: 'pointer',
                fontSize: '20px',
                fontWeight: 'bold',
                borderRadius: '5px',
                alignItems: 'right',
                justifyContent: 'right',
                background: 'None'
              }}
            > x
            </button>
            <h1 style={{ fontSize: '24px', marginBottom: '20px', textAlign: 'center', fontWeight: 'bold' }}>
              Welcome to LionCares
            </h1>
            
            {/* <p style={{ marginBottom: '20px', textAlign: 'center' }}>
              Columbia needs your help right now!
            </p> */}
            <p style={{ marginBottom: '20px', textAlign: 'center', fontStyle: 'italic' }}>
              {introLoading ? "✨ Spinning up a little magic..." : (introText || "You step onto campus with a quiet feeling that today matters.")}
            </p>
            
            <div style={{ background: 'rgba(199, 206, 194, 1)', padding: '15px', marginBottom: '20px' }}>
              <h2 style={{ fontSize: '18px', color: 'rgba(0, 0, 0, 1)', marginBottom: '15px', fontWeight: 'bold' }}>
                Urgent Needs at Columbia:
              </h2>
              
              {clubs.filter(club => club.volunteersNeeded > 0).length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {clubs.filter(club => club.volunteersNeeded > 0).map(club => (
                    <div key={club.id} style={{ background: 'white', padding: '12px' }}>
                      <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>{club.name}</div>
                      <div style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>
                        {club.cause} at {club.location}
                      </div>
                      <div style={{ 
                        background: 'rgba(91, 135, 89, 1)', 
                        color: 'white', 
                        padding: '5px 10px', 
                        display: 'inline-block',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        opacity: 0.8,
    
                      }}>
                        {club.volunteersNeeded} needed
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p style={{ textAlign: 'center', padding: '20px' }}>
                  All clubs fully staffed!
                </p>
              )}
            </div>
            
            <p style={{ fontSize: '14px', textAlign: 'center', marginBottom: '15px' }}>
              Use <strong>WASD</strong> or <strong>Arrow Keys</strong> to explore campus!
            </p>
            
          </div>
        </div>
      )}

      
      {/* Controls display */}
      <div className="absolute top-4 right-4 bg-amber-50 px-4 py-2 rounded-lg border-4 border-amber-900 z-50 shadow-lg">
        <p className="text-sm font-bold text-amber-900">WASD or ↑↓←→ to Move</p>
      </div>
      {/* TEST BUTTON - ADD THIS */}
<div className="absolute top-16 right-4 z-50">
  <button 
    onClick={() => testSpeech()}
    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 font-bold shadow-lg border-4 border-red-800"
  >
    🎤 Test Speech
  </button>
</div>

<button 
  onClick={() => {
    const beep = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBCeH0fPTgjMGHm7A7+OZTRALT6zn77BdGAg+ldb0yHsrBSl+zPLaizsKGGS57OihUhELTKXi8bllHAU2jdXzzn0vBSd6y/DajUALFmS37OagUhELTKXi8bllHAU2jdXzzn0vBSd6y/DajUALFmS37OagUhELTKXi8bllHAU2jdXzzn0vBSd6y/DajUAL')
    beep.play()
    console.log('Playing beep...')
  }}
  className="bg-green-500 text-white px-4 py-2 rounded-lg"
>
  🔔 Test Beep
</button>

      {/* Online players counter */}
      {/* Profile Card - Top Left */}
<div className="lightbox2">
  <div className="flex items-center gap-3">
    {/* Profile Icon */}
    <div className="w-12 h-12 bg-blue-500 rounded-full border-3 border-blue-800 flex items-center justify-center text-white font-bold text-xl">
      👤
    </div>
    
    {/* Info */}
    <div className="flex flex-col gap-1">
      <span className="pixel-font text-blue-700 text-xs">You</span>
      <div className="flex items-center gap-1">
        <span className="text-sm">⭐</span>
        <span className="pixel-font text-blue-600 text-xs">{xp} XP</span>
      </div>
      <div className="flex items-center gap-1">
        <Users className="w-3 h-3 text-green-600" />
        <span className="pixel-font text-green-600 text-xs">7 online</span>
      </div>
    </div>
  </div>
</div>

      {/* XP counter - NEW */}
        <div className="absolute top-20 left-4 bg-amber-50 px-4 py-3 rounded-lg shadow-lg z-50 border-4 border-amber-900">
        <div className="flex items-center gap-2">
            <span className="text-2xl">⭐</span>
            <span className="pixel-font text-blue-600">{xp} XP</span>
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
                className="hover:scale-110 transition-transform cursor-pointer"
                aria-label={`View ${club.name}`}
            >
                <MapPin className="w-10 h-10 text-red-600 fill-red-600 drop-shadow-lg" 
                style={{ imageRendering: 'pixelated' }} 
                />
                {/* This text is now clickable because it's inside the button */}
                <div className="bg-amber-50 px-2 py-1 rounded border-2 border-amber-900 text-xs font-bold shadow-md mt-1 max-w-[200px] hover:bg-amber-100">
                {club.cause} at {club.location}
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
        {/* NPC Students - ADD THIS */}
        {npcs.map(npc => (
        <div
            key={`npc-${npc.id}`}
            style={{
            position: 'absolute',
            left: `${npc.x}%`,
            top: `${npc.y}%`,
            transform: 'translate(-50%, -50%)',
            zIndex: 25,
            cursor: 'pointer'
            }}
            onClick={() => handleNPCClick(npc)}  // CHANGED

            // onClick={() => setSelectedNPC(npc)}
        >
            <PixelSprite direction={npc.direction} />
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white text-xs px-2 py-0.5 rounded whitespace-nowrap">
            {npc.name}
            {/* ADD THESE LINES */}
            {selectedNPC?.id === npc.id && isSpeaking && (
              <span className="ml-1 animate-pulse">🔊</span>
            )}
            </div>
        </div>
        ))}
        {/* // Add NPC dialogue modal (put this right after your club modal): */}
        {selectedNPC && (
        <div 
            className="lightbox2"
            onClick={() => setSelectedNPC(null)}
        >
            <div 
            className="bg-amber-50 p-6 rounded-lg border-8 border-amber-900 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            >
            <div className="flex items-center gap-3 mb-4">
                <div style={{ transform: 'scale(0.5)', transformOrigin: 'left' }}>
                <PixelSprite direction={selectedNPC.direction} />
                </div>
                <h2 className="text-xl font-bold text-amber-900">{selectedNPC.name}</h2>
                {/* ADD THESE LINES */}
                {isSpeaking && (
                  <span className="text-xs text-green-600 animate-pulse">
                    Speaking...
                  </span>
                )}
            </div>
            
            <p className="text-amber-900 mb-6 italic">"{selectedNPC.message}"</p>
            {/* ADD THIS ENTIRE BUTTON */}
            <button
              onClick={() => playNPCSpeech(selectedNPC.message, selectedNPC.voiceId)}
              className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 font-bold shadow-lg border-4 border-green-800 transition-colors mb-3"
            >
              Play Again
            </button>
            <button 
                onClick={() => setSelectedNPC(null)}
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 font-bold shadow-lg border-4 border-blue-800 transition-colors"
            >
                Thanks!
            </button>
            </div>
        </div>
        )}

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
          className="lightbox3"
        //   style={{ zIndex: 9999 }}

          onClick={() => setSelectedClub(null)}
        >
          <div 
            className="bg-amber-50 p-8 rounded-lg border-8 border-amber-900 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-2 text-amber-900">{selectedClub.name}</h2>
            <p className="text-sm text-amber-700 mb-4">📍 {selectedClub.location}</p>
            <p className="mb-6 text-amber-900">{selectedClub.description}</p>
            
            {selectedClub.volunteersNeeded > 0 && selectedClub.donationGoal > 0 &&(
              <div className="bg-red-100 border-2 border-red-600 rounded p-3 mb-4">
                <p className="font-bold text-red-700">
                  Need {selectedClub.volunteersNeeded} volunteer{selectedClub.volunteersNeeded !== 1 ? 's' : ''}! Please donate to hit the donation goal of ${selectedClub.donationGoal}, we are currently at ${selectedClub.donationCurrent}
                </p>
              </div>
            )}
            <button 
                onClick={() => {
                // Add registration logic here
                setXp(xp + 5)
                alert(`You're registering to help with ${selectedClub.name}! The organizer appreciates your kindness <3`)
 
                // You can later replace this with actual registration logic
                }}
                className="w-full bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 font-bold shadow-lg border-4 border-green-800 transition-colors mb-3"
            >
                Register to Help!
            </button>
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