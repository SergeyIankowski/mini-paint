import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/containers/Header/Header";
import SnapshotsBoard from "../../components/containers/SnapshotsBoard/SnapshotsBoard";
import Wrapper from "../../components/view/Wrapper/Wrapper";
import Pages from "../../models/Pages";
import SnapshotsProps from "./interface";

const Snapshots: FC<SnapshotsProps> = ({ user }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate(Pages.login);
  });
  return (
    <Wrapper>
      <Header user={user} pathToPage={Pages.paint} />
      <SnapshotsBoard user={user} />
    </Wrapper>
  );
};

export default Snapshots;
