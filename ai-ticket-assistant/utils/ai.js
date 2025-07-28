import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function analyzeTicket(ticket) {
  const prompt = `
    You are an AI assistant that cleans and formats user-submitted support tickets.
    Given a Title and Description, return a cleaned version in JSON format only.
    No explanations, just valid JSON.

    Input:
    Title: ${ticket.title}
    Description: ${ticket.description}

    Respond in JSON:
    {
      "title": "<cleaned title>",
      "description": "<cleaned description>"
    }
  `;

  try {
    const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent([prompt]);
    const response = await result.response;
    const text = await response.text();

    console.log("AI Raw Response:", text);

    // Try to safely parse JSON from AI response
    const firstBrace = text.indexOf('{');
    const lastBrace = text.lastIndexOf('}');
    const jsonString = text.slice(firstBrace, lastBrace + 1);

    const cleanedData = JSON.parse(jsonString);

    console.log("Cleaned JSON:", cleanedData);

    return cleanedData;
  } catch (error) {
    console.error("AI Analysis Error:", error.message);
    throw error;
  }
}
