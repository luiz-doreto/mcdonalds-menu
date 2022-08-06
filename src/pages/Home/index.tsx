import { useContext, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
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
  const [menus, setMenus] = useState<DataType['menus']>();

  const fetchContent = async () => {
    const { data } = await api.get<DataType>('menu');
    setCompanyDetails(data);
    setMenus(data.menus);
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
        <FlatList
          data={menus}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <CategoryList
              key={item.name}
              header={item.name}
              items={item.items}
            />
          )}
        />
      </Container>
    </SafeArea>
  );
};

export default Home;
