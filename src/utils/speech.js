// // src/utils/speech.js
// export async function playNPCSpeech(text, voiceId = 'JBFqnCBsd6RMkjVDRZzb') {
//   try {
//     const apiKey = import.meta.env.VITE_ELEVENLABS_API_KEY
    
//     if (!apiKey) {
//       console.error('ElevenLabs API key not found')
//       return
//     }

//     console.log('🎤 Requesting speech for:', text.substring(0, 50) + '...')

//     const response = await fetch(
//       `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
//       {
//         method: 'POST',
//         headers: {
//           'Accept': 'audio/mpeg',
//           'Content-Type': 'application/json',
//           'xi-api-key': apiKey
//         },
//         body: JSON.stringify({
//           text,
//           model_id: 'eleven_monolingual_v1',
//           voice_settings: {
//             stability: 0.5,
//             similarity_boost: 0.75
//           }
//         })
//       }
//     )

//     console.log('📡 Response status:', response.status)

//     if (!response.ok) {
//       const errorText = await response.text()
//       console.error('❌ API Error:', errorText)
//       throw new Error('Failed to generate speech')
//     }

//     console.log('✅ Audio received, creating blob...')

//     const audioBlob = await response.blob()
//     console.log('📦 Blob size:', audioBlob.size, 'bytes')
    
//     const audioUrl = URL.createObjectURL(audioBlob)
//     const audio = new Audio(audioUrl)
    
//     console.log('🔊 Playing audio...')
    
//     audio.onended = () => {
//       console.log('✅ Audio finished playing')
//       URL.revokeObjectURL(audioUrl)
//     }
    
//     audio.onerror = (e) => {
//       console.error('❌ Audio playback error:', e)
//     }
    
//     await audio.play()
//     console.log('🎵 Audio started')
    
//   } catch (error) {
//     console.error('💥 Speech error:', error)
//   }
// }




// src/utils/speech.js
// src/utils/speech.js


// src/utils/speech.js
console.log("ENV KEY:", import.meta.env.VITE_ELEVENLABS_API_KEY)

// src/utils/speech.js
import { ElevenLabsClient } from '@elevenlabs/elevenlabs-js'

export async function playNPCSpeech(message, voiceId = 'JBFqnCBsd6RMkjVDRZzb') {
//   const apiKey = import.meta.env.VITE_ELEVENLABS_API_KEY
  const apiKey = "sk_c98ca6677cbedca90b7dd77ee8cb8704833a798cf95ba990"


  console.log("🔑 ElevenLabs key present?", Boolean(apiKey))

  if (!apiKey) throw new Error("Missing VITE_ELEVENLABS_API_KEY")

  const elevenlabs = new ElevenLabsClient({ apiKey })

  const audioStream = await elevenlabs.textToSpeech.convert(voiceId, {
    text: message,
    modelId: 'eleven_multilingual_v2',
    outputFormat: 'mp3_44100_128',
  })

  const reader = audioStream.getReader()
  const chunks = []
  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    chunks.push(value)
  }

  const blob = new Blob(chunks, { type: 'audio/mpeg' })
  if (blob.size === 0) throw new Error("Empty audio blob")

  const url = URL.createObjectURL(blob)
  const audio = new Audio(url)
  audio.volume = 1.0

  // IMPORTANT: resolve when playback finishes
    return new Promise((resolve, reject) => {
    audio.onended = () => {
        URL.revokeObjectURL(url)
        resolve()
    }

    audio.onerror = (e) => {
        URL.revokeObjectURL(url)
        reject(e)
    }

    audio.play()
        .then(() => {
        // started playing successfully
        })
        .catch((e) => {
        URL.revokeObjectURL(url)
        reject(e)
        })
    })
}




// import { ElevenLabsClient } from '@elevenlabs/elevenlabs-js'

// const elevenlabs = new ElevenLabsClient({
//   apiKey: import.meta.env.VITE_ELEVENLABS_API_KEY
// })

// export async function playNPCSpeech(message, voiceId = 'JBFqnCBsd6RMkjVDRZzb') {
//   console.log('🎤 Playing speech for:', message.substring(0, 30) + '...')
  
