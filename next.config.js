/** @type {import('next').NextConfig} */

const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : '';

module.exports = {
    output: 'export',
    staticPageGenerationTimeout: 1000,
    images: {
        domains: ['lapla-cogito.github.io'],
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
    publicRuntimeConfig: { urlPrefix },
};
