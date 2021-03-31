export type DeviceVersion = {
  version_code: boolean;
  stable: boolean;
};

export type Device = {
  name: String;
  brand: String;
  codename: String;
  supported_versions: Array<DeviceVersion>;
};

export type BrandInfo = {
  name: String;
  devicesAmount: number;
};
