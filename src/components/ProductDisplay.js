import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/action/action";
import Card from "react-bootstrap/Card";
import { RiStarSFill } from "react-icons/ri";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import "../assets/scss/productDisplay.scss";
import "../assets/scss/main.scss";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import Pagination from "react-bootstrap/Pagination";

const ProductDisplay = () => {
  const data = useSelector((state) => state.postReducer.posts);

  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  const handleIncrement = (number) => {
    setActive(number);
    dispatch(fetchPosts(number * 8));
  };

  let items = [];
  for (let number = 0; number < 100 / 8; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => handleIncrement(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

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
                <Card
                  className="text-dark"
                  onClick={() => {
                    navigate(`/detail/${item.id}`);
                  }}
                >
                  <Card.Img
                    variant="top"
                    style={{ height: "10rem" }}
                    src={item.thumbnail}
                  />

                  <Card.Body className="main-card">
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      {item.description.split(" ").slice(0, 6).join(" ")}
                    </Card.Text>
                  </Card.Body>

                  <Card.Text className="float-start">{item.brand}.</Card.Text>
                  <Card.Text className="float-start text-danger">
                    {item.price}$
                  </Card.Text>
                  <Card.Text>
                    <Badge pill bg="warning" text="dark">
                      <div className="d-flex align-items-center justify-content-center">
                        {item.rating}
                        <RiStarSFill />
                      </div>
                    </Badge>
                  </Card.Text>
                  <Card.Text className="float-start text-success">
                    {item.discountPercentage}%
                  </Card.Text>
                  <Card.Body>
                    <Card.Link href="#">
                      <Link to={`/detail/${item.id}`}>
                        {" "}
                        <Button className="glow-on-hover "  >
                          View
                        </Button>
                      </Link>
                    </Card.Link>
                  </Card.Body>
                </Card>
              </div>
            ))
          ) : (
            <h1>hello</h1>
          )}
        </div>
      )}
      
        <Pagination className="pagination-line pagination_container ">{items}</Pagination>
   
    </>
  );
};
export default ProductDisplay;
