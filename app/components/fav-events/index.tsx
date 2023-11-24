import eventData from '../../constants/events-data.json'
import ListTable from '../list-table'

export default function FavouriteEvents () {
    return (
        <div className='w-full mr-4 h-screen'>
            <ListTable data={eventData.filter(data => data.liked)}/>
        </div>
    )
}