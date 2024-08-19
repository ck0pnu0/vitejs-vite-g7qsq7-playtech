import { Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './layouts/Header';
import Main from './layouts/Main';

import Home from './pages/Home';
import MobileDevices from './pages/MobileDevices';
import Fashion from './pages/Fashion';
import Software from './pages/Software';

import { ProductType } from './components/Product';

import { useEffect, useState } from 'react';

enum CategoryTypes {
  SOFTWARE = 'software',
  MOBILE_DEVICES = 'mobile-devices',
  FASHION = 'fashion',
}

interface Categories<T extends ProductType> {
  [key: string]: T[];
}

interface SoftwareProductType extends ProductType {
  platform: string;
  license_type: string;
}

interface MobileDevicesProductType extends ProductType {
  battery: string;
  camera: string;
  memory: string;
  screen_size: string;
}

interface FashionProductType extends ProductType {
  size: string[];
  material: string;
  color: string[];
}

const initialData: Categories<ProductType> = {
  [CategoryTypes.SOFTWARE]: [],
  [CategoryTypes.MOBILE_DEVICES]: [],
  [CategoryTypes.FASHION]: [],
};

function App() {
  const [data, setData] = useState<Categories<ProductType>>(initialData);

  const softwareProducts = data[
    CategoryTypes.SOFTWARE
  ] as SoftwareProductType[];
  const mobileDevicesProducts = data[
    CategoryTypes.MOBILE_DEVICES
  ] as MobileDevicesProductType[];
  const fashionProducts = data[CategoryTypes.FASHION] as FashionProductType[];

  const getData = () => {
    fetch('./src/assets/data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson['categories']);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/software"
            element={<Software products={softwareProducts} />}
          />
          {/* onLoadMore={onLoadMoreSoftwareHandler} */}
          <Route
            path="/mobile-devices"
            element={<MobileDevices products={mobileDevicesProducts} />}
          />
          <Route
            path="/fashion"
            element={<Fashion products={fashionProducts} />}
          />
        </Routes>
      </Main>
    </>
  );
}

export default App;
export type {
  SoftwareProductType,
  MobileDevicesProductType,
  FashionProductType,
};
