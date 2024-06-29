// Footer.js
import React from "react";
import { Box, Text, HStack, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="#18181b" color="white" py={4} textAlign="center">
      <HStack justifyContent="center" spacing={4}>
        <Text>&copy; {new Date().getFullYear()} Matheus Portfolio</Text>
        <Link href="https://github.com/your-github" isExternal>
          GitHub
        </Link>
        <Link href="https://linkedin.com/in/your-linkedin" isExternal>
          LinkedIn
        </Link>
      </HStack>
    </Box>
  );
};

export default Footer;
