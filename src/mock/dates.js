import dayjs from 'dayjs';
import { getRandomInteger } from './util';

const TimeRanges = {
  DAYS: {
    MIN: 1,
    MAX: 3
  },
  HOURS: {
    MIN: 1,
    MAX: 23
  },
  MINUTES: {
    MIN: 1,
    MAX: 59
  }
};

const getRandomDate = () =>
  dayjs().add(getRandomInteger(TimeRanges.DAYS.MIN, TimeRanges.DAYS.MAX), 'day')
    .add(getRandomInteger(TimeRanges.HOURS.MIN, TimeRanges.HOURS.MAX), 'hour')
    .add(getRandomInteger(TimeRanges.MINUTES.MIN, TimeRanges.MINUTES.MAX), 'minute');


const getRandomDates = () => {
  const date1 = getRandomDate();
  const date2 = getRandomDate();

  if (date2.isAfter(date1)) {
    return {
      dateFrom: date1.toISOString(),
      dateTo: date2.toISOString()
    };
  }
  return {
    dateFrom: date2.toISOString(),
    dateTo: date1.toISOString()
  };
};

export { getRandomDates };