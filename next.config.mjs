import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, { webpack }) {
        config.resolve.alias = {
            ...config.resolve.alias,
            react: path.resolve('./node_modules/react'),
            'react-dom': path.resolve('./node_modules/react-dom'),
            'react-redux': path.resolve('./node_modules/react-redux'),
            'next-i18next': path.resolve('./node_modules/next-i18next'),
            next: path.resolve('./node_modules/next'),
            'react-datepicker': path.resolve('./node_modules/react-datepicker'),
        };
    }
};

export default nextConfig;
