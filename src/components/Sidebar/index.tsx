import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
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
          <DrawerBody>
            <Accordion allowMultiple={true} allowToggle={true}>
              <AccordionItem>
                <Heading>
                  <AccordionButton>
                    <Box as="span" textAlign="left">Dashboard</Box>
                  </AccordionButton>
                </Heading>
                <AccordionPanel>
                  <AccordionButton>Sales Analytics</AccordionButton>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
