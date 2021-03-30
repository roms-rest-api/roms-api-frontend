import { BrandInfo, Device } from "./device";

export const FETCH_DEVICES_REQUEST = "FETCH_DEVICES_REQUEST";
export const FETCH_DEVICES_SUCCESS = "FETCH_DEVICES_SUCCESS";
export const FETCH_DEVICES_FAILURE = "FETCH_TODOS_FAILURE";

interface DevicesAsync {
  knownBrands: Array<BrandInfo>;
  devices: Array<Device>;
  loading: boolean;
  error: string;
}

interface FetchDevicesRequest extends DevicesAsync {
  type: typeof FETCH_DEVICES_REQUEST;
}

interface FetchDevicesSuccess extends DevicesAsync {
  type: typeof FETCH_DEVICES_SUCCESS;
}

interface FetchDevicesFailure extends DevicesAsync {
  type: typeof FETCH_DEVICES_FAILURE;
}

export type DevicesActionTypes =
  | FetchDevicesRequest
  | FetchDevicesSuccess
  | FetchDevicesFailure;
