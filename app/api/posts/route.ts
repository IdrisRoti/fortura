import { getSession } from "@/utils/getSession";
import genSlug from "@smflow/seo-slug";
import { NextResponse } from "next/server";
import prisma from "@/utils/prismaDB";

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

    const { title, value, category, imgUrl, publicId, description } =
      await req.json();
    const slug = genSlug(title); //GENERATE UNIQUE SLUG

    const post = await prisma.post.create({
      data: {
        title,
        content: value,
        catName: category,
        imgUrl,
        public_id: publicId,
        description,
        slug,
        userEmail,
      },
    });
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}


//GET ALL POSTS

export async function GET(){
  try {
      const categories = await prisma.post.findMany({
        orderBy: {
          createdAt: "desc"
        }
      })
      return NextResponse.json(categories, {status: 201})
  } catch (error) {
      console.log(error)
      return NextResponse.json({message: "error fetching categories"}, {status: 500})
  }
  
}