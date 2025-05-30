module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@my-monorepo/types": "../../packages/types/src",
            "@my-monorepo/utils": "../../packages/utils/src",
            "@my-monorepo/ui": "../../packages/ui/src",
          },
          extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
        },
      ],
    ],
  };
};
