import Base64 from 'base64-js';

export const analyzeImage = async (
  file: File,
  captionLength: string,
  language: string,
  customPromptEnabled: boolean,
  customPrompt: string
): Promise<string> => {
  const imageBytes = await file.arrayBuffer();
  const imageBase64 = Base64.fromByteArray(new Uint8Array(imageBytes));

  const promptText = customPromptEnabled
    ? customPrompt
    : `Write beautiful, heart-touching, mesmerizing, catchy, and poetic captions for the image to post on social media platforms like TikTok, Facebook, and Instagram. The response should only contain one caption and nothing else. Use emojis to show expression. ${
        captionLength === 'short'
          ? 'Provide concise captions.'
          : captionLength === 'medium'
          ? 'Generate medium-length captions.'
          : 'Craft longer captions.'
      } Please provide the captions in ${language}.`;

  try {
    const response = await fetch('/api/gemini/caption-generator', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ imageBase64, promptText, fileType: file.type }),
    });

    const data = await response.json();
    if (response.ok) {
      return data.caption;
    } else {
      throw new Error(data.error || 'Error analyzing image');
    }
  } catch (error) {
    console.error('Error:', error);
    return 'Error analyzing image';
  }
};
