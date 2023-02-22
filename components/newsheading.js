import { Box, Text } from "@chakra-ui/react";

const NewsHeading = ({ children, title, date, link }) => (
  <Box w="100%">
    <span className="date">{date}</span>
    <a className="title" href={link} target="_blank" rel="noopener noreferrer">
      {title}{" "}
      <img
        src="images/external.svg"
        style={{ display: "block", margin: "auto" }}
        className="ext"
      />
    </a>
  </Box>
);

export default NewsHeading;
