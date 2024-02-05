import { FC } from "react";
import deleteSnapshot from "../../../firebase/deleteSnapshot";
import useFirebaseContext from "../../../hooks/firebase";
import SnapshotItemProps from "./interface";
import classes from "./snapshotItem.module.scss";

const SnapshotItem: FC<SnapshotItemProps> = ({ path, email, uid, user }) => {
  const { db } = useFirebaseContext();

  const buttonNode =
    user?.email === email ? (
      <button
        className={classes.deleteButton}
        type="button"
        onClick={() => deleteSnapshot(db, uid)}
      >
        Delete
      </button>
    ) : (
      ""
    );
  return (
    <div className={classes.container}>
      <p className={classes.userEmail}>{email}</p>
      <img className={classes.img} src={path} alt="" />
      {buttonNode}
    </div>
  );
};
export default SnapshotItem;
