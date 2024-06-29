// Card.js
import React from "react";
import { Box, Image, Text, VStack, Heading } from "@chakra-ui/react";

const Card = ({ title, description, url, imageSrc }) => {
  return (
    <Box
      as="a"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      backgroundColor="white"
      _hover={{ transform: "scale(1.05)" }}
      transition="transform 0.2s"
    >
      <Image src={imageSrc} alt={`${title} screenshot`} />
      <VStack p={4} align="flex-start">
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text fontSize="sm">{description}</Text>
      </VStack>
    </Box>
  );
};

export default Card;
