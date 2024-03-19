
import { getSession } from '@/utils/getSession';
import prisma from '@/utils/prismaDB';
import { NextResponse } from 'next/server';
//GET COMMENTS
export async function GET(req:Request, {params}:{params:{slug: string}}){
    const {slug} = params;

    try {
        const comments = await prisma.comment.findMany({
          where:{postSlug: slug},
          include:{user: {select: {name:true,image:true}}}
        })
        return NextResponse.json(comments, {status: 201})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: "Error fetching comments"}, {status: 500})
    }
}


export async function POST(req: Request) {
    try {
      const session = await getSession(); //GET CURRENT SESSION
      if (!session) {
        return NextResponse.json(
          { message: "Unathorized access" },
          { status: 401 }
        );
      }
      const userEmail = session.user?.email as string;
  
      const { commentText,postSlug } =
        await req.json();
  
      const comment = await prisma.comment.create({
        data: {
          content: commentText,
          postSlug,
          userEmail
        },
      });
      return NextResponse.json(comment);
    } catch (error) {
      return NextResponse.json(
        { message: "Something went wrong" },
        { status: 500 }
      );
    }
  }
  