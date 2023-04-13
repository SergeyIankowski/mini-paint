import { DocumentData, QuerySnapshot } from "firebase/firestore";

const covertStoreData = (storeData: QuerySnapshot<DocumentData>) => {
  return storeData?.docs.map((doc) => {
    const obj = doc.data();
    return { snapshot: obj.snapshot, id: obj.id, email: obj.email, docId: doc.id };
  });
};

export default covertStoreData;
