import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  CircularProgress,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";
import { Device } from "../store/devices/models";
import { instance as api } from "../config";
import '../styles/builds.module.css'

interface IDeviceBuildsProps {
  device: Device;
  versionCode: string;
}

type Build = {
  changelog: string;
  timestamp: number;
  uploader_username: string;
  link?: string;
  id: string;
};

const useStyles = makeStyles((theme) => ({
  accordionHeading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  changelog: {
    background: '#f0f0f0',
    padding: "10px",
    border: "1px solid black",
    borderRadius: "5px"
  }
}));

const getChangelogHtml = (changelog: string) => {
  return `<div class="tl_article"><div class="tl_article_content">${changelog}</div></div>`
}

const DeviceBuilds = (props: IDeviceBuildsProps) => {
  const [builds, setBuilds] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [fetched, setFetched] = React.useState(false);

  const classes = useStyles();

  React.useEffect(() => {
    if (!fetched) {
      api
        .get(`frontend/builds/${props.device.codename}/${props.versionCode}`)
        .then((response) => {
          setFetched(true);
          setBuilds(response.data.message);
          setLoading(false);
        });
    }
  });

  if (loading === true) {
    return (
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <CircularProgress />
        </Grid>
        <Grid item>
          <Typography component="h6">Loading builds..</Typography>
        </Grid>
      </Grid>
    );
  } else if (builds.length == 0) {
    return <Typography>No builds yet, check back later.</Typography>;
  } else {
    return (
      <Grid container direction="column" spacing={2}>
        {builds.map((val: Build) => (
          <Grid item>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.accordionHeading}>
                  {new Date(val.timestamp * 1000).toLocaleDateString()}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container direction="column">
                  <Grid item>
                    <Typography>
                      <b>Uploaded by:</b> {val.uploader_username}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography>
                      <b>Version:</b> {props.versionCode}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography>
                    <b>Changelog:</b>
                    </Typography>
                    <div className={classes.changelog} dangerouslySetInnerHTML={{ __html: getChangelogHtml(val.changelog)}} />
                  </Grid>
                  <Grid item>
                    <Box mt={2}>
                    <Button onClick={() => window.open(val.link)} variant="contained">
                      Download build
                    </Button>
                    </Box>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    );
  }
};

export default DeviceBuilds;
