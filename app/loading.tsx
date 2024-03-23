import Loader from "@/components/Loader";


export default function Loading() {    
    return (
        <div className='h-screen w-screen grid place-items-center'>
            <Loader />
        </div>
    )
  }