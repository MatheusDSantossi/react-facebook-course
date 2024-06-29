import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "React Space",
    description: "Handy tool belt to create amazing AR components in a React app, with redux integration via mid",
    getImageSrc: () => "./images/photo1.jpg",
  },
  {
    title: "React Infinite Scroll",
    description: "Handy tool belt to create amazing AR components in a React app, with redux integration via mid",
    getImageSrc: () => "./images/photo2.jpg",
  },
  {
    title: "Photo Gallery",
    description: "Handy tool belt to create amazing AR components in a React app, with redux integration via mid",
    getImageSrc: () => "./images/photo3.jpg",
  },
  {
    title: "Event Planner",
    description: "Handy tool belt to create amazing AR components in a React app, with redux integration via mid",
    getImageSrc: () => "./images/photo4.jpg",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2, minmax(0, 1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            url="https://github.com/rgommezz/react-native-offline"
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
