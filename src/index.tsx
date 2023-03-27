import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import AppRouter from "./AppRouter";
import FirebaseContext from "./models/firebaseContext";
import { auth, db } from "./firebase";
import "./scss/main.scss";
import { setupStore } from "./store/store";

const root = createRoot(document.getElementById("root") as HTMLElement);

const store = setupStore();

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <FirebaseContext.Provider value={{ db, auth }}>
        <AppRouter />
      </FirebaseContext.Provider>
    </Provider>
  </BrowserRouter>,
);
