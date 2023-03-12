import { formatDistanceToNow, format } from 'date-fns';

const handleDate = date => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};

export const handleDateFormate = date => {
  return format(new Date(date), 'Pp');
};

export default handleDate;
