import { BrandInfo, Device } from "./models";
import { instance as api } from '../../config'
import create, { SetState } from "zustand";


type State = {
    knownBrands: Array<BrandInfo>;
    devices: Array<Device>;
    selectedBrand: BrandInfo
    getDevices: () => void
    setBrand: (brand: BrandInfo) => void
}

const _getDevices = (set: SetState<State>) => {
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

            set({
                knownBrands: brands,
                devices: reqDevices
            })
        })


}

export const useStore = create<State>(set => ({
    knownBrands: [],
    devices: [],
    selectedBrand: null,
    getDevices: () => _getDevices(set),
    setBrand: (brand: BrandInfo) => set({ selectedBrand: brand })
}))
