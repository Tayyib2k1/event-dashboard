import eventData from '../../constants/events-data.json'
import Image from 'next/image'

export default function UpcomingEvents() {
        return (
            <div className="flex flex-col items-center justify-between h-[28.5rem] w-full pt-6 gap-2 bg-white rounded-2xl sm:pb-6">
                <div className='text-xl w-10/12 text-left'>Upcoming Events</div>
                <div className='overflow-y-scroll w-full p-6 pt-0'>
                    {eventData.map(data => {
                        return (
                            <div className="relative rounded-2xl p-2 h-16 mt-2 w-full bg-white border border-gray-100">
                                <div className='text-lg font-normal'>{data.title}</div>
                                <div className='text-gray-400'>{new Date(data.time).toLocaleString()}</div>
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