import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../../components/Navbar';
import HotelDisplay from '../../components/HotelDisplay';
import './styles.css';

const Results = (props) => {
  const hotelList = props.location.state.hotelList;

  const filteredList = props.location.state.hotelList.filter(
    (hotel) => hotel.hac_offers.offers.length
  );

  return (
    <>
      <Navbar />
      <div className='hotel-list'>
        {filteredList.map((hotel) => {
          console.log(hotel);
          return (
            <HotelDisplay
              key={hotel.name}
              name={hotel.name}
              locationString={hotel.location_string}
              originalPhoto={
                hotel.photo.images.original.url &&
                hotel.photo.images.original.url
              }
              largePhoto={hotel.photo.images.large.url}
              rankingText={hotel.ranking}
              rating={hotel.rating}
              class={hotel.hotel_class}
              offers={hotel.hac_offers.offers}
              price={hotel.price}
            />
          );
        })}
      </div>
    </>
  );
};

export default Results;
