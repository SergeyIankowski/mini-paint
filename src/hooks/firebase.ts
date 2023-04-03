import { useContext } from "react";
import FirebaseContext from "../context/Firebase/firebaseContext";
import FirebaseContextType from "../context/Firebase/FirebaseContext.type";

const useFirebaseContext = () => {
  const { auth, db } = useContext(FirebaseContext) as FirebaseContextType;
  return { auth, db };
};

export default useFirebaseContext;