//   try {
//     const audioStream = await elevenlabs.textToSpeech.convert(
//       voiceId,
//       {
//         text: message,
//         modelId: 'eleven_multilingual_v2',
//         outputFormat: 'mp3_44100_128'
//       }
//     )
    
//     console.log('✅ Audio generated, converting to blob...')
    
//     // Convert stream to blob (same as test-speech)
//     const chunks = []
//     const reader = audioStream.getReader()
    
//     while (true) {
//       const { done, value } = await reader.read()
//       if (done) break
//       chunks.push(value)
//     }
    
//     const blob = new Blob(chunks, { type: 'audio/mpeg' })
//     const url = URL.createObjectURL(blob)
//     const audio = new Audio(url)
//     audio.volume = 1.0
    
//     console.log('🔊 Playing...')
    
//     await audio.play()
    
//     audio.onended = () => {
//       console.log('✅ Finished!')
//       URL.revokeObjectURL(url)
//     }
    
//   } catch (error) {
//     console.error('❌ Error:', error)
//   }
// }










// src/utils/speech.js
// export async function playNPCSpeech(text, voiceId = 'JBFqnCBsd6RMkjVDRZzb') {
//   try {
//     const apiKey = import.meta.env.VITE_ELEVENLABS_API_KEY
    
//     if (!apiKey) {
//       console.error('ElevenLabs API key not found')
//       return
//     }

//     const response = await fetch(
//       `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
//       {
//         method: 'POST',
//         headers: {
//           'Accept': 'audio/mpeg',
//           'Content-Type': 'application/json',
//           'xi-api-key': apiKey
//         },
//         body: JSON.stringify({
//           text,
//           model_id: 'eleven_monolingual_v1',
//           voice_settings: {
//             stability: 0.5,
//             similarity_boost: 0.75
//           }
//         })
//       }
//     )

//     if (!response.ok) {
//       throw new Error('Failed to generate speech')
//     }

//     const audioBlob = await response.blob()
//     const audioUrl = URL.createObjectURL(audioBlob)
//     const audio = new Audio(audioUrl)
    
//     audio.onended = () => {
//       URL.revokeObjectURL(audioUrl)
//     }
    
//     await audio.play()
//   } catch (error) {
//     console.error('Speech error:', error)
//   }
// }

// // src/utils/speech.js
// import { ElevenLabsClient, play } from '@elevenlabs/elevenlabs-js'

// const elevenlabs = new ElevenLabsClient({
//   apiKey: import.meta.env.VITE_ELEVENLABS_API_KEY
// })

// export async function playNPCSpeech(message, voiceId = 'JBFqnCBsd6RMkjVDRZzb') {
//   try {
//     // Check if API key exists
//     if (!import.meta.env.VITE_ELEVENLABS_API_KEY) {
//       console.warn('ElevenLabs API key not found, using browser speech')
//       return playBrowserSpeech(message)
//     }

//     // Generate audio using ElevenLabs
//     const audio = await elevenlabs.textToSpeech.convert(
//       voiceId,
//       {
//         text: message,
//         modelId: 'eleven_multilingual_v2',
//         outputFormat: 'mp3_44100_128'
//       }
//     )

//     // Play the audio
//     await play(audio)
//   } catch (error) {
//     console.error('ElevenLabs error:', error)
//     // Fallback to browser speech
//     return playBrowserSpeech(message)
//   }
// }

// // Fallback to browser's built-in speech synthesis
// function playBrowserSpeech(message) {
//   if (!('speechSynthesis' in window)) {
//     console.warn('Speech synthesis not supported')
//     return Promise.resolve()
//   }

//   window.speechSynthesis.cancel()
  
//   const utterance = new SpeechSynthesisUtterance(message)
//   utterance.rate = 1.0
//   utterance.pitch = 1.0
//   utterance.volume = 1.0

//   const voices = window.speechSynthesis.getVoices()
//   if (voices.length > 0) {
//     const femaleVoice = voices.find(v => 
//       v.name.includes('Female') || 
//       v.name.includes('Samantha') ||
//       v.name.includes('Victoria')
//     )
//     utterance.voice = femaleVoice || voices[0]
//   }

//   window.speechSynthesis.speak(utterance)

//   return new Promise((resolve) => {
//     utterance.onend = resolve
//     utterance.onerror = resolve
//   })
// }