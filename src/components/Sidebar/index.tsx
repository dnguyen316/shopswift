import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  return (
    <>
      <IconButton
        aria-label="Hamburger"
        icon={
          <HamburgerIcon color={`var(--accent-dark) !important`} boxSize={7} />
        }
        variant="iconButton"
        className="ml-[-8px]"
        ref={btnRef}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Logo</DrawerHeader>
          <DrawerBody>Content</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
