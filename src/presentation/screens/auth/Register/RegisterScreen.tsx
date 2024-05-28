import React from 'react';
import { Button, Icon, Input, Layout, Text } from '@ui-kitten/components';
import { ScrollView, useWindowDimensions } from 'react-native';
import { CustomIcon } from '../../../components/ui/CustomIcon';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../../navigation/MainStackNavigator';
import { NavigationProp, useNavigation } from '@react-navigation/native';

export type NavigationType = NavigationProp<RootStackParams>;

export const RegisterScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation<NavigationType>();

  return (
    <Layout style={{ flex: 1 }}>
      <ScrollView style={{ marginHorizontal: 40 }}>
        <Layout style={{ paddingTop: height * 0.3 }}>
          <Text category="h1">Registrar</Text>
          <Text category="p2">Por favor, crea una cuenta para continuar</Text>
        </Layout>
        <Layout style={{ marginTop: 20 }}>
          <Input
            placeholder="fullname"
            style={{ marginBottom: 10 }}
            accessoryLeft={<CustomIcon name="person-outline" />}
          />
          <Input
            placeholder="email"
            keyboardType="email-address"
            autoCapitalize="none"
            style={{ marginBottom: 10 }}
            accessoryLeft={<CustomIcon name="email-outline" />}
          />
          <Input
            placeholder="password"
            autoCapitalize="none"
            secureTextEntry
            style={{ marginBottom: 10 }}
            accessoryLeft={<CustomIcon name="lock-outline" />}
          />
        </Layout>
        <Layout style={{ height: 20 }} />

        <Layout>
          <Button
            accessoryRight={<CustomIcon name="arrow-forward-outline" white />}
            onPress={() => {}}
          >
            Crear
          </Button>
        </Layout>
        <Layout style={{ height: 50 }} />
        <Layout
          style={{
            alignItems: 'flex-end',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Text>Tienes una cuenta?</Text>
          <Text
            status="primary"
            category="s1"
            onPress={() => navigation.goBack()}
          >
            {' '}
            Login
          </Text>
        </Layout>
      </ScrollView>
    </Layout>
  );
};
