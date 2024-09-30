import { getGenerativeModel } from "@/AIModels/GeminiGenerativeModel";

export const generateReply = async (model:ReturnType<typeof getGenerativeModel>,prompt:string)=>{
    const result = await model.generateContent(prompt);
    const response = result.response.text();
    return response;

}