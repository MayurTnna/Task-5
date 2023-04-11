import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/action/action";
import "../../assets/scss/productDisplay.scss";
import "../../assets/scss/main.scss";
import Header from "../../components/common/Header";
import ProductPagination from "../../components/productList/ProductPagination";
import ProductCard from "../../components/productList/ProductCard";


const ProductDisplay = () => {
  const data = useSelector((state) => state.postReducer.posts);
  console.log(data)
  const [active, setActive] = useState(0);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  const handleIncrement = (number) => {
    setActive(number);
    dispatch(fetchPosts(number * 8));
  };

  useEffect(() => {
    dispatch(fetchPosts());
    handleIncrement(0);
  }, [dispatch]);

  return (
    <>
      <Header />
      {loading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="row container mx-auto ">
          {data.products ? (
            data.products.map((item) => (
              <div className="col col-lg-3 col-md-6 col-sm-12 my-4 p-5 ">
                <ProductCard item={item} />
              </div>
            ))
          ) : (
            <h1>hello</h1>
          )}
        </div>
      )}

      <ProductPagination active={active} handleIncrement={handleIncrement} />
    </>
  );
};

export default ProductDisplay;





