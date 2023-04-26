import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/action/action";
import "../../assets/scss/productDisplay.scss";
import "../../assets/scss/main.scss";
import Header from "../../components/common/Header";
import ProductPagination from "../../components/productList/ProductPagination";
import ProductCard from "../../components/productList/ProductCard";
import { ColorRing } from "react-loader-spinner";

const ProductDisplay = () => {
  const data = useSelector((state) => state.postReducer.posts);

  const [active, setActive] = useState(0);
  const loading = useSelector((state) => state.postReducer.loading);
  console.log(loading);
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
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      ) : (
        <>
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
          <ProductPagination
            active={active}
            handleIncrement={handleIncrement}
          />
        </>
      )}
    </>
  );
};

export default ProductDisplay;
