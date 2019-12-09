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

## Why?

You want to add Firebase to your Gatsby application. You want a login page that _"Just Works"_. You want to make life easier with React [Hooks](#hooks) and you want a solution that's simple and extendable.

This Gatsby Theme gives you all of that and more! Take full advantage of Firebase + Gatsby without the hassle of setting it up!

## What's in the box?

- 🔥 Firebase configured and ready to go!
- 💯 Easy to set up authentication + social logins with [`<Form />`](#just-want-the-login-form), [`<FormState />`](#just-want-the-login-form), & [`<SocialLogins />`](#just-want-the-social-login-buttons).
- 🎣 Hooks: [`useAuth`](#useauth), [`useFirestoreDoc`](#usefirestoredoc), [`useFirestoreQuery`](#usefirestorequery).
- 🔐 [`/login`](https://github.com/epilande/gatsby-theme-firebase/blob/master/gatsby-theme-firebase/src/pages/login.tsx) page automatically set up. Configurable via [`loginPath`](#theme-options).
- ⛅ Shadowable login event handlers. [docs](#shadowing) | [demo](https://github.com/epilande/gatsby-theme-firebase/tree/master/demo/src/gatsby-theme-firebase/firebase/auth) | [source](https://github.com/epilande/gatsby-theme-firebase/tree/master/gatsby-theme-firebase/src/firebase/auth).
- 🎨 Fully customizable & extendable with `theme-ui`.
- 🏷 Written in TypeScript.

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
        socialLogins: ["google", "twitter", "facebook", "github"],
      },
    },
  ],
};
```

## Theme options

| Key                 | Default     | Required | Description                                                                                |
| ------------------- | ----------- | -------- | ------------------------------------------------------------------------------------------ |
| `credentials`       | `undefined` | `true`   | Configure Firebase credentials.                                                            |
| `loginPath`         | `undefined` | `false`  | Set login page path. If `undefined`, no login page will be created.                        |
| `loginRedirectPath` | `/`         | `false`  | On successful login, redirect to this path.                                                |
| `socialLogins`      | `[]`        | `false`  | Enable social logins in the login form. e.g. `['google', 'twitter', 'facebook', 'github']` |

## Just want the login form?

Don't like the login page layout?

No problem! Don't set the `loginPath` theme option (this will prevent the page from being created). Then use the `<FormState.Provider />` and `<Form />` component and embed it in any page/layout.

```jsx
import { Form, FormState } from "gatsby-theme-firebase";

const CustomLogin = () => (
  <Layout>
    <h1>Custom Login</h1>
    <FormState.Provider>
      <Form
        onLoginSuccess={user => {
          navigate("/profile");
        }}
        onSignUpSuccess={user => {
          saveUserToDatabase(user).then(() => {
            navigate("/welcome");
          });
        }}
        onResetSuccess={() => {
          setMessage("Email sent!");
        }}
      />
    </FormState.Provider>
  </Layout>
);
```

To see an example, check out the login modal: [demo site](https://gatsby-theme-firebase.netlify.com/) | [`demo/src/components/LoginModal.tsx`](https://github.com/epilande/gatsby-theme-firebase/blob/master/demo/src/components/LoginModal.tsx)

## Just want the social login buttons?

Don’t need a full login form and only need social logins?

No problem! Use the `<SocialLogins />` component:

```jsx
import { SocialLogins } from "gatsby-theme-firebase";

<SocialLogins
  onSuccess={user => {
    doSomethingWith(user);
  }}
/>;
```

To see an example, check out social logins: [demo site](https://gatsby-theme-firebase.netlify.com/social-logins) | [`demo/src/pages/social-logins.tsx`](https://github.com/epilande/gatsby-theme-firebase/blob/master/demo/src/pages/social-logins.tsx)

## Hooks

### useAuth

```js
const { isLoading, isLoggedIn, profile } = useAuth();
```

**Example:**

```jsx
import { auth, useAuth } from "gatsby-theme-firebase";

export default () => {
  const { isLoading, isLoggedIn, profile } = useAuth();
  return (
    <div>
      {isLoading && <p>Loading..</p>}
      {profile && <p>Hello {profile.displayName}</p>}
      {isLoggedIn && <button onClick={() => auth.signOut()}>Sign Out</button>}
    </div>
  );
};
```

source: [`gatsby-theme-firebase/src/hooks/useAuth.ts`](https://github.com/epilande/gatsby-theme-firebase/blob/master/gatsby-theme-firebase/src/hooks/useAuth.ts)

### useFirestoreDoc

```js
const [data, isLoading, error] = useFirestoreDoc(docRef);
```

**Example:**

```jsx
import { firestore, useFirestoreDoc } from "gatsby-theme-firebase";

export default () => {
  const [data, isLoading] = useFirestoreDoc(
    firestore.collection("tasks").doc("abc"),
  );
  return (
    <div>
      {isLoading && <p>Loading..</p>}
      {data && <div>{data.task}</div>}
    </div>
  );
};
```

source: [`gatsby-theme-firebase/src/hooks/useFirestoreDoc.ts`](https://github.com/epilande/gatsby-theme-firebase/blob/master/gatsby-theme-firebase/src/hooks/useFirestoreDoc.ts)

### useFirestoreQuery

```js
const [data, isLoading, error] = useFirestoreQuery(query);
```

**Example:**

```jsx
import { firestore, useFirestoreQuery } from "gatsby-theme-firebase";

export default () => {
  const [tasks, isLoading] = useFirestoreQuery(
    firestore.collection("tasks").orderBy("priority", "asc"),
  );
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ol>
          {tasks.map(task => task && <li key={task._id}>{task.task}</li>)}
        </ol>
      )}
    </div>
  );
};
```

source: [`gatsby-theme-firebase/src/hooks/useFirestoreQuery.ts`](https://github.com/epilande/gatsby-theme-firebase/blob/master/gatsby-theme-firebase/src/hooks/useFirestoreQuery.ts)

## Shadowing

Gatsby Themes has a concept called [**Shadowing**](https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/), which allow users to override a file in a gatsby theme.

To start shadowing, create a folder with the theme name `gatsby-theme-firebase` in your project's `src` directory.

Now you're able to override any file in the [theme](https://github.com/epilande/gatsby-theme-firebase/tree/master/gatsby-theme-firebase/src).

For example, if you want to override the `handleSignUpSuccess` function, create a file:

```
src/gatsby-theme-firebase/firebase/auth/handleSignUpSuccess.js
```

Then do whatever you want in that file (i.e. save the user to the database).
Just make sure the return type is the same as the original, which in this case is a `function`.

```js
// Shadowing handleSignUpSuccess.js
import { navigate } from "gatsby";

