import Head from "next/head";
import dynamic from "next/dynamic";
import NavBar from "../navbar";
import { Box, Container } from "@chakra-ui/react";
import Footer from "../footer";

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="株式会社Nefrontは屋内ARクラウドサービスIndooARを開発しています。"
        />
        <meta name="author" content="Nefront Inc." />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
        <meta property="og:site_name" content="Nefront Inc." />
        <meta name="og:title" content="Nefront Inc." />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.nefront.com/nefrontlogo.png"
        />
        <title>株式会社Nefront</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}

        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
