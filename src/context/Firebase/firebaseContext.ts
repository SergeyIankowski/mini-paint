import { createContext } from "react";
import FirebaseContextType from "./FirebaseContext.type";

const FirebaseContext = createContext<FirebaseContextType | null>(null);

export default FirebaseContext;
