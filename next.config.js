/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.cache = false; // 캐시 비활성화
    return config;
  },
  images: {
    domains: ['images.unsplash.com'], // 필요한 경우 외부 도메인 추가
  },
}

module.exports = nextConfig 