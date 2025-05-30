const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const config = getDefaultConfig(__dirname);
config.watchFolders = [path.resolve(__dirname, "../..")];
config.resolver.extraNodeModules = new Proxy(
  {},
  {
    get: (target, name) => path.join(__dirname, `node_modules/${name}`),
  }
);
module.exports = config;
