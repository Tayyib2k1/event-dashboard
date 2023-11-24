"use client"
import { useEffect, useState } from 'react';
import ListTable from '../list-table';
import apiHandler from '@/app/utils/api-handler';

export default function EventList() {
    const [eventData , setEventData] = useState([])
    const getData = async () => {
        const data = await apiHandler.getData()
        setEventData(data)
    }

    useEffect(()=>{
        getData()
    }, [])

    return <ListTable data={eventData}/>
}