import { getGenerativeModel } from "@/AIModels/GeminiGenerativeModel";

interface GenerateContentStreamProps {
    imagePart: {
      inlineData: {
        mimeType: string;
        data: string;
      };
    };
    promptText: string;
  }

  
export const generateContentStream = async (
    model: ReturnType<typeof getGenerativeModel>,
    { imagePart, promptText }: GenerateContentStreamProps
  ) => {
    const result = await model.generateContentStream([imagePart, promptText])


    let caption = '';
    for await (const response of result.stream) {
      caption += response.text();
    }
    return caption;
  };
  