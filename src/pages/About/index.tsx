import { useContext } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Icon from '@expo/vector-icons/Ionicons';

import { AppContext } from '~/context';
import {
  Container,
  SafeArea,
  Title,
  Description,
  MapContainer,
  Address,
  AddressContainer,
} from './styles';
import { StackScreensParams } from '~/Types';
import Header from '~/components/Header';

type ScreenProps = NativeStackScreenProps<StackScreensParams, 'Details'>;

function About({ navigation }: ScreenProps) {
  const { details } = useContext(AppContext);

  return (
    <SafeArea>
      <Header
        leftIcon={<Icon name="arrow-back-sharp" size={32} />}
        onLeftPress={() => navigation.goBack()}
      />
      <Container>
        <Title>{details.name}</Title>
        <Description>{details.description}</Description>
        <MapContainer>
          <MapView
            style={{ flex: 1, borderRadius: 10 }}
            initialRegion={{
              latitude: Number(details.location.lat),
              longitude: Number(details.location.log),
              latitudeDelta: 0.001,
              longitudeDelta: 0.01,
            }}>
            <Marker
              title={details.name}
              coordinate={{
                latitude: Number(details.location.lat),
                longitude: Number(details.location.log),
              }}
            />
          </MapView>
        </MapContainer>
        <AddressContainer>
          <Address>
            {`${details.location.address2} ${details.location.address1}.`}
          </Address>
          <Address>
            {`${details.location.city}, ${details.location.state} ${details.location.postalCode}`}
          </Address>
          <Address>{`${details.location.country}`}</Address>
          <Address>{`${details.phone}`}</Address>
        </AddressContainer>
      </Container>
    </SafeArea>
  );
}

export default About;
