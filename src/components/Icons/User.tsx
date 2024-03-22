import { Icon, IconProps } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa6";

const UserIcon = (props: IconProps & { variant?: string | undefined }) => {
  return <Icon as={FaUser} fontVariant={props.variant} {...props} />;
};

export default UserIcon;
