
import prisma from '@/utils/prismaDB';
import { NextResponse } from 'next/server';
//GET SINGLE POST
export async function GET(req:Request, {params}:{params:{slug: string}}){
    const {slug} = params;

    try {
        const post = await prisma.post.findUnique({
          where:{slug},
          include:{user: {select: {name:true}}}
        })
        return NextResponse.json(post, {status: 201})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: "Error fetching post"}, {status: 500})
    }
}