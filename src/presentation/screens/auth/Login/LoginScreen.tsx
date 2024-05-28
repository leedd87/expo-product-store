import React from 'react';
import { Button, Icon, Input, Layout, Text } from '@ui-kitten/components';
import { ScrollView, useWindowDimensions } from 'react-native';

export const LoginScreen = () => {
  const { height } = useWindowDimensions();

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
          />
          <Input
            placeholder="password"
            autoCapitalize="none"
            secureTextEntry
            style={{ marginBottom: 10 }}
          />
        </Layout>
        <Layout style={{ height: 20 }} />

        <Layout>
          <Button onPress={() => {}}>Ingresar</Button>
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
          <Text status="primary" category="s1" onPress={() => {}}>
            {' '}
            Crea una!
          </Text>
        </Layout>
      </ScrollView>
    </Layout>
  );
};
