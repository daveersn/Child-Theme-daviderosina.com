// webpack.mix.js

let mix = require("laravel-mix");

mix
  .js("_dev/js/app.js", "js/app.min.js")
  .less("_dev/css/app.less", "css/app.min.css")
  .setResourceRoot("../")
  .setPublicPath("./")
  .webpackConfig({
    externals: {
      uikit: "UIkit",
    },
  });
