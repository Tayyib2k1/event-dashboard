"use client"
import Image from "next/image"

export default function TopEvent() {
        return (
            <div className="flex flex-col justify-between mt-5 w-[87%] sm:w-full h-[12rem] bg-[#5041BC] rounded-3xl shadow-[-7px_13px_45px_-5px_#5041BC] p-5 pt-4 mx-6 sm:mx-0 mb-5 sm:mb-0">
                <div className="flex justify-between">
                    <div className="text-white text-3xl font-semibold w-40">Event of the month</div>
                    <Image
                        className=''
                        src='badge.svg'
                        alt='like image'
                        width={50}
                        height={50}
                    />
                </div>
                <div className="bg-white h-full w-full rounded-xl mt-1 p-2 relative">
                    <div className=" text-[#5041BC] font-medium">
                        Web Development
                    </div>
                    <div className=" text-gray-400 text-xs">
                        Catergory: <span className="text-gray-400 text-xs font-medium">AI</span>
                    </div>
                    <Image
                        className='inline'
                        src='marker.svg'
                        alt='like image'
                        width={10}
                        height={10}
                    />
                    <span className="text-gray-400 text-xs pl-1">Bahria Intellectual Village</span>

                    <Image
                        className='absolute top-1 right-1'
                        src='person.svg'
                        alt='like image'
                        width={50}
                        height={50}
                    />
                    <Image
                        className='absolute top-1 right-6'
                        src='person2.svg'
                        alt='like image'
                        width={50}
                        height={50}
                    />
                    <Image
                        className='absolute top-1 right-11'
                        src='person3.svg'
                        alt='like image'
                        width={50}
                        height={50}
                    />
                    <div className="text-gray-300 text-xs w-28 absolute right-2 bottom-2 text-right">
                        Thu 2 Nov 2023 12:00am
                    </div>
                </div>
            </div>
        )
}