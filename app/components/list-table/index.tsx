"use client"
import Image from 'next/image'
import Modal from '../modal';
import Filter from '../filter';
import { useEffect, useState } from 'react';

type PropsType = {
    data: Array<{
        id: number,
        title: string,
        time: string,
        location: string,
        liked: boolean
    }>
}

export default function ListTable(props: PropsType) {
    const { data: eventsData } = props
    const [modalData, setModalData] = useState(Object)
    const handelClick = (data: Object) => {
        setModalData(data)
    }
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 640;
    // const breakpoint = 910;
    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);
    if (width < breakpoint) {
        return (
            <>
                <div className='relative flex flex-col text-left ml-2'>
                    <div className='pl-6 pt-4 font-medium text-xl'>Events List</div>
                    <Filter/>
                    <div className='pt-0 sm:pt-6 p-6 max-h-96 overflow-y-scroll'>
                        {eventsData.map(data => {
                            return (
                                <div key={data.id} className='flex flex-col relative justify-around mt-3 bg-white p-3 pl-3 rounded-xl' onClick={() => handelClick(data)}>
                                    <div className='basis-full font-bold'>{data.id}. {data.title}</div>
                                    <div className='basis-full text-slate-600 font-medium'>{new Date(data.time).toLocaleString()}</div>
                                    <div className='basis-full text-slate-500 text-md'>{data.location}</div>
                                    <Image
                                        className='absolute bottom-3 right-3'
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
                {
                    Object.keys(modalData).length > 0 &&
                    <Modal
                        title={modalData.title}
                        category={modalData.category}
                        time={modalData.time}
                        description={modalData.description}
                        location={modalData.location}
                        onClose={() => setModalData({})}
                    />
                }
            </>
        )
    } else {
        return (
            <>
                <div className='relative flex flex-col h-[33rem] text-left ml-2 '>
                    <span className='font-medium text-xl'>Events List</span>
                    <Filter/>
                    <div className='flex justify-around p-3 pl-6 pb-0 pt-0 text-lg'>
                        <div className='basis-full'>#</div>
                        <div className='basis-full'>Name</div>
                        <div className='basis-full'>Time</div>
                        <div className='basis-full'>Date</div>
                        <div className='basis-full'>Location</div>
                        <div className='w-24'></div>
                    </div>
                    <hr className='mt-1 mb-2 border-s border-stone-950' />
                    <div className=' max-h-[30rem] overflow-y-scroll'>
                        {eventsData.map(data => {
                            return (
                                <div key={data.id} className='flex justify-around mt-3 bg-white p-3 pl-6 rounded-xl border border-gray-100' onClick={() => handelClick(data)}>
                                    <div className='basis-full font-bold'>{data.id}</div>
                                    <div className='basis-full text-slate-500'>{data.title}</div>
                                    <div className='basis-full text-slate-600 font-medium'>{new Date(data.time).toLocaleTimeString()}</div>
                                    <div className='basis-full text-slate-600 font-medium'>{new Date(data.time).toLocaleDateString()}</div>
                                    <div className='basis-full text-slate-500 text-md'>{data.location}</div>
                                    <Image
                                        className='w-auto h-auto'
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
                {
                    Object.keys(modalData).length > 0 &&
                    <Modal
                        title={modalData.title}
                        category={modalData.category}
                        time={modalData.time}
                        description={modalData.description}
                        location={modalData.location}
                        onClose={() => setModalData({})}
                    />
                }
            </>
        )
    }
}