// build-css.js
const fs = require("fs");
const postcss = require("postcss");

const isProd = process.env.NODE_ENV === "production";

// List of CSS files to process
const files = [
  { src: "src/assets/henk-tokens.css", dest: "public/assets/henk-tokens.css" },
  { src: "src/assets/henk-base.css", dest: "public/assets/henk-base.css" },
  { src: "src/assets/henk-atoms.css", dest: "public/assets/henk-atoms.css" },
  {
    src: "src/assets/henk-components.css",
    dest: "public/assets/henk-components.css",
  },
];

(async () => {
  for (const file of files) {
    if (!fs.existsSync(file.src)) {
      console.error(`File not found: ${file.src}`);
      continue;
    }

    const css = fs.readFileSync(file.src, "utf8");

    // Match your postcss.config.js
    const plugins = [
      require("postcss-import"),
      require("postcss-discard-comments")({ removeAll: isProd }),
      require("postcss-preset-env")({
        stage: 3,
        features: { "nesting-rules": true },
      }),
      ...(isProd ? [require("cssnano")] : []),
    ];

    const result = await postcss(plugins).process(css, {
      from: file.src,
      to: isProd ? file.dest.replace(/\.css$/, ".min.css") : file.dest,
      map: !isProd ? { inline: true } : false,
    });

    const outputFile = isProd
      ? file.dest.replace(/\.css$/, ".min.css")
      : file.dest;
    fs.writeFileSync(outputFile, result.css);

    if (result.map && !isProd) {
      fs.writeFileSync(outputFile + ".map", result.map.toString());
    }

    console.log(
      `${isProd ? "Prod" : "Dev"} build: ${file.src} → ${outputFile}`,
    );
  }
})();
