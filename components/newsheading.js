import NextLink from "next/link";
import Image from "next/image";
import { Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Global } from "@emotion/react";

const NewsHeading = ({ children, title, date }) => (
  <Box w="100%">
      <Text fontSize={25}>
        {title}
      </Text>
      <Text fontSize={14} color="gray">
        {date}
      </Text>
      <Text fontSize={14}>{children}</Text>
  </Box>
);

export default NewsHeading
