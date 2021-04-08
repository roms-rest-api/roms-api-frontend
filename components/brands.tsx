import React, { useEffect, useState } from "react";

import {
  Avatar,
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
  title: {
    margin: theme.spacing(0, 0, 2),
  },
  grid: {
    [theme.breakpoints.down('sm')]: {
      margin: '20px'
    }
  }
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
      <List>
        {store.knownBrands.map((value: BrandInfo) => (
          <ListItem button onClick={() => store.setBrand(value)}>
            <ListItemAvatar>
              <Avatar>
                <PhoneAndroidIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={value.name}
              secondary={
                value.devicesAmount +
                " device" +
                (value.devicesAmount > 1 ? "s" : "")
              }
            />
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};

export default BrandsList;
