import NextLink from 'next/link';
import React from 'react';
import { Box, Button, Container, Divider, Heading, Text } from '@chakra-ui/react';

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
