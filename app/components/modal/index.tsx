"use client"
import Image from 'next/image'

type ModalType = {
    title: string,
    category: string,
    time: Date,
    description: string,
    location: string,
    onClose: ()=>void
}

export default function Modal(props: ModalType) {
    const closeModal = () => { 
        props.onClose()
    }

    return (
        <>
            <div className='fixed h-screen w-screen top-0 left-0 right-0 bottom-0 opacity-50 bg-black z-50'/>
            <div className='flex fixed h-screen w-screen top-0 left-0 justify-center items-center modal z-50'
             onClick={()=>{closeModal()}}>
                <div className='flex flex-col relative gap-2 bg-white w-4/5 sm:w-3/5 h-fit p-7 rounded-2xl z-50'>
                    <div className='hidden sm:block absolute right-7 text-gray-500'>{props.time.toLocaleString()}</div>
                    <h1 className='font-semibold text-2xl'>{props.title.toUpperCase()}</h1>
                    <div className='text-gray-500'>Category: {props.category}</div>
                    <div className='block sm:hidden text-gray-500'>{props.time.toLocaleString()}</div>
                    Description
                    <p className='text-gray-500'>{props.description}</p>
                    <hr/>
                    <div className='flex justify-center gap-2'>
                        <Image
                            src='marker.svg'
                            alt='marker'
                            width={20}
                            height={20}
                        />
                        {props.location}
                    </div>
                </div>
            </div>
        </>
    )
}