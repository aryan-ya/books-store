import React from 'react'
import list from "../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

function Freebook() {

  const filtered = list.filter((data) => data.category === 'free');
  console.log(filtered); // Log filtered data to the console

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='max-w-screen-xl container mx-auto md-px-20 px-4'>
      <div>
        <h1 className='font-semibold text-xl pb-2'>Free Offered Course </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore, quis deserunt sint atque autem impedit est. Excepturi, aut laborum! Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>

      <div>
        <Slider {...settings}>
          {filtered.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Freebook;
