import { ChatBot } from '@/AIModels/GeminiGenerativeModel';
import { NextRequest, NextResponse } from 'next/server';
import { generateReply } from './utils/generateReply';

export async function POST(req: NextRequest) {
  const { promptText } = await req.json();
  try {
    const answer = await generateReply(ChatBot, promptText)
    return NextResponse.json({
      answer
    }, {
      status: 200
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({
      error:'Error generating response'
    }, { status: 500 });
  }
}
