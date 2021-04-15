import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
  },
  img: {
    width: '100vw',
    maxWidth: '1000px'
  },
}));

const PromoLogo = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <img src="promo.png" className={classes.img} />
    </div>
  );
};

export default PromoLogo;
