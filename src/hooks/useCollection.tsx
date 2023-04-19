import { useState, useEffect } from "react";
import {
  onSnapshot,
  collection,
  DocumentData,
  CollectionReference,
} from "firebase/firestore";
import { db } from "../firebase";

interface Channels {
  id: string;
  channel: DocumentData;
}

const useCollection = (data: string) => {
  const [documents, setDocuments] = useState<Channels[]>([]);
  const collectionRef: CollectionReference<DocumentData> = collection(db, data);

  useEffect(() => {
    onSnapshot(collectionRef, (querySnapshot: any) => {
      const channelResults: Channels[] = [];
      querySnapshot.docs.forEach((doc: any) =>
        channelResults.push({
          id: doc.id,
          channel: doc.data(),
        })
      );
      setDocuments(channelResults);
    });
  }, []);

  return { documents };
};

export default useCollection;
