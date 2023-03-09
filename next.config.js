// const prod = process.env.NODE_ENV === "production";

module.exports = {
    staticPageGenerationTimeout: 1000,
    images: {
        loader: 'custom',
        path: '/components',
        domains: ['laplaciancpp.github.io'],
    },
    reactStrictMode: true,
    swcMinify: true,
    // assetPrefix: process.env.NODE_ENV === "production" ? "/Nefront-HP" : "",
    // "process.env.BACKEND_URL": prod ? "/Nefront-HP" : "",
};
