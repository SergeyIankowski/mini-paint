import { Dna } from "react-loader-spinner";
import Wrapper from "../Wrapper/Wrapper";
import classes from "./spinner.module.scss";

const Spinner = () => {
  return (
    <Wrapper>
      <div className={classes.spinnerContainer}>
        <Dna height={160} width={160} />
      </div>
    </Wrapper>
  );
};
export default Spinner;
