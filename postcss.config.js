const isProd = process.env.NODE_ENV === "production";

module.exports = {
  map: !isProd,
  plugins: [
    require("postcss-import"),
    require("postcss-discard-comments")({
      removeAll: isProd,
    }),
    require("postcss-preset-env")({
      stage: 3, // stage controls what features get polyfilled; 3 is default, tweak if needed
      features: {
        "nesting-rules": true, // enable nesting support
      },
      // autoprefixer is included, and respects your browserslist config
    }),
    ...(isProd ? [require("cssnano")] : []),
  ],
};
