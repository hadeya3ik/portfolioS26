import Image from 'next/image'

function ButtonHover() {
  
  return (
    <div className='  w-full h-full '>
    <div className='bg-[#37373a] relative content-[0] grid w-full h-full text-[#696969]'>

        <Image
            src="/Texture.png"
            fill
            alt="Overlay texture"
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay pointer-events-none z-1000"
        />

        <div className="border-1 flex items-center justify-center">
          <button id="button" className="h-min w-min m-24 z-100">BUTTON</button>
        </div>
    </div>
    </div>
  )
}

export default ButtonHover
