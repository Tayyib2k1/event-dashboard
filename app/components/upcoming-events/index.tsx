import Image from 'next/image'
import apiHandler from '@/app/utils/api-handler'
import { useEffect, useState } from 'react'

export default function UpcomingEvents() {
        const [eventData , setEventData] = useState<Array<any>>([])
        const getData = async () => {
            const data = await apiHandler.getData('?sort=start&start.gte=2023-11-24')
            setEventData(data)
        }

        useEffect(()=>{
            getData()
        }, [])

        return (
            <div className="flex flex-col items-center justify-between h-[28.5rem] w-full pt-6 gap-2 bg-white rounded-2xl sm:pb-6">
                <div className='text-xl w-10/12 text-left'>Upcoming Events</div>
                <div className='overflow-y-scroll w-full p-6 pt-0'>
                    {eventData.map((data, i) => {
                        return (
                            <div key={i} className="relative rounded-2xl p-2 h-fit mt-2 w-full bg-white border border-gray-100">
                                <div className='text-lg font-normal pr-6'>{data.title}</div>
                                <div className='text-gray-400'>{new Date(data.start).toLocaleString()}</div>
                                <Image
                                    className='absolute right-3 top-6'
                                    src={data.liked ? 'liked.svg' : 'notLiked.svg'}
                                    alt='like image'
                                    width={20}
                                    height={20}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
}