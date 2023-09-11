import { Box } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
    return (
        // @ts-ignore
        <Box align="center" opacity={0.4} fontSize="sm">
            &copy; {new Date().getFullYear()} Nefront Inc. All Rights Reserved.
        </Box>
    );
};

export default Footer;
