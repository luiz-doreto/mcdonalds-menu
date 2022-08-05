import { createContext, useState } from 'react';
import { DataType } from '~/Types';

type DetailsInterface = Omit<DataType, 'menus'>;

interface ContextInterface {
  details: DetailsInterface;
  // eslint-disable-next-line no-unused-vars
  setCompanyDetails: (content: DataType) => void;
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

  const setCompanyDetails = (content: DataType) => {
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    const { menus, ...companyDetails } = content;

    setDetails(companyDetails);
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AppContext.Provider value={{ details, setCompanyDetails }}>
      {children}
    </AppContext.Provider>
  );
};
