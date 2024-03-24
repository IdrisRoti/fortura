import CreatePostForm from "@/components/CreatePostForm";
import { getSession } from "@/utils/getSession";
import { redirect } from "next/navigation";

export default async function CreatePost (){
const session = await getSession()

if(!session){
    redirect("/")
}

    return (
        <div className="pt-[70px] p-2 max-w-[1400px] mx-auto">
            <h2 className="font-bold text-2xl mb-4">Create a blog</h2>
            <CreatePostForm />
        </div>
    )
}