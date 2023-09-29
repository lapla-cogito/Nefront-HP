import React from 'react';
import { Box } from '@chakra-ui/react';

const Footer = () => {
    return (
        // @ts-ignore
        <Box align="center" opacity={0.4} fontSize="sm" py={8}>
            &copy; {new Date().getFullYear()} Nefront Inc. All Rights Reserved.
        </Box>
    );
};

export default Footer;
