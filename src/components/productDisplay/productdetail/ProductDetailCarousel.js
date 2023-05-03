import React from "react";
import { Carousel } from "react-responsive-carousel";
const ProductDetailCarousel = ({ data }) => {
  return (
    <>
      <Carousel style={{ objectFit: "contain", height: "613px" }}>
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
