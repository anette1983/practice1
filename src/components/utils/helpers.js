import { formatDistanceToNow } from 'date-fns';



const handleDate = (date) => {
    return formatDistanceToNow(new Date(date), { addSuffix: true })
}

export default handleDate;