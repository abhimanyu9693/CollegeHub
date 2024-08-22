import React from 'react'

export default function Banner() {
  return (
    <>
    <div class="flex items-center justify-between px-8 py-16 bg-gray-50">
  {/*Left Section (Text)  */}
  <div class="max-w-lg">
    <h1 class="text-4xl font-bold text-gray-900 leading-tight">
      Learn & become the <br />
      <span class="text-indigo-600">Top 1% software developer</span>
    </h1>
    <button class="mt-6 px-6 py-3 text-white bg-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
      Explore new batches
    </button>
  </div>
{/*Right Section (Image)*/}
  
<div class="hidden md:block relative">
  <div class="overflow-hidden rounded-full border-4 border-indigo-600 shadow-lg">
    <img src="https://cdn.pixabay.com/photo/2021/12/23/20/25/berry-college-6889950_1280.jpg" alt="Person working on a laptop" class="w-[400px] h-[400px] object-cover rounded-full"/>
  </div>
</div>

</div>

    </>
  )
}
