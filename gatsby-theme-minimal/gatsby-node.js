const path = require("path");

exports.createPages = ({ actions }, options) => {
  const { createPage } = actions;
  const { basePath } = options;

  createPage({
    path: basePath || "/",
    component: path.resolve(`${__dirname}/src/pages/index.tsx`),
  });
};
