import { Box, Container } from '@chakra-ui/react';
import Footer from '@/footer';
import Meta from '@/meta';
import NavBar from '@/navbar';

type Props = {
    children: any;
    router: any;
};

const Main = ({ children, router }: Props) => {
    return (
        <Box as="main" pb={8}>
            <Meta />
            <NavBar path={router.asPath} />
            <Container maxW="99999999px" pt={14}>
                {children}
                <Footer />
            </Container>
        </Box>
    );
};

export default Main;
