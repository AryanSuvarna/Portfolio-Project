import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Aryan Suvarna!";
const bio1 = "An aspiring Software Developer";
const bio2 = "making ideas to reality!";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
    <FullScreenSection
        justifyContent="center"
        alignItems="center"
        isDarkBackground
        backgroundColor="#2A4365"
    >
    <VStack spacing={6}>
        <Avatar name="Aryan Suvarna" src="best.jpg" size='2xl' style={{position: "unset"}}/>
        <Heading size="md">{greeting}</Heading>
        <Heading size="lg">{bio1}</Heading>
        <Heading size="lg">{bio2}</Heading>
    </VStack>

    </FullScreenSection>
);

export default LandingSection;
