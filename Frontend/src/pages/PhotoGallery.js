import React, { useState } from 'react'
import Masonry from 'react-masonry-css'
import img_1 from '../assets/gallery-1.jpg'
import img_2 from '../assets/gallery-2.jpg'
import img_3 from '../assets/gallery-3.jpg'
import img_4 from '../assets/gallery-4.jpg'
import img_5 from '../assets/gallery-5.jpg'
import img_6 from '../assets/gallery-6.jpg'
import img_7 from '../assets/gallery-7.jpg'
import img_8 from '../assets/gallery-8.jpg'
import img_9 from '../assets/gallery-9.jpg'
import img_10 from '../assets/gallery-10.jpg'
import img_11 from '../assets/gallery-11.jpg'
import img_12 from '../assets/gallery-12.jpg'
import img_13 from '../assets/gallery-13.jpg'
import img_14 from '../assets/gallery-14.jpg'
import img_15 from '../assets/gallery-15.jpg'
import img_16 from '../assets/gallery-16.jpg'
import img_17 from '../assets/gallery-17.jpg'
import img_18 from '../assets/gallery-18.jpg'
import img_20 from '../assets/gallery-20.jpg'
import img_21 from '../assets/gallery-21.jpg'
import img_22 from '../assets/gallery-22.jpg'
import img_23 from '../assets/gallery-23.jpg'
import img_24 from '../assets/gallery-24.jpg'
import img_25 from '../assets/gallery-25.jpg'
import img_26 from '../assets/gallery-26.jpg'
import img_27 from '../assets/gallery-27.jpg'
import img_28 from '../assets/gallery-28.jpg'
import img_29 from '../assets/gallery-29.jpg'
import img_30 from '../assets/gallery-30.jpg'
import imgu_1 from '../assets/decoration/imgu-1.jpg'
import imgu_2 from '../assets/decoration/imgu-2.jpg'
import imgu_3 from '../assets/decoration/imgu-3.jpg'
import imgu_4 from '../assets/decoration/imgu-4.jpg'
import imgu_5 from '../assets/decoration/imgu-5.jpg'
import imgu_6 from '../assets/decoration/imgu-6.jpg'
import imgu_7 from '../assets/decoration/imgu-7.jpg'

function PhotoGallery(){
  const [gallery,setGalley] = useState([img_1,imgu_3,img_25,img_24,img_16,img_5,,img_17,img_23,imgu_2,img_7,img_28,img_22,img_2,img_8,img_30,imgu_7,img_10,img_11,img_12,img_6,imgu_1,imgu_6,img_9,imgu_5])

  const cols={
    default: 4,
    1100: 3,
    700: 2
  }
  return (
    <div className='w-[91%] max-w-[1160px] mx-auto'>
      <Masonry
        breakpointCols={cols}
        className='gallery-container w-full flex gap-[15px]'
        columnClassName='gallery-cols'     
      >
        {
          gallery.map((img,i)=>(<img 
                        src={img} key={i}
                        loading='lazy'
                          className='mb-[15px] hover:scale-[1.009] transition-all duration-[0.3s] rounded-md'
                        />))
        }
      </Masonry>
    </div>
  )
}

export default PhotoGallery