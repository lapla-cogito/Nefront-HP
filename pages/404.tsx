import NextLink from 'next/link';
import { Box, Heading, Text, Container, Divider, Button } from '@chakra-ui/react';
import React from 'react';

const NotFound = () => {
    return (
        <Container className="ce">
            <Heading as="h1">Not found</Heading>
            <Text>The page you&apos;re looking for was not found.</Text>
            <Divider my={6} />
            <Box my={6}>
                <Button as={NextLink} href="/" colorScheme="teal">
                    Return to home
                </Button>
            </Box>
        </Container>
    );
};

export default NotFound;
