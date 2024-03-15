import prisma from "@/utils/prismaDB"
import { NextResponse } from "next/server"

export async function GET(){
    try {
        const categories = await prisma.category.findMany()
        return NextResponse.json({categories}, {status: 201})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: "error fetching categories"}, {status: 500})
    }
    
}