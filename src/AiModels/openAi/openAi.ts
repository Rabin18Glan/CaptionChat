import  OpenAI from "openai";


 export const OpenAIModel = new OpenAI({apiKey:process.env.OPENAI_API_KEY});

