import { makeStyles } from "@material-ui/core";
import CircleBottomLeft from "../components/circles/circlebottomleft";
import CircleTopRight from "../components/circles/circletopright";

const useStyles = makeStyles((theme) => ({
  icons: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

const BackgroundWrapper = (props) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.icons}>
        <CircleBottomLeft />
        <CircleTopRight />
      </div>
      {props.children}
    </div>
  );
};

export default BackgroundWrapper;
