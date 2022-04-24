module.exports = {
  hooks: {
    readPackage: (pkg) => {
      if (pkg.name === "nullstack") {
        pkg.dependencies = {
          ...pkg.dependencies,
          "@babel/parser": "^7.2.2",
          "@babel/traverse": "^7.2.2",
        };
      }
      return pkg;
    }
  }
};