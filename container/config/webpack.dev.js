const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json');

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8080/' 
    },
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: '/index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js',
                auth: 'auth@http://localhost:8082/remoteEntry.js',
                dashboard: `dashboard@http://localhost:8083/remoteEntry.js`,
            },
            // An Array of values May get tedious for large projects requiring many dependencies in production
            shared: packageJson.dependencies,
        }),
    ]
}

// devConfig will override any commonalities between the two configs
module.exports = merge(commonConfig, devConfig)