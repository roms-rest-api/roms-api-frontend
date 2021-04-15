import { CardMedia, makeStyles } from "@material-ui/core";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Device } from "../store/devices/models";
import { useStore } from "../store/devices/store";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 250,
    backgroundColor: '#154d6e'
  },
  deviceName: {
    color: 'black'
  },
  media: {
    height: 140,
  },
  gridContainer: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: 'center',
      marginBottom: '20px'
    }
  }
}));

const DevicesList = () => {
  const store = useStore();
  const classes = useStyles();

  if (!store.selectedBrand) {
    return <Typography variant="h5">Select brand to get started</Typography>;
  } else {
    var devices: Device[] = store.devices.filter(
      (val) => val.brand == store.selectedBrand.name
    );

    return (
      <Grid container direction="row" spacing={2} className={classes.gridContainer}>
        {devices.map((val: Device) => (
          <Grid item>
            <Card className={classes.root} onClick={() => store.setDevice(val)}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={val.img}
                  title={val.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className={classes.deviceName}>
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
        ))}
      </Grid>
    );
  }
};

export default DevicesList;
