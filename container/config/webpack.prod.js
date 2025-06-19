const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
const commonConfig = require('../config/webpack.common');

// Defined when we build the app through CI/CD Pipeline
const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode: 'production',
    output: {
        /**
         * When we build the files for prod, all the files will use this as a template
         * name for file - hash for contents of the file
         * For caching issues 
        **/
        filename: '[name].[contenthash].js' 
    },
    plugins: [ 
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                // Assuming the marketing remoteEntry file is nested in a folder named marketing
                marketing: `marketing@${domain}/marketing/remoteEntry.js`
            },
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, prodConfig)