// components/RegisterScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import CustomInput from './CustomInput';

const RegisterScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');

  const handleRegister = () => {
    if (password !== passwordAgain) {
      Alert.alert('Hata', 'Şifreler uyuşmuyor!');
      return;
    }

    console.log('Kayıt başarılı:', { email, password });
    Alert.alert('Başarılı', 'Kayıt başarılı!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kayıt Ol</Text>

      <CustomInput
        label="E-posta"
        value={email}
        onChangeText={setEmail}
        placeholder="eposta@ornek.com"
        keyboardType="email-address"
      />

      <CustomInput
        label="Şifre"
        value={password}
        onChangeText={setPassword}
        placeholder="Şifreniz"
        secureTextEntry
      />

      <CustomInput
        label="Şifre Tekrar"
        value={passwordAgain}
        onChangeText={setPasswordAgain}
        placeholder="Şifrenizi tekrar girin"
        secureTextEntry
      />

      <View style={styles.button}>
        <Button title="Kayıt Ol" onPress={handleRegister} />
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
    marginTop: 16,
  },
});

export default RegisterScreen;
