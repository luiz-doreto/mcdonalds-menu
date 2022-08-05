export type MenuItemType = {
  name: string;
  description: string;
  price: number;
  url: string;
};

type MenuType = {
  name: string;
  items: MenuItemType[];
};

type OperationalDaysType = {
  day: string;
  startAt: string;
  endAt: string;
};

type LocationType = {
  lat: string;
  log: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};

export type DataType = {
  id: string;
  name: string;
  description: string;
  phone: string;
  location: LocationType;
  operationDays: OperationalDaysType[];
  privateParking: boolean;
  currency: string;
  menus: MenuType[];
};

export type StackScreensParams = {
  Home: undefined;
  Details: { item: MenuItemType };
  About: undefined;
};
