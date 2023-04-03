/* eslint-disable no-console */
import { deleteDoc, doc, Firestore } from "firebase/firestore";

const deleteSnapshot = async (db: Firestore, docId: string) => {
  try {
    await deleteDoc(doc(db, "snapshots", docId));
  } catch (e) {
    if (e instanceof Error) {
      console.error(`Error in Delete Snapshot function with ${e.message}`);
    }
    console.error(e);
  }
};

export default deleteSnapshot;
