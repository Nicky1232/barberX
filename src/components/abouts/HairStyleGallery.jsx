import Image from 'next/image'
import React from 'react'
import man from "../../assets/about/hairstyle1.png"
import { hairStyleGallery } from '@/db/data'

const HairStyleGallery = () => {
  return (
    <section>
      <div className="hairstyle-gallery mt-[-5px]">
        <div className="container">
          <div className="hairstyle-gallery-inner grid grid-cols-3 gap-5 md:gap-8 justify-items-center">
            {hairStyleGallery.map((item)=>{
              return <Image key={item.id} className='w-full' src={item.image} width={365} height={361} alt='man' />
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HairStyleGallery