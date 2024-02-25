"use client"
import React from 'react'
import Hero from '../components/Hero'

const getJobs= async()=> {
  let response= await fetch("http://localhost:3000/api/job", {cache:"no-store"})
  if (!response.ok){
    throw new Error(`HTTP error! Status: ${response.status}`);
    return {res:"Error"}
  }
  else{
    let data= await response.json()
    return data
  }
  
}

const page = async() => {
  const serviceApi= await getJobs()
  console.log(serviceApi)
   
  return (
    <div className='items-center'>  
  <Hero
    height={400}
    isVisible={false}
    path='/asset/img/hero_opening.png'
    title='Featured Job'
  />
  {serviceApi.result.map((item: { category: string; design: string; type: string }, index: number) => (
    <div key={index} id='openings' className='container p-5 m-5 md:m-5 bg-white border rounded-xl md:w-[90%] mx-auto'>
      <div className='flex flex-col md:flex-row justify-between items-center -m-2'>
        <div className='md:mr-5 mb-5 md:mb-0'>
          <h3 className='inline-block px-2.5 py-1 text-xs text-white font-medium bg-tertiary uppercase rounded-md mb-2 md:mb-4'>
            {item.category}
          </h3>
          <h1 className='text-xl text-black font-heading mb-2.5 font-bold leading-snug'>
            {item.design}
          </h1>
          <p>{item.type}</p>
        </div>
      </div>
    </div>
  ))}
</div>

  )
}

export default page
