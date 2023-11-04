/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig


// next.config.js
module.exports = {
    webpack: (config, { isServer }) => {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      });
  
      return config;
    },
  };
  