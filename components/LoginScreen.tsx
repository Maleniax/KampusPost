// components/LoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import CustomInput from './CustomInput';

const CustomInputAny = CustomInput as any;

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login values:', { email, password });
    // Şimdilik şifre kontrolü yok
    navigation.navigate('Home');
  };

  const handleGoRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>KampusPost</Text>

      <CustomInputAny
        label="E-posta"
        value={email}
        onChangeText={setEmail}
        placeholder="eposta@ornek.com"
        keyboardType="email-address"
      />

      <CustomInputAny
        label="Şifre"
        value={password}
        onChangeText={setPassword}
        placeholder="Şifreniz"
        secureTextEntry
      />

      <View style={styles.button}>
        <Button title="Giriş Yap" onPress={handleLogin} />
      </View>

      <View style={styles.button}>
        <Button title="Kayıt Ol" onPress={handleGoRegister} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center' },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  button: {
    marginTop: 12,
  },
});

export default LoginScreen;
