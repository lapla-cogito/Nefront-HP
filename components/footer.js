import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const ParticlesConfig = dynamic(() => import("../components/config"), {
  ssr: false,
});

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Nefront Inc. All Rights Reserved.
      <ParticlesConfig />
    </Box>
  );
};

export default Footer;
