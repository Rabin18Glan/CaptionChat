
import { ImageAnalysis } from '@/AIModels/GeminiGenerativeModel';
import { NextRequest, NextResponse } from 'next/server';
import { generateContentStream } from './utils/generateContentStream';


interface RequestBody {
  imageBase64: string;
  promptText: string;
  fileType: string;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { imageBase64, promptText, fileType }: RequestBody = await req.json();
    const imagePart = {
      inlineData: {
        mimeType: fileType,
        data: imageBase64,
      },
    };

    const caption = await generateContentStream(ImageAnalysis, { imagePart, promptText });

    return NextResponse.json({ caption });
  } catch (error: unknown) {
    console.error('Error:', error);

    if (error instanceof Error) {
      return NextResponse.json({
         error: 'Error analyzing image',
          details: error.message },
           { status: 500 });
    } 
    else {
      return NextResponse.json({
         error: 'An unexpected error occurred' },
         { status: 500 });
    }
  }
}