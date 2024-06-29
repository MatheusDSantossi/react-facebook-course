// Alert.js
import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useAlertContext } from "../context/AlertContext";

const Alert = () => {
  const { isOpen, message, type } = useAlertContext();

  if (!isOpen) return null;

  return (
    <Box
      position="fixed"
      bottom="20px"
      left="50%"
      transform="translateX(-50%)"
      backgroundColor={type === "success" ? "green.500" : "red.500"}
      color="white"
      p={3}
      borderRadius="md"
      boxShadow="lg"
    >
      <Text>{message}</Text>
    </Box>
  );
};

export default Alert;
