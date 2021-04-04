import classes from "*.module.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { Device, DeviceVersion } from "../store/devices/models";
import { useStore } from "../store/devices/store";
import DeviceBuilds from "./builds";

interface IDeviceInfoProps {
  device: Device;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  media: {
    width: 150,
  },

  accordionHeading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const DeviceInfo = (props: IDeviceInfoProps) => {
  const classes = useStyles();
  const store = useStore();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={props.device.img} />
      <CardContent className={classes.content}>
        <Typography component="h5" variant="h5">
          {props.device.name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {props.device.codename}
        </Typography>

        {props.device.supported_versions.map((val: DeviceVersion) => (
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.accordionHeading}>
                {val.version_code}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <DeviceBuilds
                device={props.device}
                versionCode={val.version_code}
              />
            </AccordionDetails>
          </Accordion>
        ))}

        <Box mt={2}>
          <Button
            startIcon={<KeyboardBackspaceIcon />}
            onClick={() => store.setDevice(null)}
          >
            Reselect device
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DeviceInfo;
