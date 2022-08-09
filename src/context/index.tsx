/* eslint-disable no-unused-vars */
import { createContext, useCallback, useMemo, useState } from 'react';
import { DataType, MenuItemType } from '~/Types';

type DetailsInterface = Omit<DataType, 'menus'>;

interface ContextInterface {
  details: DetailsInterface;
  setCompanyDetails: (content: DataType) => void;
  cartItems: MenuItemType[];
  addItem: (item: MenuItemType) => void;
  removeItem: (item: MenuItemType) => void;
  checkIsInCart: (item: MenuItemType) => boolean;
}

interface ProviderProps {
  children: React.ReactNode;
}

export const AppContext = createContext<ContextInterface>(
  {} as ContextInterface,
);

export const AppProvider = ({ children }: ProviderProps) => {
  const [details, setDetails] = useState<DetailsInterface>(
    {} as DetailsInterface,
  );
  const [cartItems, setCartItems] = useState([] as MenuItemType[]);

  const setCompanyDetails = useCallback((content: DataType) => {
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    const { menus, ...companyDetails } = content;

    setDetails(companyDetails);
  }, []);

  const addItem = useCallback(
    (item: MenuItemType) => {
      setCartItems([...cartItems, item]);
    },
    [setCartItems, cartItems],
  );

  const removeItem = useCallback(
    (item: MenuItemType) => {
      const items = [...cartItems];
      const itemIndex = cartItems.findIndex(
        cartItem => cartItem.name === item.name,
      );

      if (itemIndex >= 0) {
        items.splice(itemIndex, 1);
        setCartItems(items);
      }
    },
    [setCartItems, cartItems],
  );

  const checkIsInCart = useCallback(
    (item: MenuItemType): boolean => {
      const itemIndex = cartItems.findIndex(
        cartItem => cartItem.name === item.name,
      );

      return itemIndex >= 0;
    },
    [cartItems],
  );

  const values = useMemo(
    () => ({
      details,
      cartItems,
      addItem,
      removeItem,
      setCompanyDetails,
      checkIsInCart,
    }),
    [addItem, details, removeItem, setCompanyDetails, cartItems, checkIsInCart],
  );

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AppContext.Provider value={values}>{children}</AppContext.Provider>
  );
};
