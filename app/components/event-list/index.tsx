"use client"
import eventsData from '../../constants/events-data.json'
import ListTable from '../list-table';

export default function EventList() {
    return <ListTable data={eventsData}/>
}