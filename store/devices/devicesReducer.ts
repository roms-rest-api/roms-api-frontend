import {
  DevicesActionTypes,
  FETCH_DEVICES_FAILURE,
  FETCH_DEVICES_REQUEST,
  FETCH_DEVICES_SUCCESS,
} from "./models/actions";
import { BrandInfo, Device } from "./models/device";

interface devicesState {
  knownBrands: Array<BrandInfo>;
  devices: Array<Device>;
  loading: boolean;
  error: string;
}

const defaultState: devicesState = {
  knownBrands: [],
  devices: [],
  error: "",
  loading: true,
};

export const devicesReducer = (
  state = defaultState,
  action: DevicesActionTypes
): devicesState => {
  switch (action.type) {
    case FETCH_DEVICES_REQUEST:
      return { loading: true, devices: [], knownBrands: [], error: "" };
    case FETCH_DEVICES_SUCCESS:
      return {
        loading: false,
        devices: action.devices,
        knownBrands: action.knownBrands,
        error: "",
      };
    case FETCH_DEVICES_FAILURE:
      return {
        loading: false,
        devices: [],
        knownBrands: [],
        error: action.error,
      };
    default:
      return state;
  }
};
