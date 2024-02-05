import { User } from "firebase/auth";

interface HeaderProps {
  user: User;
  pathToPage: string;
}

export default HeaderProps;
