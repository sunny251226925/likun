const { injectBabelPlugin } = require('react-app-rewired');
const uglify = require('uglifyjs-webpack-plugin');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
    config = rewireLess(config, env);
    config.devServer = {
        historyApiFallback: true
    };
    config.devtool = false;
    config.plugins.push(new uglify());
    return config;
};