// src/test-speech.js
import { ElevenLabsClient } from '@elevenlabs/elevenlabs-js'

const elevenlabs = new ElevenLabsClient({
  apiKey: "sk_c98ca6677cbedca90b7dd77ee8cb8704833a798cf95ba990"
})

export async function testSpeech() {
  console.log('🎤 Testing ElevenLabs...')
  
  try {
    const audioStream = await elevenlabs.textToSpeech.convert(
      'JBFqnCBsd6RMkjVDRZzb',
      {
        text: 'Hello! This is a test from Columbia LionCares.',
        modelId: 'eleven_multilingual_v2',
        outputFormat: 'mp3_44100_128'
      }
    )
    
    console.log('✅ Audio generated, converting to blob...')
    
    // Convert stream to blob
    const chunks = []
    const reader = audioStream.getReader()
    
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      chunks.push(value)
    }
    
    const blob = new Blob(chunks, { type: 'audio/mpeg' })
    console.log('📦 Blob size:', blob.size, 'bytes')
    
    const url = URL.createObjectURL(blob)
    const audio = new Audio(url)
    audio.volume = 1.0
    
    console.log('🔊 Playing...')
    
    await audio.play()
    
    audio.onended = () => {
      console.log('✅ Finished!')
      URL.revokeObjectURL(url)
    }
    
  } catch (error) {
    console.error('❌ Error:', error)
  }
}