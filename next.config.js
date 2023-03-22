const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'app2',
        remotes: {
          home: `home@http://localhost:3000/_next/static/${
            isServer ? 'ssr' : 'chunks'
          }/remoteEntry_home.js`
        },
        filename: 'static/chunks/remoteEntry_app2.js',
        exposes: {},
        extraOptions: {
          exposePages: true
        },
        shared: {
          // whatever else
        }
      })
    );

    return config;
  }
};

// const { FederatedTypesPlugin } = require('@module-federation/typescript');
//
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   webpack(config, options) {
//     const { isServer } = options;
//     config.plugins.push(
//       new FederatedTypesPlugin({
//         federationConfig: {
//           name: 'app2',
//           remotes: {
//             home: `home@http://localhost:3000/_next/static/${
//               isServer ? 'ssr' : 'chunks'
//             }/remoteEntry_home.js`
//           },
//           filename: 'static/chunks/remoteEntry_app2.js',
//           exposes: {},
//           extraOptions: {
//             exposePages: true
//           },
//           shared: {
//             // whatever else
//           }
//         }
//         // ...
//       })
//     );
//     return config;
//   }
// };

module.exports = nextConfig;
