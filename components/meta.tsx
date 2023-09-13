import Head from 'next/head';

const Meta = () => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta
                name="description"
                content="株式会社Nefrontは屋内ARクラウドサービスIndooARを開発しています。"
            />
            <meta name="author" content="Nefront Inc." />
            <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
            <link rel="apple-touch-icon" href="apple-touch-icon.png" sizes="180x180" />
            <meta property="og:site_name" content="Nefront Inc." />
            <meta name="og:title" content="Nefront Inc." />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://www.nefront.com/images/nefrontlogo.png" />
            <title>株式会社Nefront</title>
        </Head>
    );
};

export default Meta;
