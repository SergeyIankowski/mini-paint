import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/containers/Header/Header";
import PaintBoard from "../../components/containers/PaintBoard/PaintBoard";
import Wrapper from "../../components/view/Wrapper/Wrapper";
import Pages from "../../models/Pages";
import PaintProps from "./interface";
import classes from "./paint.module.scss";

const Paint: FC<PaintProps> = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(Pages.login);
    }
  }, [user]);

  return (
    <Wrapper>
      <div className={classes.paint}>
        <Header />
        <PaintBoard />
      </div>
    </Wrapper>
  );
};

export default Paint;
