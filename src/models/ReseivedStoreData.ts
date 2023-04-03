import SnapshotStoreData from "./SnapshotStoreData";

interface ReceivedStoreData extends SnapshotStoreData {
  docId: string;
}

export default ReceivedStoreData;
