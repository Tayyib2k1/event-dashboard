import apiHandler from '@/app/utils/api-handler'
import ListTable from '../list-table'
import { useEffect, useState } from 'react'

export default function FavouriteEvents () {
    const [eventData , setEventData] = useState([])
    const getData = async () => {
        const data = await apiHandler.getData()
        setEventData(data)
    }

    useEffect(()=>{
        getData()
    }, [])

    return (
        <div className='w-full mr-4 h-screen'>
            <ListTable data={eventData.filter(data => data['liked'])}/>
        </div>
    )
}