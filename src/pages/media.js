import Navbar from '@/components/navbar';
import { useState } from 'react'

function media() {
 

  return (
    <>
      <Navbar/>
      <div className="flex items-center justify-center w-screen h-96">
          <h1 className="text-4xl font-semibold">Media Page</h1>
      </div>
    </>
  )
}

export default media;
