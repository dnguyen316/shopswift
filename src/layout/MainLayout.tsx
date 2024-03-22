import { Box, Container } from "@chakra-ui/react";
import { ReactNode } from "react";
import Header from "../components/Header";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Container variant="shopSwift">
      <Box height="100vh">
        <Header />
        {children}
      </Box>
    </Container>
  );
};

export default MainLayout;
