import { Box, Center } from "@chakra-ui/react";
import React from "react";
import TypeWriter from "typewriter-effect";

function TypeNefront() {
  return (
    <Box w="100%">
      <Center h="100%">
        <Box alignItems="center" fontSize={60}>
          {" "}
          <TypeWriter
            onInit={(TypeWriter) => {
              TypeWriter.typeString("<span style='color:#3054D6;'>Ne</span>w")
                .pauseFor(500)
                .deleteChars(1)
                .typeString("xt")
                .pauseFor(500)
                .deleteChars(2)
                .typeString("twork")
                .pauseFor(500)
                .deleteChars(5)
                .pauseFor(500)
                .typeString("<span style='color:#3054D6;'>front</span>end")
                .pauseFor(500)
                .deleteChars(3)
                .pauseFor(500)
                .typeString("ier")
                .pauseFor(500)
                .deleteChars(3)
                .start();
            }}
          />
        </Box>
      </Center>
    </Box>
  );
}

export default TypeNefront;
