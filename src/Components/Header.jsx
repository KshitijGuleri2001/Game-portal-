import React from 'react'
import image1 from "../assets/images/pngwing.png"
import image2 from "../assets/images/pngwing3.png"

const Header = () => {
  return (
    <div className=''>     
      <div className="max-h-[550px] relative mt-11">
        <div className="absolute w-full h-full text-zinc-100 max-h-[500px] bg-black/70 flex flex-col justify-center">
          <div className="flex justify-between p-4 mt-52 sm:mt-80 z-50">
            <div className=''><img src={image1} className='h-[150px] sm:h-[300px]' alt="" /></div>
            <div className=''><img src={image2} className='h-[150px] sm:h-[300px]' alt="" /></div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
          Play Games
        </div>
        <img
          className="max-h-[160px] md:max-h-[500px] w-full object-cover rounded-xl "
          src="https://c4.wallpaperflare.com/wallpaper/539/401/252/glitch-art-abstract-distortion-rgb-wallpaper-preview.jpg"
          alt="logo"
        />
      </div>
    </div>
  )
}

export default Header
