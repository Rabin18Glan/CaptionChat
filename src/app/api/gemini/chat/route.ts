import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req: NextRequest) {
  const { promptText } = await req.json();
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

  if (!GEMINI_API_KEY) {
    return NextResponse.json({ error: 'API key not found' }, { status: 500 });
  }

  try {
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const result = await model.generateContent(promptText);
    const response = await result.response.text();

    return NextResponse.json({ answer: response });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Error generating response' }, { status: 500 });
  }
}
