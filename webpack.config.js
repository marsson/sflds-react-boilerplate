const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  // Pick "development" or "production" depending on your use case
  mode: "development",

  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
    clean: true, // optional, cleans /dist on each build
  },

  resolve: {
    extensions: [".wasm", ".mjs", ".js", ".jsx", ".json"],
  },

  module: {
    rules: [
      // Babel
      {
        test: /\.jsx?$/,
        include: [
          path.join(__dirname, "src"),
          path.join(__dirname, "node_modules/@salesforce/design-system-react"),
        ],
        use: "babel-loader",
      },

      // CSS
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            // The "minimize" option has been removed. If you want to minify CSS,
            // do it via `mode: "production"` or use `css-minimizer-webpack-plugin`.
            options: {
              // No 'minimize' here
            },
          },
        ],
      },

      // Images
      {
        test: /\.(svg|gif|jpe?g|png)$/,
        // Instead of url-loader, you can use Webpack 5's asset modules
        // But if you prefer url-loader, ensure it's installed & use as below:
        use: {
          loader: "url-loader",
          options: {
            esModule: false,
          },
        },
      },

      // Fonts
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        use: {
          loader: "url-loader",
          options: {
            esModule: false,
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),

    // Modern usage of copy-webpack-plugin:
    new CopyPlugin({
      patterns: [
        {
          from: path.join(
              __dirname,
              "node_modules/@salesforce-ux/design-system/assets/"
          ),
          to: path.join(__dirname, "dist", "assets"),
        },
      ],
    }),
  ],

  // Optional for local dev, automatically serves from /dist
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
  },
};
