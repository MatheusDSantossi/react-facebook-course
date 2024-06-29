import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const LandingSection = () => {
  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#18181b"
    >
      <VStack spacing={16}>
        <VStack spacing={4} alignItems="center">
          <Avatar
            src="https://i.pravatar.cc/150?img=7"
            size="2xl"
            name="Matheus"
          />
          <Heading as="h4" size="md" noOfLines={1}>
            Hello, I am Matheus!
          </Heading>
        </VStack>
        <VStack spacing={6}>
          <Heading as="h1" size="3xl" noOfLines={1}>
            A frontend developer
          </Heading>
        </VStack>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
