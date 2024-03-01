import React from 'react'

const Subscribe = () => {
  return (
    <section className='w-full flex flex-col items-center pt-[80px] md:pt-[150px] p-2 text-center'>
        <div className='md:w-[600px] w-full'>
          <h2 className='text-4xl font-light mb-4'>Welcome to <span className="font-semibold italic text-blue-800">fortura</span>. Checkout our stories and ideas</h2>
          <span className='mt-8'>Subscribe to learn about new products features, latest in technology and updates.</span>
          <form className='mt-4'>
              <input type="email" className="outline-none border md:w-[300px] w-full border-slate-200  px-4 py-2 rounded-md md:mr-4" placeholder='enter your email'/>
              <button className='bg-blue-500 mt-4 md:mt-0 w-full md:w-auto block md:inline text-white px-4 py-2 rounded-md'>Subscribe</button>
          </form>
        </div>
    </section>
  )
}

export default Subscribe