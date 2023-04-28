import { Avatar, ChakraProvider } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "../../assets/scss/myAvatar.scss";

export function MyAvatar() {
  const imageUrlProfile = JSON.parse(localStorage.getItem("image"));
  return (
    <>
      <Link to="/addprofile">
        <ChakraProvider className="chakra">
          <Avatar size="xl" src={imageUrlProfile} className="my-profile" />
        </ChakraProvider>
      </Link>
    </>
  );
}
export default MyAvatar;
