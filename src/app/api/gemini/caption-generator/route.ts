
import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

// Type definitions
type SafetySetting = {
  category: HarmCategory;
  threshold: HarmBlockThreshold;
};

interface RequestBody {
  imageBase64: string;
  promptText: string;
  fileType: string;
}

interface GenerateContentStreamProps {
  imagePart: {
    inlineData: {
      mimeType: string;
      data: string;
    };
  };
  promptText: string;
}


const GEMINI_MODEL = 'gemini-1.5-flash';
const SAFETY_SETTINGS: SafetySetting[] = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
  },
];


const createGeminiClient = (apiKey: string): GoogleGenerativeAI => {
  return new GoogleGenerativeAI(apiKey);
};

const getGenerativeModel = (client: GoogleGenerativeAI) => {
  return client.getGenerativeModel({
    model: GEMINI_MODEL,
    safetySettings: SAFETY_SETTINGS,
  });
};

const generateContentStream = async (
  model: ReturnType<typeof getGenerativeModel>,
  { imagePart, promptText }: GenerateContentStreamProps
) => {
  return model.generateContentStream([imagePart, promptText]);
};

// Main handler
export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    if (!GEMINI_API_KEY) {
      throw new Error('API key not found');
    }

    const { imageBase64, promptText, fileType }: RequestBody = await req.json();

    const client = createGeminiClient(GEMINI_API_KEY);
    const model = getGenerativeModel(client);

    const imagePart = {
      inlineData: {
        mimeType: fileType,
        data: imageBase64,
      },
    };

    const result = await generateContentStream(model, { imagePart, promptText });

    let caption = '';
    for await (const response of result.stream) {
      caption += response.text();
    }

    return NextResponse.json({ caption });
  } catch (error: unknown) {
    console.error('Error:', error);
    
    if (error instanceof Error) {
      return NextResponse.json({ error: 'Error analyzing image', details: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
    }
  }
}