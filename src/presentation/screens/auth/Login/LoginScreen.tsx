import React, { useState } from 'react';
import { Button, Icon, Input, Layout, Text } from '@ui-kitten/components';
import { Alert, ScrollView, useWindowDimensions } from 'react-native';
import { CustomIcon } from '../../../components/ui/CustomIcon';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../../navigation/MainStackNavigator';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { API_URL, STAGE } from '@env';
import { useAuthStore } from '../../../store/auth/useAuthStore';

interface LoginScreenProps extends StackScreenProps<RootStackParams, 'Login'> {}

export const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const { login } = useAuthStore();
  const [isPosting, setIsPosting] = useState(false);

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const { height } = useWindowDimensions();

  const onLogin = async () => {
    if (form.email.length === 0 || form.password.length === 0) {
      return;
    }
    setIsPosting(true);

    const wasSuccessful = await login(form.email, form.password);
    setIsPosting(false);
    if (wasSuccessful) return;

    Alert.alert('Error', 'Usuario o contrasenia incorrectos');
  };

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
            value={form.email}
            onChangeText={(email) => setForm({ ...form, email })}
            style={{ marginBottom: 10 }}
            accessoryLeft={<CustomIcon name="email-outline" />}
          />
          <Input
            placeholder="password"
            autoCapitalize="none"
            value={form.password}
            onChangeText={(password) => setForm({ ...form, password })}
            secureTextEntry
            style={{ marginBottom: 10 }}
            accessoryLeft={<CustomIcon name="lock-outline" />}
          />
        </Layout>

        <Text>{JSON.stringify(form, null, 2)}</Text>

        <Layout style={{ height: 10 }} />

        <Layout>
          <Button
            accessoryRight={<CustomIcon name="arrow-forward-outline" white />}
            onPress={onLogin}
            disabled={isPosting}
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
