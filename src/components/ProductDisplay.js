  import React, { useEffect, useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { fetchPosts } from "../redux/action/action";
  import Card from "react-bootstrap/Card";
  import ListGroup from "react-bootstrap/ListGroup";
  import { RiStarSFill } from "react-icons/ri";
  import ReactPaginate from "react-paginate";
  import Button from "react-bootstrap/Button";
  import Badge from "react-bootstrap/Badge";
  import "../assets/scss/main.scss"
  import { Link } from "react-router-dom";
import Header from "./Header";
  const ProductDisplay = () => {
    const [pageNumber, setPageNumber] = useState(0);
    const data = useSelector((state) => state.posts);

    const loading = useSelector((state) => state.loading);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchPosts());
    }, []);

    const productsPerPage = 8;
    const pagesVisited = pageNumber * productsPerPage;
    const pageCount = Math.ceil(data.products?.length / productsPerPage);

    const displayProducts = data.products
      ?.slice(pagesVisited, pagesVisited + productsPerPage)
      ?.map((item) => (
        <div className="col col-lg-3 col-md-6 col-sm-12 my-4 p-5 ">
          <Card className="text-dark">
            <Card.Img
              variant="top"
              style={{ height: "10rem" }}
              src={item.thumbnail}
              
            />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                {item.description.split(" ").slice(0, 6).join(" ")}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush b-0" >
              <ListGroup.Item>{item.brand}</ListGroup.Item>
              <ListGroup.Item>{item.category}</ListGroup.Item>
              <ListGroup.Item className="text-danger">{item.price}$</ListGroup.Item>
              <ListGroup.Item>
                <Badge pill bg="warning" text="dark">
                  <div className="d-flex align-items-center justify-content-center">
                    {item.rating}
                    <RiStarSFill />
                  </div>
                </Badge>
              </ListGroup.Item>
              <ListGroup.Item className="text-success">
                {item.discountPercentage}%
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">
               <Link to={`/detail/${item.id}`}> <Button variant="outline-dark">View</Button></Link>
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
      ));

    const handlePageChange = ({ selected }) => {
      setPageNumber(selected);
    };

    return (
      <>
      <Header/> 
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
          
            <div className="row container mx-auto ">{displayProducts}</div>
            <ReactPaginate
              previousLabel={"prev"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={handlePageChange}
              containerClassName={"pagination justify-content-center"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              activeClassName={"active"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
            />
          </>
        )}
      </>
    );
  } ;

  export default ProductDisplay;