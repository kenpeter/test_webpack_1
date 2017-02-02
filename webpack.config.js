// can still use const
const webpack = require("webpack"); // no import, es5

// https://www.npmjs.com/package/extract-text-webpack-plugin
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// need to have new
// extract text plugin
// [name].bundle.css
const extractCss = new ExtractTextPlugin("[name].bundle.css");

//https://webpack.js.org/plugins/commons-chunk-plugin/
const extractCommons = new webpack.optimize.CommonsChunkPlugin({
  name: "commons",
  filename: "commons.js"
});


const config = {
  // you can see that they work on pair
  // one relative and the other absolute
  //context: __dirname + "/src", // it is like cd to this path
  //entry: __dirname + "/src/app.js", // this based on context
  
  // http://jonathancreamer.com/advanced-webpack-part-1-the-commonschunk-plugin/
  entry: {
    app: __dirname + "/src/app.js",
    admin: __dirname + "/src/admin.js"
  },
  
  output: {
    // [name].xxxx
    filename: "[name].bundle.js",
    path: __dirname + "/build" // but somehow path, need the full path
  },
  
  // single module
  module: {
    // many rules
    rules: [
      {
        // we need to define which TYPE of file we want to load
        test: /\.js$/,
        // we need to define where we want to load.
        include: __dirname + "/src",
        
        // so the idea is that you can use array of things
        // each other is loader + options.
        use: [
          {
              loader: "babel-loader",
              // no array?
              options: {
                // preset, use the future
                presets: [ // array
                  [ // another array
                    'es2015', 
                    { modules: false } // tree shaking
                  ]
                ]
              }
          }
        ]
      },
      
      {
        test: /\.scss$/,
        // can use loader staight away
        // sass bottom, the css loader
        // need to be array.
        loader: extractCss.extract(["css-loader", "sass-loader"])
      },
      
      {
        test: /\.(png|jpg)$/,
        use: [
            // can use man loaders here, with options.
            // https://github.com/webpack/webpack/issues/653
            {
              loader: "url-loader",
              options: { limit: 10000 }
            }
          ]
      }, 
    ]
  },
  
  // array of plugins
  // assign const
  plugins: [
    extractCommons,
    extractCss 
  ]
}

// https://webpack.github.io/docs/configuration.html
module.exports = config;
