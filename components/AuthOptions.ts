import { PrismaAdapter } from "@auth/prisma-adapter";
import  GoogleProvider  from 'next-auth/providers/google';
import prisma from './../utils/prismaDB';
import { AuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
}