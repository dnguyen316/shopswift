import {
  BellIcon,
  ChatIcon,
  HamburgerIcon,
  MoonIcon,
  SearchIcon,
  SunIcon,
} from "@chakra-ui/icons";
import {
  Box,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { UserIcon } from "../../Icons";
import Sidebar from "../../Sidebar";

const countryTranslationList = [
  {
    id: "en",
    info: {
      name: "English",
      code: "en",
      flag: "./src/assets/flags/eng.webp",
    },
  },
  {
    id: "de",
    info: {
      name: "Deutsch",
      code: "de",
      flag: "./src/assets/flags/de.webp",
    },
  },
  {
    id: "dk",
    info: {
      name: "Dansk",
      code: "dk",
      flag: "./src/assets/flags/dk.webp",
    },
  },
  {
    id: "ua",
    info: {
      name: "Україна",
      code: "ua",
      flag: "./src/assets/flags/ua.webp",
    },
  },
];

const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Stack direction={["row"]} justifyContent="space-between">
      <Box>
        <Sidebar />
      </Box>
      <Stack direction={["row"]} spacing={{ sm: "3px" }}>
        <IconButton
          aria-label="Search"
          icon={<SearchIcon boxSize={6} />}
          variant="iconButton"
        />
        <IconButton
          aria-label="Toggle Theme"
          icon={
            colorMode === "light" ? (
              <SunIcon boxSize={6} />
            ) : (
              <MoonIcon boxSize={6} />
            )
          }
          variant="iconButton"
          onClick={toggleColorMode}
        />
        <Box minW="24px" className="flex items-center hover:cursor-pointer">
          <Menu placement="bottom" isOpen={isOpen}>
            <MenuButton onMouseEnter={onOpen} onMouseLeave={onClose}>
              <Image
                boxSize={6}
                w="24px"
                objectFit="cover"
                src="./src/assets/flags/eng.webp"
                alt="English"
                borderRadius="50%"
              />
            </MenuButton>
            <MenuList
              className="relative triangle"
              minWidth="150px"
              onMouseEnter={onOpen}
              onMouseLeave={onClose}
            >
              {countryTranslationList.map((country) => (
                <MenuItem
                  _hover="none"
                  className={`hover:!text-[var(--accent-dark)] w-[150px]`}
                  key={country.id}
                >
                  <Image
                    boxSize={6}
                    w="20px"
                    h="auto"
                    objectFit="cover"
                    src={country.info.flag}
                    alt={country.info.name}
                    borderRadius="50%"
                  />
                  <Text ml="8px" fontSize={12} fontWeight={600}>
                    {country.info.name} {`(${country.info.code.toUpperCase()})`}
                  </Text>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Box>
        <IconButton
          aria-label="Notification"
          icon={<BellIcon boxSize={6} />}
          variant="iconButton"
          className="relative notification-status before:bg-red-500 before:right-2"
        />
        <IconButton
          aria-label="Message"
          icon={<ChatIcon boxSize={6} />}
          variant="iconButton"
          className="relative notification-status before:bg-green-500"
        />
        <IconButton
          aria-label="User"
          icon={<UserIcon color="white" boxSize={4} variant="user" />}
          variant="user"
          size="sm"
          className="ml-2 mt-[4px] notification-status before:top-[24px] before:w-[10px] before:h-[10px] before:bg-green-500"
        />
      </Stack>
    </Stack>
  );
};

export default MobileMenu;
