import Wrapper from "../Wrapper/Wrapper";
import Loading from "../../../assets/img/loading.png";
import classes from "./spinner.module.scss";

const Spinner = () => {
  return (
    <Wrapper>
      <div className={classes.spinnerContainer}>
        <img className={classes.loadingIcon} src={Loading} alt="" />
      </div>
    </Wrapper>
  );
};
export default Spinner;
