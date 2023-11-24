import Image from 'next/image'

type PropsType = {
    toggleSidebar: any
}

export default function NavBar(props: PropsType) {
    const { toggleSidebar } = props
    return (
        <nav className='flex relative w-full h-fit items-center gap-14 p-3 pl-7'>
            <Image
                // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                className='h-auto'
                src="/logo.svg"
                alt="Next.js Logo"
                width={49}
                height={49}
            />
            <div className='flex gap-2 rounded-full bg-slate-100 p-2 w-2/5'>
                <Image
                    src="/search.svg"
                    alt="Next.js Logo"
                    width={24}
                    height={24}
                />
                <input type="search" placeholder='Search events..' className='bg-inherit rounded-full pl-2 pr-1 w-full focus:outline-none' />
            </div>
            <Image
                    className='block sm:hidden absolute right-6'
                    onClick={()=>toggleSidebar(true)}
                    src="/menu.svg"
                    alt="Next.js Logo"
                    width={24}
                    height={24}
                />
        </nav>
    )
}