import { collection } from "firebase/firestore";
import { FC, useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import useFirebaseContext from "../../../hooks/firebase";
import ReceivedStoreData from "../../../models/ReseivedStoreData";
import convertStoreData from "../../../utils/covertStoreData";
import getEmailsFromStoreData from "../../../utils/getEmailsFromStoreData";
import SnapshotItem from "../../view/SnapshotItem/SnapshotItem";
import Spinner from "../../view/Spinner/Spinner";
import Dropdown from "../Dropdown/Dropdown";
import SnapshotBoardProps from "./interface";
import classes from "./snapshotsBoard.module.scss";

const SnapshotsBoard: FC<SnapshotBoardProps> = ({ user }) => {
  const { db } = useFirebaseContext();
  const q = collection(db, "snapshots");
  const [snapshots, loading, error] = useCollection(q);
  const [uniqueEmailsData, setUniqueEmailsData] = useState<string[]>([]);
  const [snapshotsValues, setSnapshotsValues] = useState<ReceivedStoreData[]>([]);
  const [filterCallback, setFilterCallback] = useState<(item: ReceivedStoreData) => boolean>(
    () => () => true,
  );

  useEffect(() => {
    if (loading) return;
    if (error) return;
    const snapshotsData = convertStoreData(snapshots!);
    const uniqueEmails = getEmailsFromStoreData(snapshotsData);
    setSnapshotsValues(snapshotsData);
    setUniqueEmailsData(uniqueEmails);
  }, [snapshots, loading, error]);

  if (loading) return <Spinner />;
  if (error) return <div>{error.message}</div>;

  const snapshotsItems = snapshotsValues
    .filter(filterCallback)
    .map((item) => (
      <SnapshotItem path={item.snapshot} email={item.email} uid={item.docId} user={user} />
    ));

  return (
    <div className={classes.board}>
      <Dropdown options={uniqueEmailsData} changeFilterCallback={setFilterCallback} />
      <div className={classes.snapshotsContainer}>{snapshotsItems}</div>
    </div>
  );
};

export default SnapshotsBoard;
