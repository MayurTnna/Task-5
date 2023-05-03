import React, { useEffect, useState } from "react";
import "../../assets/scss/finalCheckout.scss";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowLeft, FaLock } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getProductTotal, removeItemFromCart } from "../../redux/action/action";

const FinalCheckOut = () => {
  const items = useSelector((state) => state.cartReducer.data);
  const dispatch = useDispatch();
  const total_price = useSelector((state) => state.cartReducer.total_price);

  useEffect(() => {
    dispatch(getProductTotal());
  }, [dispatch]);
  const [promoCode, setPromoCode] = useState("");
  const handlePromoCodeChange = (event) => {
    setPromoCode(event.target.value);
  };

  return (
    <>
      <div className="center-wrapper">
        <div className="content">
          <Link to="/product">
            <div className="top-bar float-start">
              <FaArrowLeft className="fa-arrow-left" />
              <span>Continue shopping</span>
            </div>
          </Link>
          <div className="bag">
            <p className="bag-head">
              <span style={{ textTransform: "uppercase" }}>Your Bag</span> -{" "}
              {items.length}
            </p>
          </div>
          {items &&
            items.map((item) => {
              return (
                <div key={item.id} className="bag-product">
                  <div className="image">
                    <img src={item.thumbnail} className="product-image" />
                  </div>
                  <div className="description">
                    <p className="product-code small muted">
                      Product code: SS0{item.id * 9}
                      {item.id + 1}592{item.id - 1}
                      {item.id}0
                    </p>
                    <h1 className="fw-4">{item.title}</h1>
                    <p>{item.category}</p>
                    <p className="description-text">{item.description}</p>
                    <h2>${item.price}</h2>
                    <div className="quantity-wrapper">
                      <div>
                        <label
                          htmlFor="quantity"
                          style={{ marginRight: "0.5rem" }}
                        >
                          Quantity: {item.total}
                        </label>
                      </div>
                      <Button
                        variant="ghost"
                        className="btn-danger"
                        onClick={() => {
                          dispatch(removeItemFromCart(item));
                        }}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          <div className="bag-total">
            <div className="subtotal">
              <p className="small">Subtotal:</p>
              <p className="small">${total_price}</p>
            </div>
            {promoCode === "YOUR_PROMO_CODE" ? (
              <div className="delivery">
                <p className="small ">
                  Delivery (Standard - 2 working days)
                  <br />
                  <span className="change-delivery">
                    Change delivery method
                  </span>
                </p>
                <p className="small">$0.00</p>
              </div>
            ) : (
              <div className="delivery">
                <p className="small ">
                  Delivery (Standard - 2 working days)
                  <br />
                  <span className="change-delivery">
                    Change delivery method
                  </span>
                </p>
                <p className="small">$5.00</p>
              </div>
            )}
            <div className="total">
              <h3>Total:</h3>
              <h3>${total_price}</h3>
            </div>
            <div className="promo-checkbox ">
              <input
                type="checkbox"
                name="promo-check"
                checked={promoCode !== ""}
                onChange={() => setPromoCode("")}
              />

              <label htmlFor="promo-check" className="px-1">
                I have a promo code
              </label>
            </div>
            <div className="promo-code">
              <input
                type="text"
                name="promo-checkbox"
                placeholder="Enter your promo code here"
                value={promoCode}
                onChange={handlePromoCodeChange}
              />
              <button className=" btn-success btn">Apply</button>
            </div>
            <Link to="/bill">
              <Button
                variant="outline-success"
                className="btn-go-checkout text-light"
                a
              >
                <FaLock className="fa-lock mb-1" />
                <span className="text-light">Generate invoice</span>
              </Button>
            </Link>
          </div>
          <div className="help">
            <p>Need help? Call free 01234 567 890</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinalCheckOut;
