const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = webpackConfigEnv => {
  const defaultConfig = singleSpaDefaults({
    orgName: "discostudebaker",
    projectName: "styleguide",
    devServer: {
      port: 8082
    },
    webpackConfigEnv
  });

  return webpackMerge.smart(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            //"style-loader",
            //"css-loader",
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  ident: "postcss",
                  plugins: [require("tailwindcss"), require("autoprefixer")]
                }
              }
            }
          ]
        }
      ]
    }
  });
};
