// src/utils/featherlessIntro.js

export async function generateWhimsicalIntro() {
  // For dev/testing you can temporarily hardcode the key, but env is better:
  const apiKey = "rc_45bba4ac2607bc192aad5012f8d52e90beea8f4eea428c30680bdba60e903510"
  if (!apiKey) {
    throw new Error("Missing VITE_FEATHERLESS_API_KEY")
  }

  const url = "https://api.featherless.ai/v1/chat/completions"

  const system = `
You write whimsical, warm, and inspiring intros for a pixel-art campus adventure game set at Columbia.
The player becomes a hero by helping clubs, students, and community members.
Tone: magical realism, hopeful, cozy, adventurous.
Length: 1-2 sentences.
Second person ("you").
End with an invitation to explore campus and help others.
Return ONLY the intro text (no quotes, no title).
  `.trim()

  const user = "Generate the intro now."

  const body = {
    // IMPORTANT: use a real model id (not "featherless-large")
    model: "Qwen/Qwen2.5-7B-Instruct",
    messages: [
      { role: "system", content: system },
      { role: "user", content: user }
    ],
    max_tokens: 50,
    temperature: 0.85
  }

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })

  const raw = await res.text()
  if (!res.ok) {
    // This will show you the real reason (401/403/404/etc)
    throw new Error(`Featherless ${res.status}: ${raw}`)
  }

  const data = JSON.parse(raw)
  const intro = data?.choices?.[0]?.message?.content?.trim()

  if (!intro) {
    throw new Error(`Unexpected response shape: ${raw}`)
  }

  return intro
}
