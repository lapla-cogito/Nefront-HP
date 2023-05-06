import { forwardRef } from 'react';
import Logo from './logo';
import {
    Container,
    Box,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-scroll';

const LinkItem = ({ href, path, target, children }) => {
    return (
        <Link activeClass="active" to={href} spy={true} smooth={true} duration={500}>
            <p className="textWrapper">
                <span className="pseudoElement pseudoElement__scale">{children}</span>
            </p>
        </Link>
    );
};

const ContactLinkItem = ({ href, children }) => {
    return (
        <a className="hovernefro" href={href} target="_blank" rel="noreferrer noopener">
            {children}
        </a>
    );
};

const MenuLink = forwardRef((props, ref) => (
    <a href={ref} target="_blank" rel="noreferrer noopener" {...props} />
));

const HambItem = ({ href, path, target, children, ...props }) => {
    return (
        <Link activeClass="active" to={href} spy={true} smooth={true} duration={500} {...props}>
            {children}
        </Link>
    );
};

const Navbar = (props) => {
    const { path } = props;

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            h="50px"
            bg="#ffffff40"
            css={{ backdropFilter: 'blur(10px)' }}
            zIndex={2}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="9999px"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>
                <Stack
                    direction={{ base: 'column', lg: 'row' }}
                    display={{ base: 'none', lg: 'flex' }}
                    width={{ base: 'full', lg: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, lg: 0 }}
                    className="navi"
                    spacing={10}
                >
                    <LinkItem href="about" path={path}>
                        About
                    </LinkItem>
                    <LinkItem href="product" path={path}>
                        Product
                    </LinkItem>
                    <LinkItem href="usecase" path={path}>
                        Usecase
                    </LinkItem>
                    <LinkItem href="news" path={path}>
                        News
                    </LinkItem>
                    <LinkItem href="members" path={path}>
                        Members
                    </LinkItem>
                    <LinkItem href="company" path={path}>
                        Company
                    </LinkItem>
                    <ContactLinkItem
                        href="https://forms.gle/HJXsrsk5myVrmEqC6"
                        isExternal={true}
                        path={path}
                        style={{
                            borderRadius: '10px',
                        }}
                    >
                        Contact
                    </ContactLinkItem>
                </Stack>

                <Box flex={1} align="right">
                    <Box ml={2} display={{ base: 'inline-block', lg: 'none' }}>
                        <Menu isLazy id="navbar-menu">
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"
                                colorScheme="black"
                            />
                            <MenuList>
                                <MenuItem as={HambItem} href="about">
                                    About
                                </MenuItem>
                                <MenuItem as={HambItem} href="product">
                                    Product
                                </MenuItem>
                                <MenuItem as={HambItem} href="usecase">
                                    Usecase
                                </MenuItem>
                                <MenuItem as={HambItem} href="news">
                                    News
                                </MenuItem>
                                <MenuItem as={HambItem} href="members">
                                    Members
                                </MenuItem>
                                <MenuItem as={HambItem} href="company">
                                    Company
                                </MenuItem>
                                <MenuItem as={MenuLink} href="https://forms.gle/HJXsrsk5myVrmEqC6">
                                    Contact
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Navbar;
