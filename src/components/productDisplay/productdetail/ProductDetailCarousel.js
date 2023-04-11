import React from "react";
import { Carousel } from "react-responsive-carousel";
const ProductDetailCarousel = ({ data }) => {
  return (
    <>
      <Carousel>
        {data.images.map((item) => (
          <div>
            <img src={item} />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default ProductDetailCarousel;
