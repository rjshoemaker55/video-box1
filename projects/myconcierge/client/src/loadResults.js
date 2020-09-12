export const loadResults = (data) => {
  return new Promise((resolve, reject) => {
    const { firstName, destCity, arriveDate, numberNights } = data;

    const getLocationId = async () => {
      await fetch(`http://localhost:4000/locationid/${destCity}`)
        .then((res) => res.json())
        .then((parsedId) => getHotelList(parsedId));
    };

    const getHotelList = async (locationId) => {
      await fetch(
        `http://localhost:4000/hotellist/${locationId}/${arriveDate}/${numberNights}`
      )
        .then((res) => res.json())
        .then((parsedHotelList) => resolve(parsedHotelList));
    };
    getLocationId(destCity);
  });
};
