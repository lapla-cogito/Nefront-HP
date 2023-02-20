import { forwardRef } from "react";
import Logo from "./logo";
import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = "gray.800";
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? "grassTeal" : undefined}
      color={active ? "#202023" : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
};

const ContactLinkItem = ({ href, path, target, children }) => {
  return (
    <a className="hovernefro" href={href} target="_blank" rel="noopener">
      {children}
    </a>
  );
};

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
));

const Navbar = (props) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg="#ffffff40"
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="#about" path={path}>
            About
          </LinkItem>
          <LinkItem href="#product" path={path}>
            Product
          </LinkItem>
          <LinkItem href="#usecase" path={path}>
            Usecase
          </LinkItem>
          <LinkItem href="#news" path={path}>
            News
          </LinkItem>
          <LinkItem href="#members" path={path}>
            Members
          </LinkItem>
          <ContactLinkItem
            href="https://forms.gle/HJXsrsk5myVrmEqC6"
            isExternal={true}
            path={path}
            style={{
              borderRadius: "10px",
            }}
          >
            Contact
          </ContactLinkItem>
        </Stack>

        <Box flex={1} align="right">
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
                colorScheme="black"
              />
              <MenuList>
                <MenuItem as={MenuLink} href="#about">
                  About
                </MenuItem>
                <MenuItem as={MenuLink} href="#product">
                  Product
                </MenuItem>
                <MenuItem as={MenuLink} href="#usecase">
                  Usecase
                </MenuItem>
                <MenuItem as={MenuLink} href="#news">
                  News
                </MenuItem>
                <MenuItem as={MenuLink} href="#members">
                  Members
                </MenuItem>
                <MenuItem
                  as={MenuLink}
                  href="https://forms.gle/HJXsrsk5myVrmEqC6"
                  isExternal={true}
                >
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
