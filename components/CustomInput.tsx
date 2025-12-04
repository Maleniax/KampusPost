// components/CustomInput.tsx
import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
} from 'react-native';

interface CustomInputProps extends TextInputProps {
  label?: string;                       // label prop'u eklendi
  value: string;                        // zorunlu value
  onChangeText: (text: string) => void; // zorunlu onChangeText
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  value,
  onChangeText,
  ...rest
}) => {
  return (
    <View style={styles.container}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        {...rest} // placeholder, secureTextEntry, keyboardType vs. buradan geliyor
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  label: {
    marginBottom: 4,
    fontSize: 14,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
});

export default CustomInput;
