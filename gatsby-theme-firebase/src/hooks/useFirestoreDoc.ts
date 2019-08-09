import * as React from "react";
import { firestore } from "firebase";

const useFirestoreDoc = <T extends firestore.DocumentData>(
  docRef: firestore.DocumentReference,
): [T | null, boolean, Error | null] => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<Error | null>(null);
  const [doc, setDoc] = React.useState<T | null>(null);

  React.useEffect(() => {
    const unsubscribe = docRef.onSnapshot(
      (snapshot: firestore.DocumentSnapshot) => {
        setIsLoading(false);
        if (!snapshot.exists) return null;
        setDoc({
          _id: snapshot.id,
          ...(snapshot.data() as T),
        });
      },
      (err: Error) => {
        setError(err);
      },
    );

    return () => unsubscribe();
  }, []);

  return [doc, isLoading, error];
};

export default useFirestoreDoc;
