export const generateRecurringDates = (
  startDate,
  endDate,
  recurrenceType,
  customRecurrence
) => {
  let dates = [];
  let currentDate = new Date(startDate);

  switch (recurrenceType) {
    case 'daily':
      while (!endDate || currentDate <= endDate) {
        dates.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
      }
      break;

    case 'weekly':
      while (!endDate || currentDate <= endDate) {
        dates.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 7);
      }
      break;
    case 'yearly':
      while (!endDate || currentDate <= endDate) {
        dates.push(new Date(currentDate));
        currentDate.setFullYear(currentDate.getFullYear() + 1);
      }
      break;
    case 'monthly':
      while (!endDate || currentDate <= endDate) {
        dates.push(new Date(currentDate));
        currentDate.setMonth(currentDate.getMonth() + 1);
      }
      break;
    case 'custom':
      const {
        Year,
        nthDay: month,
        interval: day,
        daysOfWeek: week,
      } = customRecurrence;
      currentDate.setDate(currentDate.getDate() + Number(day));
      currentDate.setDate(currentDate.getDate() + 7 * Number(week));
      currentDate.setMonth(currentDate.getMonth() + Number(month));
      currentDate.setFullYear(currentDate.getFullYear() + Number(Year));
      dates.push(new Date(currentDate));
      break;
  }

  return dates ;
};
