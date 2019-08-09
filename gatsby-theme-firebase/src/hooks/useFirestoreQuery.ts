import * as React from "react";
import { firestore } from "firebase";

const useFirestoreQuery = <T extends firestore.DocumentData>(
  query: firestore.Query,
): [(T | null)[], boolean, Error | null] => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<Error | null>(null);
  const [docs, setDocs] = React.useState<(T | null)[]>([]);

  React.useEffect(() => {
    const unsubscribe = query.onSnapshot(
      (querySnapshot: firestore.QuerySnapshot) => {
        setIsLoading(false);
        setDocs(
          querySnapshot.docs.map(doc => {
            if (!doc.exists) return null;
            return {
              _id: doc.id,
              ...(doc.data() as T),
            };
          }),
        );
      },
      (err: Error) => {
        setError(err);
      },
    );

    return () => unsubscribe();
  }, []);

  return [docs, isLoading, error];
};

export default useFirestoreQuery;
