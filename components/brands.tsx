import React, { Component, useEffect } from "react";

import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import { useStore } from '../store/devices/store'
import { BrandInfo } from "../store/devices/models";

const BrandsList = () => {
const store = useStore()

  useEffect(() => store.getDevices())

  return (
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
  );
}

export default BrandsList
