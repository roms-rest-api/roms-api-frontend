import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  div: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 249,
    height: 257,
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  pic: {
    position: 'absolute',
    zIndex: 2,
    alignSelf: 'center'
  },
  svgIcon2: {
    position: 'absolute',
    zIndex: 1,
  },
}));

const SvgIcon2 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="249"
    height="257"
    viewBox="0 0 249 257"
    fill="none"
    className={props.className}
  >
    <circle cx="148" cy="109" r="148" fill="#EF0825" />
  </svg>
);

const CircleTopRight = () => {
  const classes = useStyles();

  return (
    <div className={classes.div}>
      <img className={classes.pic} src="logo.png"/>
      <SvgIcon2 className={classes.svgIcon2} />
    </div>
  );
};

export default CircleTopRight;
