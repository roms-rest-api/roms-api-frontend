import { Dispatch } from "redux";
import { AppActions } from "../models/actions";
import { instance as api } from "../../config";

import {
  FETCH_DEVICES_FAILURE,
  FETCH_DEVICES_REQUEST,
  FETCH_DEVICES_SUCCESS,
} from "./models/actions";
import { BrandInfo, Device } from "./models/device";

const requestDevices = (): AppActions => ({
  type: FETCH_DEVICES_REQUEST,
  loading: true,
  devices: [],
  knownBrands: [],
  error: "",
});
const receiveDevices = (
  devices: Device[],
  knownBrands: BrandInfo[]
): AppActions => ({
  type: FETCH_DEVICES_SUCCESS,
  loading: false,
  devices: devices,
  knownBrands: knownBrands,
  error: "",
});
const invalidateDevices = (): AppActions => ({
  type: FETCH_DEVICES_FAILURE,
  loading: false,
  devices: [],
  knownBrands: [],
  error: "Unable to fetch devices list",
});

export const boundRequestDevices = () => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(requestDevices());

    api
      .get("frontend/devices")
      .then((response) => {
        let brands: Array<BrandInfo> = [];
        let reqDevices: Array<Device> = response.data.message;
        reqDevices.forEach((item) => {
          var existentData: BrandInfo = brands.find(
            (a) => a.name == item.brand
          );
          var indexOf: number = -1;

          if (existentData != null) {
            indexOf = brands.indexOf(existentData);
            brands[indexOf].devicesAmount += 1;
          } else {
            brands.push({
              name: item.brand,
              devicesAmount: 1,
            });
          }
        });

        dispatch(receiveDevices(reqDevices, brands));
      })
      .catch((err) => dispatch(invalidateDevices()));
  };
};
