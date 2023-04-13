import { Dispatch, SetStateAction } from "react";
import ReceivedStoreData from "../../../models/ReseivedStoreData";

interface DropdownProps {
  options: string[];
  changeFilterCallback: Dispatch<SetStateAction<(item: ReceivedStoreData) => boolean>>;
}
export default DropdownProps;
