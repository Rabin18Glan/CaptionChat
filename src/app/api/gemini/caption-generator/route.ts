import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
  const { imageBase64, promptText, fileType } = await req.json();

  if (!GEMINI_API_KEY) {
    return NextResponse.json({ error: 'API key not found' }, { status: 500 });
  }

  const client = new GoogleGenerativeAI(GEMINI_API_KEY);
  const contents = [
    {
      role: 'user',
      parts: [
        { inline_data: { mime_type: fileType, data: imageBase64 } },
        { text: promptText },
      ],
    },
  ];

  try {
    const model = client.getGenerativeModel({
      model: 'gemini-1.5-flash',
      safetySettings: [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
        },
      ],
    });

    const result = await model.generateContentStream({ contents });
    let caption = '';
    for await (let response of result.stream) {
      caption += response.text();
    }

    return NextResponse.json({ caption });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Error analyzing image' }, { status: 500 });
  }
}
