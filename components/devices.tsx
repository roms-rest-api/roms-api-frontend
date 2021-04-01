import { Button, CardMedia, makeStyles } from "@material-ui/core";
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Device } from "../store/devices/models";
import { useStore } from "../store/devices/store";

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
  },
  media: {
    height: 140,
  },
  box: {
    width: 900,
  },
});

const DevicesList = () => {
  const store = useStore();
  const classes = useStyles();

  if (!store.selectedBrand) {
    return (
      <Box className={classes.box} mt={10}>
        <Grid container justify="center">
          <Grid item>
            <Typography variant="h5">Select brand to get started</Typography>
          </Grid>
        </Grid>
      </Box>
    );
  } else {
    var devices: Device[] = store.devices.filter(
      (val) => val.brand == store.selectedBrand.name
    );

    return (
      <Box className={classes.box} mt={10}>
        <Grid container>
          {devices.map((val: Device) => (
            <Box mr={2} ml={2}>
              <Grid item>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={val.img}
                      title={val.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {val.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Supported versions:{" "}
                        {val.supported_versions
                          .map((val) => val.version_code)
                          .join(", ")}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Box>
          ))}
        </Grid>
      </Box>
    );
  }
};

export default DevicesList;
