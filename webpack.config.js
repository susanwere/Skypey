const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /(\.css)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
    },
    {
        test: /(\.css)$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader']
    }
    ]
  },
  plugins: [htmlWebpackPlugin]
};