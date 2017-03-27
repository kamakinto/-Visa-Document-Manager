var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    //configuration object
    template: __dirname + '/app/index.html', //filepath to the current html file, the one we want to copy and move
    filename: 'index.html', //name of the newly created HTML file
    inject: 'body'
});



module.exports = {
    entry: __dirname + '/app/index.js', //entry point of where webpack should start searching
    module: {
        loaders:[ //info needed for file transformations
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["react-hot","babel-loader"]
            },
            {
                test: /\.css$/,
                loaders: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass?outputStyle=compressed'
            }

        ]
    },
    sassLoader:{
        includePaths: [
            './node_modules'
            // this is required only for NPM < 3.
            // Dependencies are flat in NPM 3+ so pointing to
            // the internal grommet/node_modules folder is not needed
        ]
    },
    output: { //Where you want the output saved
        filename: 'transformed.js',
        path: __dirname + '/build'
    },
   plugins: [HTMLWebpackPluginConfig]
};