import React from 'react'
import SeasonSlider from './SeasonsSlider'
const SeasonsSection = () => {
  return (
     <div className="text-primary mt-8 md:mt-16 lg:mt-[130px]">
       <div className="mb-8 flex justify-between text-6xl">
        <h2 className="font-heading text-center font-bold">
           CÁC MÙA EXOTEL
        </h2>
        <div className="text-sm max-w-2xl">
          <p className="font-montserrat mb-4 text-right leading-[30px]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex nam consectetur hic neque accusantium. Rem delectus blanditiis provident ipsam cumque, unde alias! Voluptatem laboriosam aliquam tempore rerum laudantium vel laborum?
          </p>
        </div>
      </div>
      <SeasonSlider />
    </div>
  )
}

export default SeasonsSection