module.exports = function (api) {
  api.cache(false);

  const presets = ["@babel/env", "@babel/react", "@babel/typescript"];
  const plugins = [
    "@babel/plugin-transform-modules-commonjs",
    "@babel/plugin-transform-runtime",
  ];

  return {
    presets,
    plugins
  };
}
