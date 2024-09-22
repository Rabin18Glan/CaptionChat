import { OpenAIModel } from "@/AiModels/openAi/openAi";
import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';


export async function POST(req:NextRequest)
{

    const {prompt}:any = req.body;
    const response = await OpenAIModel.images.generate({
        model: "dall-e-2",
        prompt:"Generate Image of Cat" ,
        n: 1,
        size: "1024x1024",
      });
     
      return NextResponse.json({url:response.data[0].url},{status:200});
}