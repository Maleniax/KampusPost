import React from 'react';
import { TextInput, StyleSheet, TextInputProps, View } from 'react-native';

interface CustomInputProps extends TextInputProps {
  containerStyle?: object; 
}

const CustomInput: React.FC<CustomInputProps> = ({ containerStyle, ...props }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        style={styles.input}
        placeholderTextColor="#888" 
        {...props} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%', 
    marginBottom: 15, 
  },
  input: {
    height: 50,
    backgroundColor: '#f0f0f0', 
    borderRadius: 8, 
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd', 
  },
});

export default CustomInput;