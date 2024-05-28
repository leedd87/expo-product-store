import React from 'react';
import { Button, Icon, Input, Layout, Text } from '@ui-kitten/components';
import { ScrollView, useWindowDimensions } from 'react-native';
import { CustomIcon } from '../../../components/ui/CustomIcon';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../../navigation/MainStackNavigator';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { API_URL, STAGE } from '@env';

interface LoginScreenProps extends StackScreenProps<RootStackParams, 'Login'> {}

export const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const { height } = useWindowDimensions();

  console.log({ apiUrl: API_URL, stage: STAGE });

  return (
    <Layout style={{ flex: 1 }}>
      <ScrollView style={{ marginHorizontal: 40 }}>
        <Layout style={{ paddingTop: height * 0.35 }}>
          <Text category="h1">Ingresar</Text>
          <Text category="p2">Por favor, ingrese para continuar</Text>
        </Layout>
        <Layout style={{ marginTop: 20 }}>
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
            Ingresar
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
          <Text>No tiene cuenta?</Text>
          <Text
            status="primary"
            category="s1"
            onPress={() => navigation.navigate('Register')}
          >
            {' '}
            Crea una!
          </Text>
        </Layout>
      </ScrollView>
    </Layout>
  );
};
