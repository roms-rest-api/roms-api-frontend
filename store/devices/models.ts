export type DeviceVersion = {
  version_code: boolean;
  stable: boolean;
};

export type Device = {
  name: string;
  brand: string;
  codename: string;
  supported_versions: Array<DeviceVersion>;
  img: string;
};

export type BrandInfo = {
  name: string;
  devicesAmount: number;
};
