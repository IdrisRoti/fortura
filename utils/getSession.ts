import { authOptions } from "@/components/AuthOptions";
import { getServerSession } from "next-auth"

export const getSession = async () => {
    const session = await getServerSession(authOptions)

    if(session){
        return session;
    }else{
        return null
    }
}