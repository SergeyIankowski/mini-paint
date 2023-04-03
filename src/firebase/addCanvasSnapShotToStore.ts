/* eslint-disable no-console */
import { User } from "firebase/auth";
import { addDoc, collection, Firestore } from "firebase/firestore";
import SnapshotStoreData from "../models/SnapshotStoreData";

const addCanvasSnapShotToStore = async (db: Firestore, user: User, canvasSnapshot: string) => {
  try {
    const data: SnapshotStoreData = {
      id: new Date().getTime(),
      email: user.email!,
      snapshot: canvasSnapshot,
    };
    await addDoc(collection(db, "snapshots"), data);
  } catch (e) {
    console.error(e);
  }
};
export default addCanvasSnapShotToStore;
