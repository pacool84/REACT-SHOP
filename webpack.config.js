const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"), //Dist es por convencion y significa distribution
    filename: "bundle.js",
    publicPath: "/", //Tiene relacion con react-router-dom
  },
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      //Ayuda a colocar alias para acceder a los diferentes paths que se tienen y asi tener codigo mas legible y amigable
      "@components": path.resolve(__dirname, "src/components/"),
      "@containers": path.resolve(__dirname, "src/containers/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@routes": path.resolve(__dirname, "src/routes/"),
      "@styles": path.resolve(__dirname, "src/styles/"),
      "@icons": path.resolve(__dirname, "src/assets/icons/"),
      "@logos": path.resolve(__dirname, "src/assets/logos/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, //Esto es un REGEX y se entiende todos los archivos js y jsx para identificarlos
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/, //Lee todos los archivos HTML
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/, //Permite poder trabajar con imagenes en los formatos que se configuren
        type: "asset",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 3005,
    historyApiFallback: true, //Tiene relacion con react-router-dom
  },
};
