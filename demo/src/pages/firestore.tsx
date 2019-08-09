/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import {
  firestore,
  // useFirestoreDoc,
  useFirestoreQuery,
  useAuth,
} from "gatsby-theme-firebase";
import Button from "gatsby-theme-firebase/src/components/Button";
import { Layout } from "../components";
import { Code, CodeBlock, Header } from "../components/Styles";

interface Task {
  _id: string;
  priority: string;
  task: string;
}

const FirestoreDemo = () => {
  const { isLoggedIn } = useAuth();
  // const [task] = useFirestoreDoc<Task>(
  //   firestore.collection("tasks").doc('abc'),
  // );
  const [tasks, isLoading] = useFirestoreQuery<Task>(
    firestore.collection("tasks").orderBy("priority", "asc"),
  );

  return (
    <Layout>
      <Header title="Firestore hooks" isLoggedIn={isLoggedIn} />
      <p sx={{ mt: 3, mb: 2 }}>
        <strong>Available hooks:</strong>
        <Code>{`useFirestoreDoc`}</Code> and <Code>{`useFirestoreQuery`}</Code>
      </p>
      <h2>Usage</h2>
      <CodeBlock
        sx={{ mt: 2 }}
        link={
          "https://github.com/epilande/gatsby-theme-firebase/blob/master/demo/src/pages/firestore.tsx"
        }
        title="firestore.tsx"
      >
        {`import { firestore, useFirestoreQuery } from "gatsby-theme-firebase";

...

const [tasks, isLoading] = useFirestoreQuery(
  firestore.collection("tasks").orderBy("priority", "asc"),
);

...

<div>
  {isLoading ? (
    <p>Loading...</p>
  ) : (
    <ol>
      {tasks.map(task => task && <li key={task._id}>{task.task}</li>)}
    </ol>
  )}
<div>
`}
      </CodeBlock>
      <h2 sx={{ mb: 1 }}>Demo</h2>
      <p sx={{ mb: 2 }}>This list is loaded from the code above.</p>
      <div
        sx={{
          bg: "muted",
          p: 2,
          pl: 4,
        }}
      >
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ol>
            {tasks.map(task => task && <li key={task._id}>{task.task}</li>)}
          </ol>
        )}
      </div>

      <Link sx={{ display: "inline-block", mt: 3, mr: 3 }} to="/">
        <Button>Back</Button>
      </Link>
    </Layout>
  );
};

export default FirestoreDemo;
