// import { Avatar, ChakraProvider } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
// import "../../assets/scss/myAvatar.scss";

// export function MyAvatar() {
//   const imageUrlProfile = JSON.parse(localStorage.getItem("image"));
//   return (
//     <>
//       <Link to="/addprofile">
//         <ChakraProvider className="chakra">
//           <Avatar  size="xl" src={imageUrlProfile} className="my-profile" />
//         </ChakraProvider>
//       </Link>
//     </>
//   );
// }
// export default MyAvatar;
import { Avatar, ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import AddProfile from "./AddProfile";
import "../../assets/scss/myAvatar.scss";

export function MyAvatar() {
  const imageUrlProfile = JSON.parse(localStorage.getItem("image"));

  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <span onClick={() => setLgShow(true)}>
        <ChakraProvider className="chakra">
          <Avatar size="xl" src={imageUrlProfile} className="my-profile" />
        </ChakraProvider>
      </span>
      <Modal
   
        size="xl"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Hello, click on image first , drag and choose image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddProfile />
        </Modal.Body>
      </Modal>
    </>
  );
}
