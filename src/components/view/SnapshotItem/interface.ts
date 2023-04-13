import { User } from "firebase/auth";

interface SnapshotItemProps {
  path: string;
  email: string;
  uid: string;
  user: User;
}

export default SnapshotItemProps;
