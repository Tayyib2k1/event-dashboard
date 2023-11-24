import Image from "next/image"
import sideBarData from '../../constants/sidebar-data.json'

type PropsType = {
    selected: string,
    changeSelected: any,
}

export default function SideBar(props: PropsType) {
    const { selected, changeSelected } = props

    return (
        <div className='bg-white p-3 pt-5 h-[44rem] m-4 ml-5 mt-0 rounded-full w-fit hidden sm:flex flex-col gap-3'>
            {sideBarData.map(data => {
                return (
                    <div onClick={() => changeSelected(data.type)} className='rounded-full transition delay-150 hover:scale-110 hover:shadow'>
                        <Image
                            className='h-auto bg-white rounded-full'
                            src={selected == data.type ? data.selected : data.image}
                            alt="Next.js Logo"
                            width={40}
                            height={40}
                        />
                    </div>
                )
            })}
        </div>
    )
}