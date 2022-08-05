import { useContext, useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Icon from '@expo/vector-icons/Feather';

import { Container, SafeArea } from './styles';
import { AppContext } from '~/context';
import api from '~/services/api';
import { StackScreensParams, DataType } from '~/Types';
import CategoryList from '~/components/CategoryList';
import Header from '~/components/Header';

type ScreenProps = NativeStackScreenProps<StackScreensParams, 'Home'>;

const Home = ({ navigation }: ScreenProps) => {
  const { setCompanyDetails } = useContext(AppContext);
  const [company, setCompany] = useState<DataType>();

  const fetchContent = async () => {
    const { data } = await api.get<DataType>('menu');
    setCompany(data);
    setCompanyDetails(data);
  };

  useEffect(() => {
    fetchContent();
  }, []);

  return (
    <SafeArea>
      <Header
        rightIcon={<Icon name="info" size={32} />}
        onRightPress={() => navigation.navigate('About')}
      />
      <Container>
        {company &&
          company?.menus?.map(menu => (
            <CategoryList
              key={menu.name}
              header={menu.name}
              items={menu.items}
            />
          ))}
      </Container>
    </SafeArea>
  );
};

export default Home;
