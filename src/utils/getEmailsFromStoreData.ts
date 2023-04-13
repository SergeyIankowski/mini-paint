import ReceivedStoreData from "../models/ReseivedStoreData";

const getEmailsFromStoreData = (storeData: ReceivedStoreData[]) => {
  const set: Set<string> = new Set();
  storeData.forEach((item) => set.add(item.email));
  const arr: string[] = [];
  set.forEach((email: string) => arr.push(email));
  return arr;
};

export default getEmailsFromStoreData;
