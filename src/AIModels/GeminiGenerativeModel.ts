import { GEMINI_API_KEY } from "@/const/constants";
import { GEMINI_MODEL_CHAT, GEMINI_MODEL_IMAGE_ANALYSIS, SAFETY_SETTINGS } from "@/const/gemini";
import { GenerativeModel, GoogleGenerativeAI } from "@google/generative-ai";

export const getGenerativeModel = (model:string) => {
    const client:GoogleGenerativeAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    return client.getGenerativeModel({
      model,
      safetySettings: SAFETY_SETTINGS,
    });
  };

export const ImageAnalysis:GenerativeModel = getGenerativeModel(GEMINI_MODEL_IMAGE_ANALYSIS);
export const ChatBot:GenerativeModel = getGenerativeModel(GEMINI_MODEL_CHAT)