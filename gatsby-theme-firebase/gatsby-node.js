const path = require("path");
const crypto = require("crypto");

const checkRequiredCreds = creds => {
  Object.entries(creds).map(([key, value]) => {
    if (!value) {
      throw new Error(`Required option "${key}" not specified`);
    }
  });
};

exports.onCreateWebpackConfig = ({ plugins, actions }, themeOptions) => {
  const {
    credentials: {
      apiKey,
      authDomain,
      databaseURL,
      projectId,
      storageBucket,
      messagingSenderId,
      appId,
    },
  } = themeOptions;

  checkRequiredCreds({ ...themeOptions.credentials });

  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        "process.env": {
          FIREBASE_API_KEY: JSON.stringify(apiKey),
          FIREBASE_AUTH_DOMAIN: JSON.stringify(authDomain),
          FIREBASE_DATABASE_URL: JSON.stringify(databaseURL),
          FIREBASE_PROJECT_ID: JSON.stringify(projectId),
          FIREBASE_STORAGE_BUCKET: JSON.stringify(storageBucket),
          FIREBASE_MESSAGING_SENDER_ID: JSON.stringify(messagingSenderId),
          FIREBASE_APP_ID: JSON.stringify(appId),
        },
      }),
    ],
  });
};

exports.createPages = ({ actions }, themeOptions) => {
  const { createPage } = actions;
  const { loginPath } = themeOptions;

  if (loginPath) {
    createPage({
      path: loginPath,
      component: path.resolve(`${__dirname}/src/pages/login.tsx`),
    });
  }
};

exports.sourceNodes = ({ actions, schema }, themeOptions) => {
  const { createTypes, createNode } = actions;
  const {
    loginPath,
    loginRedirectPath = "/",
    socialLogins = [],
  } = themeOptions;

  createTypes(
    schema.buildObjectType({
      name: "FirebaseConfig",
      fields: {
        loginPath: { type: "String" },
        loginRedirectPath: { type: "String" },
        socialLogins: { type: "[String]" },
      },
      interfaces: ["Node"],
    }),
  );

  const firebaseConfig = {
    loginPath,
    loginRedirectPath,
    socialLogins,
  };

  createNode({
    ...firebaseConfig,
    id: "gatsby-theme-firebase-config",
    parent: null,
    children: [],
    internal: {
      type: "FirebaseConfig",
      contentDigest: crypto
        .createHash("md5")
        .update(JSON.stringify(firebaseConfig))
        .digest("hex"),
      content: JSON.stringify(firebaseConfig),
      description: "Firebase Config",
    },
  });
};
