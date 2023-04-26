import React from "react";
import "../../assets/scss/shoppingCart.scss"
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { addItemToCart, removeItemFromCart } from "../../redux/action/action";
function ShoppingCart() {
  const items = useSelector((state) => state.cartReducer.data);

  const dispatch = useDispatch();

  return (
    <>
      <div className="shopping-container bg-dark">
        {/* <h3 className="text-light float-center">Your Shopping Cart</h3> */}
        {items &&
          items.map((item) => {
            return (
              <Card
                style={{ width: "28rem", height: "10rem", margin: "auto" }}
                className="my-3 bg-black text-light"
                key={item.id}
              >
                <Card.Body>
                  <Card.Title>
                    <h3 className="float-start">{item.title}</h3>
                    <div className="price float-end">
                      <h4>
                        ${item.price * item.total}{" "}
                        {/* <span className="text-info">(${item.price}/item)</span> */}
                      </h4>
                    </div>
                  </Card.Title>
                  {/* <img src={item.thumbnail} style={{height : "30px"}}/> */}
                  <Card.Subtitle
                    className="mb-2 text-muted"
                    style={{ paddingTop: "50px" }}
                  >
                    <div className="text-danger">
                      {" "}
                      {item.description.split(" ").slice(0, 8).join(" ")}...
                    </div>
                  </Card.Subtitle>
                  <span className="mx-2 float-start"> x{item.total} </span>
                  <div className="px-2">
                    <Button
                      className="float-end"
                      onClick={() => {
                        dispatch(addItemToCart(item));
                      }}
                      variant="outline-light"
                    >
                      +
                    </Button>
                  </div>
                  <div className="px-5">
                    <Button
                      className="float-end"
                      onClick={() => {
                        dispatch(removeItemFromCart(item));
                      }}
                      variant="outline-light"
                    >
                      -
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
      </div>
    </>
  );
}

export default ShoppingCart;
