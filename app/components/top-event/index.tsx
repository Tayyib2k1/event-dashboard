"use client"
import Image from "next/image"
import apiHandler from "@/app/utils/api-handler"
import { useEffect, useState } from 'react'

export default function TopEvent() {
        const [eventData , setEventData] = useState([])
        const getData = async () => {
            const data = await apiHandler.getData('?limit=1&sort=rank')
            setEventData(data)
        }

        useEffect(()=>{
            getData()
        }, [])

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
                        {eventData[0]?.title}
                    </div>
                    <div className=" text-gray-400 text-xs">
                        Catergory: <span className="text-gray-400 text-xs font-medium">{eventData[0]?.category}</span>
                    </div>
                    <Image
                        className='inline'
                        src='marker.svg'
                        alt='like image'
                        width={10}
                        height={10}
                    />
                    <span className="text-gray-400 text-xs pl-1">{eventData[0]?.timezone}</span>

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
                        {eventData[0]?.start ? new Date(eventData[0]?.start).toLocaleString() : ''}
                    </div>
                </div>
            </div>
        )
}