/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'img.clerk.com',
        }, ],
    },
    // distDir: 'build',
    // output: 'export',
};

export default nextConfig;