import { makeStyles } from "@material-ui/core";
import CircleBottomLeft from "../components/circles/circlebottomleft";
import CircleTopRight from "../components/circles/circletopright";
import { config } from "../config";

const useStyles = makeStyles((theme) => ({
  icons: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }
}));

const BackgroundWrapper = (props) => {
  const classes = useStyles();

  return (
    <div>
      <div>
        <CircleBottomLeft />
        <CircleTopRight />
      </div>
      {props.children}
    </div>
  );
};

export default BackgroundWrapper;
