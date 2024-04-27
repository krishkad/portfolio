import React from 'react'
import PicDialog from './pic-dialog'

const Hero = () => {
    
    return (
        <div className='w-full h-[calc(100vh-64px)]'>
            <div className="max-w-wrapper h-full flex justify-center max-sm:pt-20 sm:items-center pb-0 sm:pb-16">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col items-center gap-3">
                        <PicDialog />
                        <p className="text-md font-semibold ">I&apos;m Krrish Kadam</p>
                    </div>
                    <h2 className='text-3xl font-bold text-center '>Building digital
                        <br />products, brands, and
                        <br />experience
                    </h2>
                    <p className='text-sm max-w-[450px] text-center font-semibold text-muted-foreground '>A <span className="font-bold text-black">Full Stack Web Developer</span> and <span className="font-bold text-black">UI UX Designer</span> in India, specializing in Web Development and UI UX Design. I handle medium to large projects including e-commerce,SaaS, Booking software, and custom websites.</p>
                </div>
            </div>
        </div>
    )
}

export default Hero