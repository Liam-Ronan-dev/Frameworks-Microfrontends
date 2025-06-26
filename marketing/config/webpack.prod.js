const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        // whenever we load up remoteEntry.js in prod through the container
        // the remoteEntry file would know where to find all the files that were created by webpack
        publicPath: '/marketing/latest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingApp': './src/bootstrap'
            },
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, prodConfig)