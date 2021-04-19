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
  Hidden,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { Device, DeviceVersion } from "../store/devices/models";
import { useStore } from "../store/devices/store";
import DeviceBuilds from "./builds";
import { config } from "../config";

interface IDeviceInfoProps {
  device: Device;
}

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      maxWidth: "1000px",
    } /* Maybe do in other way */,
    [theme.breakpoints.down("sm")]: {
      marginRight: "20px",
      marginLeft: "20px",
    },
    marginBottom: "20px",
    background: config.deviceBackgroundColor,
    border: config.deviceBorderStyle,
    padding: "5px",
    borderRadius: "30px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  media: {
    marginTop: "10px",
    marginLeft: "10px",
    width: 140,
    height: 150,
    borderRadius: '10px'
  },
  accordionHeading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  accordion: {
    background: config.deviceAccordionBackground,
    borderRadius: '30px'
  },
  whiteOverride: {
    color: 'white'
  }
}));

const DeviceInfo = (props: IDeviceInfoProps) => {
  const classes = useStyles();
  const store = useStore();

  return (
    <Card className={classes.root}>
      <Hidden smDown>
        <CardMedia className={classes.media} image={props.device.img} />
      </Hidden>
      <CardContent className={classes.content}>
        <Typography component="h5" variant="h5">
          {props.device.name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" className={classes.whiteOverride}>
          {props.device.codename}
        </Typography>

        {props.device.supported_versions.map((val: DeviceVersion) => (
          <Accordion className={classes.accordion}>
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
            className={classes.whiteOverride}
          >
            Reselect device
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DeviceInfo;
