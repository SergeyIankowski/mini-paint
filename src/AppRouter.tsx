import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Routes } from "react-router-dom";
import Spinner from "./components/view/Spinner/Spinner";
import useFirebaseContext from "./hooks/firebase";
import Pages from "./models/Pages";
import Login from "./pages/Login/Login";
import Page404 from "./pages/Page404/Page404";
import Register from "./pages/Register/Register";
import ResetPassword from "./pages/ResetPassword/ResetPassword";

const AppRouter = () => {
  const { auth } = useFirebaseContext();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {}, [loading]);
  if (loading) return <Spinner />;
  if (error) return <div>{error.message}</div>;

  return (
    <Routes>
      <Route path={Pages.main} element={<Login user={user!} />} />
      <Route path={Pages.notfound} element={<Page404 />} />
      <Route path={Pages.login} element={<Login user={user!} />} />
      <Route path={Pages.register} element={<Register user={user!} />} />
      <Route path={Pages.reset} element={<ResetPassword user={user!} />} />
    </Routes>
  );
};

export default AppRouter;
