import { HarmBlockThreshold, HarmCategory, SafetySetting } from "@google/generative-ai";

export const GEMINI_MODEL_IMAGE_ANALYSIS = 'gemini-1.5-flash';
export const GEMINI_MODEL_CHAT= 'gemini-pro';
export const SAFETY_SETTINGS: SafetySetting[] = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
  },
];