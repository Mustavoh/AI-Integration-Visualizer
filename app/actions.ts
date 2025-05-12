"use server"

import { generateText } from "ai"
import { groq } from "@ai-sdk/groq"

export async function getAIResponse(prompt: string) {
  try {
    const { text } = await generateText({
      model: groq("meta-llama/llama-4-maverick-17b-128e-instruct"),
      prompt,
      maxTokens: 10, // Limit tokens since we only need a short response
    })

    return { text }
  } catch (error) {
    console.error("Server error:", error)
    return { error: "Error connecting to AI. Please try again." }
  }
}