export default async ({ user, loginRedirectPath, setErrorMessage }) => {
  try {
    await saveUserToDatabase(user);
    navigate(loginRedirectPath);
  } catch (error) {
    setErrorMessage(error.message);
  }
};
```

Now the `login` page will pick up the shadowed file and use that handler instead of the default one.

Here's a demo of `handleLoginSuccess` being shadowed: [`demo/src/gatsby-theme-firebase/firebase/auth/handleLoginSuccess.js`](https://github.com/epilande/gatsby-theme-firebase/blob/master/demo/src/gatsby-theme-firebase/firebase/auth/handleLoginSuccess.ts)

## Demos

- **Login Page:** [Demo](https://gatsby-theme-firebase.netlify.com/login) | [Code](https://github.com/epilande/gatsby-theme-firebase/blob/master/gatsby-theme-firebase/src/pages/login.tsx)
- **Login Modal:** [Demo](https://gatsby-theme-firebase.netlify.com/) | [Code](https://github.com/epilande/gatsby-theme-firebase/blob/master/demo/src/components/LoginModal.tsx)
- **Social Logins:** [Demo](https://gatsby-theme-firebase.netlify.com/social-logins) | [Code](https://github.com/epilande/gatsby-theme-firebase/blob/master/demo/src/pages/social-logins.tsx)
- **Protected Route:** [Demo](https://gatsby-theme-firebase.netlify.com/protected) | [Code](https://github.com/epilande/gatsby-theme-firebase/blob/master/demo/src/pages/protected.tsx)
- **Firestore Hooks:** [Demo](https://gatsby-theme-firebase.netlify.com/firestore) | [Code](https://github.com/epilande/gatsby-theme-firebase/blob/master/demo/src/pages/firestore.tsx)

## Dev

### Set up env variables

Go to the demo application directory, copy the `.env.example` -> `.env.development`. Fill in the required environment variables before starting up the client dev server.

### Quick start

This project uses `yarn workspaces`. Once you've set up the env variables, you can run the following to start the dev server.

```sh
$ yarn && yarn dev
```

### Available Scripts

#### `$ yarn dev`

This will run the demo app in development mode.

Navigate to [http://localhost:8000](http://localhost:8000) to view it in the browser.

#### `$ yarn build`

This will build the demo app for production.

Outputs to the `demo/public` folder.

## Credits

- [react-firebase-hooks](https://github.com/CSFrequency/react-firebase-hooks) - Reusable React Hooks for Firebase. (Recommended if you need more advanced hooks 👍)
- [react-gatsby-firebase-authentication](https://github.com/the-road-to-react-with-firebase/react-gatsby-firebase-authentication) - Starter boilerplate for authentication with Firebase.
- [gatsby-starter-firebase](https://github.com/muhajirdev/gatsby-starter-firebase) - Gatsby starter with Firebase.
- [gatsby-plugin-firebase](https://github.com/alexluong/gatsby-plugin-firebase) - Provides drop-in support for Firebase.
- [gatsby-theme-auth0](https://github.com/epilande/gatsby-theme-auth0) - Gatsby theme for adding Auth0.
