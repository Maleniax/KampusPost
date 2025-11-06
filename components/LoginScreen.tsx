import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';

import CustomInput from './CustomInput'; 

function LoginScreen(): React.JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Giriş Yapılmaya çalışılıyor:', { email, password });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={styles.container.backgroundColor} />
      
      <View style={styles.formContainer}>
        
        <Text style={styles.title}>
          Giriş Yap
        </Text>
        
        <CustomInput
          placeholder="E-posta" 
          value={email} 
          onChangeText={setEmail}
          keyboardType="email-address" 
          autoCapitalize="none" 
          containerStyle={styles.inputContainer}
        />
        
        {/* ARTIK CustomInput KULLANIYORUZ */}
        <CustomInput
          placeholder="Şifre"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true} 
          containerStyle={styles.inputContainer}
        />
        
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', 
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#333333',
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%', 
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 10, 
    elevation: 3, 
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;