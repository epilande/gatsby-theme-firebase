<div align="center">
  <img width="320" src="https://raw.githubusercontent.com/epilande/gatsby-theme-firebase/master/demo/src/GatsbyFirebase.svg?sanitize=true">
  <h1>gatsby-theme-firebase 🔥</h1>
</div>

 <p align="center">
  <strong>A Gatsby Theme for adding Firebase to your application.</strong>
</p>

[![GitHub](https://img.shields.io/github/license/epilande/gatsby-theme-firebase?style=flat-square)](https://github.com/epilande/gatsby-theme-firebase/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/gatsby-theme-firebase?style=flat-square)](https://www.npmjs.com/package/gatsby-theme-firebase)
[![Netlify Status](https://api.netlify.com/api/v1/badges/02fddd63-758b-4e37-9af9-fdc0bc45c5d7/deploy-status)](https://app.netlify.com/sites/gatsby-theme-firebase/deploys)

## What's in the box?

- 🔥 Firebase configured and ready to go!
- 💯 Easy to set up authentication + social logins.
- 🔋 Batteries included: [`useAuth`](https://github.com/epilande/gatsby-theme-firebase/blob/master/gatsby-theme-firebase/src/hooks/useAuth.ts), [`<Form />`](https://github.com/epilande/gatsby-theme-firebase/blob/master/gatsby-theme-firebase/src/components/Form.tsx), [`<FormState />`](https://github.com/epilande/gatsby-theme-firebase/blob/master/gatsby-theme-firebase/src/components/FormState.tsx), & [`<SocialLogins />`](https://github.com/epilande/gatsby-theme-firebase/blob/master/gatsby-theme-firebase/src/components/SocialLogins.tsx).
- 🔐 [`/login`](https://github.com/epilande/gatsby-theme-firebase/blob/master/gatsby-theme-firebase/src/pages/login.tsx) page automatically set up. Configurable via [`loginPath`](#theme-options).
- 🎨 Fully customizable & extendable.

**[DEMO](https://gatsby-theme-firebase.netlify.com/)**

## Installation

```sh
$ npm install --save gatsby-theme-firebase
```

## Usage

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-firebase",
      options: {
        credentials: {
          apiKey: process.env.FIREBASE_API_KEY,
          authDomain: process.env.FIREBASE_AUTH_DOMAIN,
          databaseURL: process.env.FIREBASE_DATABASE_URL,
          projectId: process.env.FIREBASE_PROJECT_ID,
          storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.FIREBASE_APP_ID,
        },
        loginPath: "/login",
        loginRedirectPath: "/dashboard",
        socialLogins: ["google", "twitter", "github"],
      },
    },
  ],
};
```

## Theme options

| Key                 | Default     | Required | Description                                                                    |
| ------------------- | ----------- | -------- | ------------------------------------------------------------------------------ |
| `credentials`       | `undefined` | `true`   | Configure Firebase credentials.                                                |
| `loginPath`         | `undefined` | `false`  | Set login page path. If `undefined`, no login page will be created.            |
| `loginRedirectPath` | `/`         | `false`  | On successful login, redirect to this path.                                    |
| `socialLogins`      | `[]`        | `false`  | Enable social logins in the login form. e.g. `['google', 'twitter', 'github']` |

## Just want the login form?

Don't like the login page layout?

No problem! Don't set the `loginPath` theme option (this will prevent the page from being created). Then use the `<FormState.Provider />` and `<Form />` component and embed it in any page/layout.

```jsx
import { Form, FormState } from "gatsby-theme-firebase";

const CustomLogin = () => (
  <Layout>
    <h1>Custom Login</h1>
    <FormState.Provider>
      <Form />
    </FormState.Provider>
  </Layout>
);
```

To see an example, check out the login modal demo: [`demo/src/components/LoginModal.tsx`](https://github.com/epilande/gatsby-theme-firebase/blob/master/demo/src/components/LoginModal.tsx) | [demo site](https://gatsby-theme-firebase.netlify.com/)

## Just want the social login buttons?

Don’t need a full login form and only need social logins?

No problem! Use the `<SocialLogins />` component:

```jsx
import { SocialLogins } from "gatsby-theme-firebase";

<SocialLogins
  onSuccess={() => {
    navigate("/");
  }}
/>;
```

**[View demo page](https://gatsby-theme-firebase.netlify.com/social-logins)**.

## Available Scripts

#### `$ yarn dev`

This will run the demo app in development mode.

Navigate to [http://localhost:8000](http://localhost:8000) to view it in the browser.

#### `$ yarn build`

This will build the demo app for production.

Outputs to the `demo/public` folder.

## Related

- [gatsby-theme-auth0](https://github.com/epilande/gatsby-theme-auth0) - Gatsby theme for adding Auth0.
