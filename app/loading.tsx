import Loader from "@/components/Loader";


export default function Loading() {    
    return (
        <div className='h-screen w-screen grid place-items-center'>
            <Loader />
            <p className="font-blue-600 mt-4 font-bold">Loading...</p>
        </div>
    )
  }