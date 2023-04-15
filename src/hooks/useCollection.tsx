import React, { useState, useEffect } from 'react';
import {
  onSnapshot,
  collection,
  query,
  DocumentData,
  CollectionReference
} from 'firebase/firestore';
import { db } from '../firebase';

interface Channels {
  id: string,
  channel: DocumentData;
}

const useCollection = (data: string) => {
  const [documents, setDocuments] = useState<Channels[]>([]);
  const collectionRef: Query<DocumentData> = query(collection(db, data));

  useEffect(() => {
    onSnapshot(collectionRef, (querySnapshot) => {
      const channelResults: Channels[] = [];
      querySnapshot.docs.forEach((doc) =>
        channelResults.push({
          id: doc.id,
          channel: doc.data(),
        })
      );
      setDocuments(channelResults);
    });
  }, []);

  return { documents };
}

export default useCollection