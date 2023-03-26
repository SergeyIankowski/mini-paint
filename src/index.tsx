import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import FirebaseContext from "./models/firebaseContext";
import { auth, db } from "./firebase";
import "./scss/main.scss";

console.log("Hello World!");

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <BrowserRouter>
    <FirebaseContext.Provider value={{ db, auth }}>
      <AppRouter />
    </FirebaseContext.Provider>
  </BrowserRouter>,
);
