import { useState, useEffect } from 'react';

type UnixTimestamp = number;
type FormattedDateTime = string | null;

function useTimestampConverter(timestamp: UnixTimestamp): FormattedDateTime {
  const [formattedDateTime, setFormattedDateTime] =
    useState<FormattedDateTime>(null);

  useEffect(() => {
    if (timestamp) {
      const date = new Date(timestamp * 1000);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');

      const formattedDateTimeString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      setFormattedDateTime(formattedDateTimeString);
    }
  }, [timestamp]);

  return formattedDateTime;
}
export default useTimestampConverter;
