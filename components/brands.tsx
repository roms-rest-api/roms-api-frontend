import React, { useEffect, useState } from "react";

import {
  Avatar,
  Button,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import { useStore } from "../store/devices/store";
import { BrandInfo } from "../store/devices/models";

const useStyles = makeStyles((theme) => ({
  grid: {
    [theme.breakpoints.down("sm")]: {
      padding: '20px',
      width: '100%'
    },
  },
  brandBtn: {
    padding: "10px 70px",
    textTransform: "none",
    background: "#FAFEFF",
    borderRadius: "30px",
    [theme.breakpoints.down("sm")]: {
      width: '100%'
    }
  },
  title: {
    marginBottom: "20px",
  },
}));

const BrandsList = () => {
  const store = useStore();
  const classes = useStyles();
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    if (!isFetched) {
      store.getDevices();
      setIsFetched(true);
    }
  });

  return (
    <Grid item className={classes.grid}>
      <Typography variant="h6" className={classes.title}>
        Brands
      </Typography>
      <Grid container direction="column" spacing={2}>
        {store.knownBrands.map((value: BrandInfo) => (
          <Grid item>
            <Button
              variant="contained"
              className={classes.brandBtn}
              onClick={() => store.setBrand(value)}
            >
              {value.name}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default BrandsList;
