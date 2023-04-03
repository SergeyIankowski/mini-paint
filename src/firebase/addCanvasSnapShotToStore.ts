import { User } from "firebase/auth";
import { addDoc, collection, Firestore } from "firebase/firestore";
import SnapshotStoreData from "../models/SnapshotStoreData";

const addCanvasSnapShotToStore = async (db: Firestore, user: User, canvasSnapshot: string) => {
  const data: SnapshotStoreData = {
    id: new Date().getTime(),
    email: user.email!,
    snapshot: canvasSnapshot,
  };
  await addDoc(collection(db, "snapshots"), data);
};
export default addCanvasSnapShotToStore;
