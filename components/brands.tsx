import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { AppState } from "../store/rootStore";
import { AppActions } from "../store/models/actions";
import { BrandInfo } from "../store/devices/models/device";
import { boundRequestDevices } from "../store/devices/devicesAction";
import {
  Avatar,
  Box,
  CircularProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";

interface Props {}

interface LinkStateProps {
  knownBrands: BrandInfo[];
  loading: boolean;
}

interface LinkDispatchProps {
  boundRequestTodos: () => void;
}

type LinkProps = Props & LinkStateProps & LinkDispatchProps;

const mapStateToProps = (state: AppState): LinkStateProps => ({
  knownBrands: state.devicesReducer.knownBrands,
  loading: state.devicesReducer.loading,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, {}, AppActions>
) => ({
  boundRequestTodos: bindActionCreators(boundRequestDevices, dispatch),
});

class BrandsList extends Component<LinkProps> {
  componentDidMount() {
    this.props.boundRequestTodos();
  }

  render() {
    const { knownBrands, loading } = this.props;
    if (loading == true) {
      return (
        <Box width={200} height={400}>
          <CircularProgress></CircularProgress>
        </Box>
      );
    } else {
      return (
        <List>
          {knownBrands.map((value: BrandInfo) => (
            <ListItem button onClick={() => this.handleClick(value)}>
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
      );
    }
  }

  handleClick = (value: BrandInfo) => {};
}

export default connect(mapStateToProps, mapDispatchToProps)(BrandsList);
