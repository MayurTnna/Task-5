import React from "react";
import Card from "react-bootstrap/Card";
import { RiStarSFill } from "react-icons/ri";
import Badge from "react-bootstrap/Badge";
import { useNavigate } from "react-router-dom";
import "../../assets/scss/productDisplay.scss";
import "../../assets/scss/main.scss";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <>
      <Card
        className="text-dark main-card"
        onClick={() => {
          navigate(`/detail/${item.id}`);
        }}
      >
        <Card.Img variant="top" className="card-image" src={item.thumbnail} />

        <Card.Body className="main-card">
          <Card.Text className="card-description_text">
            {item.description.split(" ").slice(0, 6).join(" ")}
          </Card.Text>

          <Card.Title className="text-start card-title_text">
            {item.title}
          </Card.Title>
          <Card.Text className="float-start card-brand_text ">
            {item.brand}.
          </Card.Text>

          <Card.Text className="float-end fw-5 text-danger">
            ${item.price}.00
          </Card.Text>
        </Card.Body>

        <div className="container">
          <Card.Text className="float-start fw-5">
            <Badge pill bg="warning" text="dark" className="badge">
              <div className="d-flex align-items-center justify-content-center">
                {item.rating}
                <RiStarSFill />
              </div>
            </Badge>
          </Card.Text>
          <Card.Text className="float-end text-success">
            {item.discountPercentage}%
          </Card.Text>
        </div>
      </Card>
    </>
  );
};

export default ProductCard;
