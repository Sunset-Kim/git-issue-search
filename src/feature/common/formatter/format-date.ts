import dayjs from 'dayjs';

const NOMAL_DATE = 'YYYY-MM-DD';

export const formatDate = (date: string, schema = NOMAL_DATE) => {
  return dayjs(date).format(schema);
};
