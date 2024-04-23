import Image from 'next/image'
import React from 'react'

const Optimization = () => {
    return (
        <div className='w-full bg-[#252525]'>
            <div className="max-w-wrapper py-16">
                <div className="w-full">
                    <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl tracking-wide leading-tight">
                        Strategically Optimizing Your Workflow for Maximum Efficiency, Productivity, and Seamless Project Execution by Cutting-Edge Technologies, and Proactive Problem-Solving Approaches
                    </h2>
                    <p className="font-semibold text-[#A6A6A6] text-sm mt-10 sm:mt-20">Efficiently Enhancing Workflow<br />for Peak Performance</p>
                </div>
                <div className="w-full mt-28">
                    <div className="w-full">
                        <p className="font-semibold text-[#A6A6A6] text-sm">Out Approach </p>
                        <h3 className="text-2xl sm:text-4xl font-bold text-white mt-5">We Streamline complex<br />processes.</h3>
                    </div>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-16 gap-5">
                        <div className="w-full p-5 bg-[#2B2B2B] rounded-md">
                            <div className="mb-5">
                                <Image src={'/arrow.svg'} className="invert" width={50} height={20} alt='arrow' />
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl text-white font-bold">Accelerating</h3>

                                <p className="text-sm text-[#B4B4B8] font-semibold">Efficient workflows, rapid prototyping, and agile methods ensure swift, quality results. With a focus on collaboration and adaptability, meeting deadlines with precision.</p>
                            </div>
                        </div>
                        <div className="w-full p-5 bg-[#2B2B2B] rounded-md">
                             <div className="mb-5">
                                <Image src={'/arrow.svg'} className="invert" width={50} height={20} alt='arrow' />
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl text-white font-bold">Managing</h3>

                                <p className="text-sm text-[#B4B4B8] font-semibold">I oversee every step from planning to launch, ensuring clear communication, careful organization, and on-time delivery.</p>
                            </div>
                        </div>
                        <div className="w-full p-5 bg-[#2B2B2B] rounded-md">
                             <div className="mb-5">
                                <Image src={'/arrow.svg'} className="invert" width={50} height={20} alt='arrow' />
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl text-white font-bold">Delivering</h3>

                                <p className="text-sm text-[#B4B4B8] font-semibold">Ensure the final product meets quality standards. Deliver the project on time as promised. Ensure all components of the project are implemented correctly.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Optimization