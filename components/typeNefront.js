import { Box, Center } from '@chakra-ui/react';
import React from 'react';
import TypeWriter from 'typewriter-effect';

function TypeNefront() {
    return (
        <Box w="100%" className="typeclass">
            <Center h="100%">
                <Box alignItems="center" fontSize={60}>
                    {' '}
                    <TypeWriter
                        onInit={(TypeWriter) => {
                            TypeWriter.typeString(
                                "<span style='color:#3054D6;'>Ne</span><span style='color:#FFFFFF;'>w</span>"
                            )
                                .pauseFor(500)
                                .deleteChars(1)
                                .typeString("<span style='color:#FFFFFF;'>xt</span>")
                                .pauseFor(500)
                                .deleteChars(2)
                                .typeString("<span style='color:#FFFFFF;'>twork</span>")
                                .pauseFor(500)
                                .deleteChars(5)
                                .pauseFor(500)
                                .typeString(
                                    "<span style='color:#3054D6;'>front</span><span style='color:#FFFFFF;'>end</span>"
                                )
                                .pauseFor(500)
                                .deleteChars(3)
                                .pauseFor(500)
                                .typeString("<span style='color:#FFFFFF;'>ier</span>")
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
