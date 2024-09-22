import { OpenAIModel } from "@/AiModels/openAi/openAi";
import { NextRequest, NextResponse } from "next/server";

interface OpenAIChatProps{
    role?:string,
    message:string
}
export async function POST(req:NextRequest){
    const {message}:any = req.body;
    const completion = await OpenAIModel.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "user", content:"Hello" },
        
        ],
    });
    
  return NextResponse.json({
    message:completion.choices[0].message
  },{status:200})
}

