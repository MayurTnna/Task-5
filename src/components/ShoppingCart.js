// import {
//   Box,
//   Center,
//   useColorModeValue,
//   Heading,
//   Text,
//   Stack,
//   Image,
// } from '@chakra-ui/react';

// const IMAGE =
//   'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

// export default function ProductSimple() {
//   return (
//     <Center py={12}>
//       <Box
//         role={'group'}
//         p={6}
//         maxW={'330px'}
//         w={'full'}
//         bg={useColorModeValue('white', 'gray.800')}
//         boxShadow={'2xl'}
//         rounded={'lg'}
//         pos={'relative'}
//         zIndex={1}>
//         <Box
//           rounded={'lg'}
//           mt={-12}
//           pos={'relative'}
//           height={'230px'}
//           _after={{
//             transition: 'all .3s ease',
//             content: '""',
//             w: 'full',
//             h: 'full',
//             pos: 'absolute',
//             top: 5,
//             left: 0,
//             backgroundImage: `url(${IMAGE})`,
//             filter: 'blur(15px)',
//             zIndex: -1,
//           }}
//           _groupHover={{
//             _after: {
//               filter: 'blur(20px)',
//             },
//           }}>
//           <Image
//             rounded={'lg'}
//             height={230}
//             width={282}
//             objectFit={'cover'}
//             src={IMAGE}
//           />
//         </Box>
//         <Stack pt={10} align={'center'}>
//           <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
//             Brand
//           </Text>
//           <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
//             Nice Chair, pink
//           </Heading>
//           <Stack direction={'row'} align={'center'}>
//             <Text fontWeight={800} fontSize={'xl'}>
//               $57
//             </Text>
//             <Text textDecoration={'line-through'} color={'gray.600'}>
//               $199
//             </Text>
//           </Stack>
//         </Stack>
//       </Box>
//     </Center>
//   );
// }




// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchPosts } from "../redux/action/action";
// import Card from "react-bootstrap/Card";
// import { RiStarSFill } from "react-icons/ri";
// import Button from "react-bootstrap/Button";
// import Badge from "react-bootstrap/Badge";
// import "../assets/scss/productDisplay.scss";
// import "../assets/scss/main.scss";
// import { Link, useNavigate } from "react-router-dom";
// import Header from "./Header";
// import Pagination from "react-bootstrap/Pagination";

// const ProductDisplay = () => {
//   const data = useSelector((state) => state.postReducer.posts);

//   const navigate = useNavigate();
//   const [active, setActive] = useState(0);
//   const loading = useSelector((state) => state.loading);
//   const dispatch = useDispatch();

//   const handleIncrement = (number) => {
//     setActive(number);
//     dispatch(fetchPosts(number * 8));
//   };

//   let items = [];
//   for (let number = 1; number <= 100 / 8; number++) {
//     items.push(
//       <Pagination.Item
//         key={number}
//         active={number === active}
//         onClick={() => handleIncrement(number)}
//       >
//         {number}
//       </Pagination.Item>
//     );
//   }

//   useEffect(() => {
//     dispatch(fetchPosts());
//     handleIncrement(0);
//   }, [dispatch]);

//   return (
//     <>
//       <Header />
//       {loading ? (
//         <div>
//           <h1>Loading...</h1>
//         </div>
//       ) : (
//         <div className="row container mx-auto ">
//           {data.products ? (
//             data.products.map((item) => (
//               <div className="col col-lg-3 col-md-6 col-sm-12 my-4 p-5 ">
//                 <Card
//                   className="text-dark"
//                   onClick={() => {
//                     navigate(`/detail/${item.id}`);
//                   }}
//                 >
//                   <Card.Img
//                     variant="top"
//                     style={{ height: "10rem" }}
//                     src={item.thumbnail}
//                   />

//                   <Card.Body className="main-card">
//                     <Card.Title>{item.title}</Card.Title>
//                     <Card.Text>
//                       {item.description.split(" ").slice(0, 6).join(" ")}
//                     </Card.Text>
//                   </Card.Body>

//                   <Card.Text className="float-start">{item.brand}.</Card.Text>
//                   <Card.Text className="float-start text-danger">
//                     {item.price}$
//                   </Card.Text>
//                   <Card.Text>
//                     <Badge pill bg="warning" text="dark">
//                       <div className="d-flex align-items-center justify-content-center">
//                         {item.rating}
//                         <RiStarSFill />
//                       </div>
//                     </Badge>
//                   </Card.Text>
//                   <Card.Text className="float-start text-success">
//                     {item.discountPercentage}%
//                   </Card.Text>
//                   <Card.Body>
//                     <Card.Link href="#">
//                       <Link to={`/detail/${item.id}`}>
//                         {" "}
//                         <Button className="glow-on-hover "  >
//                           View
//                         </Button>
//                       </Link>
//                     </Card.Link>
//                   </Card.Body>
//                 </Card>
//               </div>
//             ))
//           ) : (
//             <h1>hello</h1>
//           )}
//         </div>
//       )}
      
//         <Pagination className="pagination-line pagination_container ">{items}</Pagination>
   
//     </>
//   );
// };
// export default ProductDisplay;
