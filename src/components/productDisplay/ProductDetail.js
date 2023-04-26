import {
  Box,
  Container,
  Stack,
  Text,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  List,
  ListItem,
  ChakraProvider,
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
import Badge from "react-bootstrap/Badge";
import { RiStarSFill } from "react-icons/ri";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../../assets/scss/dummyDetail.scss";
import Header from "../common/Header";
import "../../assets/scss/main.scss";
import "../../assets/scss/productDisplay.scss";
import { addItemToCart } from "../../redux/action/action";
import ProductDetailCarousel from "./productdetail/ProductDetailCarousel";

const DummyDetail = () => {
  const [data, setData] = useState();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);
  return (
    <>
      <Header />
      <div className="chakra">
        <ChakraProvider className="chakra">
          {data && (
            <Container className="chakra-bg" maxW={"7xl"}>
              <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 18, md: 24 }}
              >
                <Flex>
                  <ProductDetailCarousel data={data} />
                </Flex>
                <Stack spacing={{ base: 6, md: 10 }}>
                  <Box as={"header"}>
                    <Heading
                      lineHeight={1.1}
                      fontWeight={600}
                      className="gradient-text"
                      fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                      _hover={{
                        transform: "translatex(8px)",
                        fontWeight: "900",
                        // boxShadow: "lg",
                      }}
                    >
                      {data.title}
                    </Heading>
                    <Text
                      color={("gray.900", "gray.400")}
                      fontWeight={300}
                      fontSize={"2xl"}
                    >
                      ${data.price} USD
                    </Text>
                  </Box>

                  <Stack
                    spacing={{ base: 4, sm: 6 }}
                    direction={"column"}
                    divider={
                      <StackDivider borderColor={("gray.200", "gray.600")} />
                    }
                  >
                    <VStack spacing={{ base: 4, sm: 6 }}>
                      <Text fontSize={"lg"} color={("gray.900", "gray.400")}>
                        {data.description}
                      </Text>
                    </VStack>
                    <Box>
                      <Text
                        fontSize={{ base: "16px", lg: "18px" }}
                        //   color={("yellow.500", "yellow.300")}
                        className="feature"
                        fontWeight={"500"}
                        textTransform={"uppercase"}
                        mb={"4"}
                      >
                        Features
                      </Text>

                      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                        <List spacing={2}>
                          <ListItem color={("gray.900", "gray.400")}>
                            <span className="text-light fw-bolder">
                              Brand:{" "}
                            </span>
                            {data.brand}
                          </ListItem>
                          <ListItem >
                            <Badge pill bg="warning" text="dark"
                            >
                              <div className="d-flex align-items-center justify-content-center">
                                {data.rating}
                                <RiStarSFill />
                              </div>
                            </Badge>
                          
                          </ListItem>{" "}
                        </List>
                        <List spacing={2}>
                          <ListItem color={("gray.900", "gray.400")}>
                            <span className="text-light fw-bolder">
                              Category:{" "}
                            </span>
                            {data.category}
                          </ListItem>
                          <ListItem className="text-success">
                            {data.discountPercentage}% off
                          </ListItem>
                          <ListItem className="d-flex justify-content-center"></ListItem>
                        </List>
                      </SimpleGrid>
                    </Box>
                  </Stack>
                  <Button
                    onClick={() => {
                      dispatch(addItemToCart(data));
                    }}
                    className="addcart text-light"
                    rounded={"none"}
                    w={"full"}
                    mt={8}
                    size={"lg"}
                    py={"7"}
                    bg={("gray.900", "gray.50")}
                    color={("white", "gray.900")}
                    textTransform={"uppercase"}
                    _hover={{
                      transform: "translateY(2px)",
                      boxShadow: "lg",
                    }}
                  >
                    Add to cart
                  </Button>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent={"center"}
                  >
                    <MdLocalShipping className="text-light" />
                    <Text className="text-light">
                      2-3 business days delivery
                    </Text>
                  </Stack>
                </Stack>
              </SimpleGrid>
              <Link to="/product">
                <Button className="mb-2 text-danger" variant={"ghost"}>
                  back
                </Button>
              </Link>
            </Container>
          )}
        </ChakraProvider>
      </div>
    </>
  );
};
export default DummyDetail;
