/** @type {import('next').NextConfig} */

// const prod = process.env.NODE_ENV === "production";
const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : '';

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
    staticPageGenerationTimeout: 1000,
    images: {
        loader: 'custom',
        path: '/components',
        domains: ['laplaciancpp.github.io'],
    },
    reactStrictMode: true,
    swcMinify: true,
    webpack: (config) => {
        config.resolve.fallback = { fs: false };
        return config;
    },
    assetPrefix: urlPrefix,
    basePath: urlPrefix,
    trailingSlash: true,
    // assetPrefix: process.env.NODE_ENV === "production" ? "/Nefront-HP" : "",
    // "process.env.BACKEND_URL": prod ? "/Nefront-HP" : "",
});
